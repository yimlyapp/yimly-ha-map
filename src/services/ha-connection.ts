import {
  ConnectionStatus,
  HassEntity,
  HassUser,
  HaSessionData,
  PersonEntity,
  DeviceTrackerEntity,
  ZoneEntity,
} from '../types/ha.ts';

export const HA_DEFAULT_URL = 'https://home.robinhort.link';

type StateChangeListener = (entity: HassEntity) => void;
type ConnectionStatusListener = (status: ConnectionStatus, message?: string) => void;
type EntitiesLoadedListener = (entities: Record<string, HassEntity>) => void;

interface PendingRequest {
  resolve: (result: unknown) => void;
  reject: (error: unknown) => void;
}

export class HaConnectionService {
  private static instance: HaConnectionService;
  private ws: WebSocket | null = null;
  private messageId = 1;
  private pendingRequests: Map<number, PendingRequest> = new Map();
  private status: ConnectionStatus = 'disconnected';
  private currentUser: HassUser | null = null;
  private entities: Record<string, HassEntity> = {};
  // Session data is held strictly in memory — NEVER persisted to localStorage or sessionStorage
  private sessionData: HaSessionData | null = null;
  private pingInterval: number | null = null;
  private reconnectTimeout: number | null = null;
  private reconnectAttempts = 0;
  private isDestroyed = false;
  private isSubscribedToEvents = false;
  private isEmbeddedInHa = false;

  private handshakeCompleted = false;
  private handshakePromise: Promise<boolean> | null = null;
  private handshakeTimer: number | null = null;

  private stateChangeListeners: Set<StateChangeListener> = new Set();
  private statusListeners: Set<ConnectionStatusListener> = new Set();
  private entitiesLoadedListeners: Set<EntitiesLoadedListener> = new Set();

  private constructor() {
    this.setupWindowListeners();
  }

  public static getInstance(): HaConnectionService {
    if (!HaConnectionService.instance) {
      HaConnectionService.instance = new HaConnectionService();
    }
    return HaConnectionService.instance;
  }

  public getStatus(): ConnectionStatus {
    return this.status;
  }

  public getCurrentUser(): HassUser | null {
    return this.currentUser;
  }

  public getEntities(): Record<string, HassEntity> {
    return this.entities;
  }

  public isEmbedded(): boolean {
    return this.isEmbeddedInHa;
  }

  public onStatusChange(listener: ConnectionStatusListener): () => void {
    this.statusListeners.add(listener);
    listener(this.status);
    return () => this.statusListeners.delete(listener);
  }

  public onStateChange(listener: StateChangeListener): () => void {
    this.stateChangeListeners.add(listener);
    return () => this.stateChangeListeners.delete(listener);
  }

  public onEntitiesLoaded(listener: EntitiesLoadedListener): () => void {
    this.entitiesLoadedListeners.add(listener);
    if (Object.keys(this.entities).length > 0) {
      listener(this.entities);
    }
    return () => this.entitiesLoadedListeners.delete(listener);
  }

  private setStatus(status: ConnectionStatus, message?: string): void {
    this.status = status;
    this.statusListeners.forEach((l) => l(status, message));
  }

  /**
   * Set up message listeners for Home Assistant Custom Panel integration
   */
  private setupWindowListeners(): void {
    if (typeof window === 'undefined') return;

    // Direct hass object check (if loaded in same context as Home Assistant frontend)
    const directHass = (window as unknown as {
      hass?: {
        user?: HassUser;
        states?: Record<string, HassEntity>;
        auth?: { accessToken?: string; data?: { access_token?: string } };
      };
    }).hass;

    if (directHass) {
      this.isEmbeddedInHa = true;
      this.handshakeCompleted = true;
      if (directHass.user) {
        this.currentUser = directHass.user;
      }
      if (directHass.states) {
        this.entities = directHass.states;
        this.entitiesLoadedListeners.forEach((l) => l(this.entities));
      }
      const token = directHass.auth?.accessToken || directHass.auth?.data?.access_token;
      if (token) {
        this.sessionData = {
          access_token: token,
          ha_url: HA_DEFAULT_URL,
          user: directHass.user,
          mode: 'panel_context',
        };
      }
      this.setStatus('connected', 'Connected via Home Assistant Panel Context');
      return;
    }

    // Listen for messages from HA Custom Panel loader
    window.addEventListener('message', (event: MessageEvent) => {
      const data = event.data;
      if (!data || typeof data !== 'object') return;

      if (data.type === 'ha-init' || data.type === 'ha-state-changed') {
        this.isEmbeddedInHa = true;
        this.handshakeCompleted = true;

        if (this.handshakeTimer !== null) {
          window.clearTimeout(this.handshakeTimer);
          this.handshakeTimer = null;
        }

        if (data.user) {
          this.currentUser = data.user;
        }

        if (data.states && typeof data.states === 'object') {
          this.entities = data.states;
          this.entitiesLoadedListeners.forEach((l) => l(this.entities));
        }

        const token = data.accessToken;
        if (token && (!this.sessionData || this.sessionData.access_token !== token)) {
          this.sessionData = {
            access_token: token,
            ha_url: data.haUrl || HA_DEFAULT_URL,
            user: data.user,
            mode: 'panel_context',
          };
        }

        const userName = data.user?.name || 'Home Assistant User';
        this.setStatus('connected', `Connected via Home Assistant Panel (${userName})`);

        // Connect WebSocket in background for live push events if token is present
        if (token && (!this.ws || this.ws.readyState === WebSocket.CLOSED)) {
          this.connect();
        }
      }
    });
  }

  /**
   * Perform handshake with parent frame to determine if embedded in Home Assistant custom panel.
   * If embedded in HA panel, the parent replies with 'ha-init' containing user, states, and token.
   * If running in AI Studio preview or standalone, parent does not respond and handshake times out.
   */
  public startHandshake(): Promise<boolean> {
    if (this.handshakePromise) return this.handshakePromise;

    this.handshakePromise = new Promise((resolve) => {
      if (typeof window === 'undefined') {
        this.handshakeCompleted = true;
        return resolve(false);
      }

      // If already connected via direct hass or received ha-init
      if (this.handshakeCompleted && this.isEmbeddedInHa) {
        return resolve(true);
      }

      const isIframe = window !== window.parent;
      const params = new URLSearchParams(window.location.search);
      const hasPanelParam = params.has('ha_panel') || params.has('hass');

      if (!isIframe && !hasPanelParam) {
        // Definitely standalone browser window
        this.isEmbeddedInHa = false;
        this.handshakeCompleted = true;
        return resolve(false);
      }

      // Send handshake request to parent
      try {
        window.parent.postMessage({ type: 'yimly-request-hass' }, '*');
      } catch {
        // ignore
      }

      // Wait 500ms for Home Assistant custom panel to respond
      this.handshakeTimer = window.setTimeout(() => {
        this.handshakeTimer = null;
        this.handshakeCompleted = true;
        // If ha-init was not received, we are in preview iframe / standalone
        resolve(this.isEmbeddedInHa);
      }, 500);
    });

    return this.handshakePromise;
  }

  /**
   * Check if running embedded in Home Assistant
   */
  public detectHomeAssistantHost(): boolean {
    return this.isEmbeddedInHa;
  }

  /**
   * Initiate Home Assistant Native OAuth2 redirect (Standalone Mode only)
   */
  public startOAuthLogin(): void {
    const redirectUri = window.location.origin + window.location.pathname;
    const clientId = redirectUri;
    const authUrl = `${HA_DEFAULT_URL}/auth/authorize?response_type=code&client_id=${encodeURIComponent(clientId)}&redirect_uri=${encodeURIComponent(redirectUri)}`;

    // If inside an iframe (like AI Studio preview), navigating inside the iframe will be
    // blocked by Home Assistant's X-Frame-Options: SAMEORIGIN.
    // Try top navigation so the user sees the real HA login screen
    if (window !== window.top && window.top) {
      try {
        window.top.location.href = authUrl;
        return;
      } catch {
        // Sandbox may disallow top navigation without user activation
      }
    }
    window.location.href = authUrl;
  }

  /**
   * Handle OAuth redirect callback (?code=XYZ)
   */
  public async handleAuthCallback(): Promise<boolean> {
    if (typeof window === 'undefined') return false;

    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    if (!code) return false;

    // Clean query params from URL so code is not reused
    const cleanUrl = window.location.origin + window.location.pathname;
    window.history.replaceState({}, document.title, cleanUrl);

    this.setStatus('connecting', 'Authenticating with Home Assistant...');

    try {
      const redirectUri = cleanUrl;
      const clientId = redirectUri;

      const body = new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        client_id: clientId,
      });

      let res: Response;
      try {
        res = await fetch('/api/ha/token', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: body.toString(),
        });
      } catch {
        res = await fetch(`${HA_DEFAULT_URL}/auth/token`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: body.toString(),
        });
      }

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Home Assistant Auth Token Exchange failed: ${errorText}`);
      }

      const tokenData = await res.json();
      // Store in memory ONLY
      this.sessionData = {
        access_token: tokenData.access_token,
        refresh_token: tokenData.refresh_token,
        expires_at: Date.now() + (tokenData.expires_in || 3600) * 1000,
        ha_url: HA_DEFAULT_URL,
        mode: 'oauth',
      };

      await this.connect();
      return true;
    } catch (err) {
      console.error('OAuth Callback Error', err);
      this.setStatus('error', err instanceof Error ? err.message : 'Authentication failed');
      return false;
    }
  }

  private eventSource: EventSource | null = null;

  /**
   * Connect using a temporary testing token (server-side memory only)
   */
  public async connectWithToken(token: string, _haUrl: string = HA_DEFAULT_URL): Promise<void> {
    const cleanToken = token.trim();
    if (!cleanToken) return;

    this.setStatus('connecting', 'Authenticating with Home Assistant...');
    try {
      const res = await fetch('/api/ha/connect-token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: cleanToken }),
      });
      if (!res.ok) {
        throw new Error('Failed to send token to server');
      }

      // Wait a moment for server to authenticate and load states
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await this.connect();
    } catch (err) {
      this.setStatus('error', err instanceof Error ? err.message : 'Connection failed');
      throw err;
    }
  }

  /**
   * Establish connection to Home Assistant:
   * 1. If embedded in custom panel, uses HA postMessage context.
   * 2. In standalone preview, connects to server-managed authenticated HA bridge.
   */
  public async connect(): Promise<void> {
    if (this.isDestroyed) return;

    // 1. If already receiving data from HA custom panel, stay in panel context
    if (this.isEmbeddedInHa && this.currentUser) {
      this.setStatus('connected', `Connected via Home Assistant Panel (${this.currentUser.name})`);
      return;
    }

    // 2. Check server-side authenticated bridge (HA_TOKEN on backend)
    this.setStatus('connecting', 'Connecting to Home Assistant...');
    try {
      const res = await fetch('/api/ha/bootstrap');
      if (res.ok) {
        const data = await res.json();
        if (data.authenticated && data.states && Object.keys(data.states).length > 0) {
          if (data.user) {
            this.currentUser = data.user;
          }
          this.entities = data.states;
          this.entitiesLoadedListeners.forEach((l) => l(this.entities));

          // Connect SSE for real-time live updates
          this.connectEventStream();

          const userName = data.user?.name || 'houth';
          this.setStatus('connected', `Connected to Home Assistant Core (${userName})`);
          return;
        }
      }
    } catch (err) {
      console.warn('Bootstrap fetch failed', err);
    }

    if (this.isEmbeddedInHa) {
      this.setStatus('connecting', 'Waiting for Home Assistant session...');
    } else {
      this.setStatus('auth_required', 'Connect with Home Assistant');
    }
  }

  /**
   * Connect to server-sent events for real-time entity updates
   */
  private connectEventStream(): void {
    if (typeof window === 'undefined' || !window.EventSource) return;

    if (this.eventSource) {
      this.eventSource.close();
      this.eventSource = null;
    }

    try {
      this.eventSource = new EventSource('/api/ha/events');

      this.eventSource.onmessage = (event) => {
        try {
          const payload = JSON.parse(event.data);
          if (payload.type === 'init') {
            if (payload.user) this.currentUser = payload.user;
            if (payload.states) {
              this.entities = payload.states;
              this.entitiesLoadedListeners.forEach((l) => l(this.entities));
            }
          } else if (payload.type === 'state_changed' && payload.entity) {
            const entity = payload.entity as HassEntity;
            this.entities[entity.entity_id] = entity;
            this.stateChangeListeners.forEach((l) => l(entity));
          } else if (payload.type === 'entity_removed' && payload.entity_id) {
            delete this.entities[payload.entity_id];
          }
        } catch (e) {
          console.error('Error handling SSE event', e);
        }
      };

      this.eventSource.onerror = () => {
        // EventSource automatically reconnects on error
      };
    } catch (e) {
      console.warn('Failed to initialize EventSource', e);
    }
  }

  private handleWsMessage(msg: Record<string, unknown>): void {
    const type = msg.type as string;

    if (type === 'auth_required') {
      if (!this.sessionData?.access_token) {
        this.setStatus('auth_required');
        return;
      }
      this.ws?.send(
        JSON.stringify({
          type: 'auth',
          access_token: this.sessionData.access_token,
        })
      );
      return;
    }

    if (type === 'auth_ok') {
      this.setStatus('connected', 'Connected to Home Assistant Core');
      this.startPing();
      this.initializeData();
      return;
    }

    if (type === 'auth_invalid') {
      const message = (msg.message as string) || 'Invalid Home Assistant authentication token';
      this.setStatus('error', message);
      // Clear invalid session in memory
      this.sessionData = null;
      return;
    }

    if (type === 'event' && msg.event) {
      const eventObj = msg.event as {
        event_type?: string;
        data?: { entity_id?: string; new_state?: HassEntity | null };
      };
      if (eventObj.event_type === 'state_changed' && eventObj.data) {
        const entityId = eventObj.data.entity_id || eventObj.data.new_state?.entity_id;
        if (entityId) {
          if (eventObj.data.new_state) {
            const newState = eventObj.data.new_state;
            this.entities[entityId] = newState;
            this.stateChangeListeners.forEach((l) => l(newState));
          } else {
            // Entity removed
            delete this.entities[entityId];
          }
        }
      }
      return;
    }

    if (type === 'result') {
      const id = msg.id as number;
      const pending = this.pendingRequests.get(id);
      if (pending) {
        this.pendingRequests.delete(id);
        if (msg.success) {
          pending.resolve(msg.result);
        } else {
          pending.reject(msg.error);
        }
      }
    }
  }

  private async initializeData(): Promise<void> {
    try {
      // 1. Fetch current HA user from WebSocket API (never hardcoded or inferred)
      try {
        const user = (await this.sendWsCommand({ type: 'auth/current_user' })) as HassUser;
        if (user && user.id) {
          this.currentUser = user;
          if (this.sessionData) {
            this.sessionData.user = user;
          }
        }
      } catch (e) {
        console.warn('Could not fetch current_user from HA WS', e);
      }

      // 2. Fetch all initial states (person.*, device_tracker.*, zone.*)
      const states = (await this.sendWsCommand({ type: 'get_states' })) as HassEntity[];
      const entityMap: Record<string, HassEntity> = {};
      if (Array.isArray(states)) {
        for (const entity of states) {
          entityMap[entity.entity_id] = entity;
        }
      }
      this.entities = entityMap;
      this.entitiesLoadedListeners.forEach((l) => l(this.entities));

      // 3. Subscribe to real-time state changes (prevent duplicate subscriptions)
      if (!this.isSubscribedToEvents) {
        await this.sendWsCommand({
          type: 'subscribe_events',
          event_type: 'state_changed',
        });
        this.isSubscribedToEvents = true;
      }
    } catch (err) {
      console.error('Error during HA initialization', err);
    }
  }

  public sendWsCommand(command: Record<string, unknown>): Promise<unknown> {
    return new Promise((resolve, reject) => {
      if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
        return reject(new Error('WebSocket is not connected'));
      }
      const id = this.messageId++;
      this.pendingRequests.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, ...command }));
    });
  }

  /**
   * Call a Home Assistant service (e.g. notify or ping)
   */
  public async callService(domain: string, service: string, serviceData: Record<string, unknown> = {}): Promise<unknown> {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      return this.sendWsCommand({
        type: 'call_service',
        domain,
        service,
        service_data: serviceData,
      });
    }

    if (this.isEmbeddedInHa && typeof window !== 'undefined' && window !== window.parent) {
      window.parent.postMessage({
        type: 'yimly-call-service',
        domain,
        service,
        serviceData,
      }, '*');
      return { success: true };
    }

    try {
      const res = await fetch('/api/ha/service', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ domain, service, serviceData }),
      });
      if (res.ok) {
        return await res.json();
      }
    } catch {
      // ignore
    }

    throw new Error('Home Assistant is not connected');
  }

  private startPing(): void {
    this.cleanupPing();
    this.pingInterval = window.setInterval(() => {
      if (this.ws && this.ws.readyState === WebSocket.OPEN) {
        this.sendWsCommand({ type: 'ping' }).catch((e) => {
          console.warn('Ping timeout, reconnecting...', e);
          this.ws?.close();
        });
      }
    }, 30000);
  }

  private cleanupPing(): void {
    if (this.pingInterval !== null) {
      clearInterval(this.pingInterval);
      this.pingInterval = null;
    }
  }

  private scheduleReconnect(): void {
    if (this.isDestroyed || !this.sessionData?.access_token) return;
    if (this.reconnectTimeout !== null) return;

    this.reconnectAttempts++;
    const delay = Math.min(1000 * Math.pow(1.5, this.reconnectAttempts), 20000);
    this.setStatus('connecting', `Reconnecting in ${(delay / 1000).toFixed(0)}s...`);

    this.reconnectTimeout = window.setTimeout(() => {
      this.reconnectTimeout = null;
      this.connect();
    }, delay);
  }

  public disconnect(): void {
    this.cleanupPing();
    if (this.eventSource) {
      this.eventSource.close();
      this.eventSource = null;
    }
    if (this.reconnectTimeout !== null) {
      clearTimeout(this.reconnectTimeout);
      this.reconnectTimeout = null;
    }
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
    this.isSubscribedToEvents = false;
    this.setStatus('disconnected');
  }

  public logout(): void {
    this.disconnect();
    this.sessionData = null;
    this.currentUser = null;
    this.entities = {};
    this.setStatus('auth_required', 'Disconnected.');
  }

  /**
   * Helper: Filter entities to HA Persons
   */
  public getPersons(): PersonEntity[] {
    return Object.values(this.entities).filter(
      (e): e is PersonEntity => e.entity_id.startsWith('person.')
    );
  }

  /**
   * Helper: Filter entities to HA Device Trackers
   */
  public getDeviceTrackers(): DeviceTrackerEntity[] {
    return Object.values(this.entities).filter(
      (e): e is DeviceTrackerEntity => e.entity_id.startsWith('device_tracker.')
    );
  }

  /**
   * Helper: Filter entities to HA Zones
   */
  public getZones(): ZoneEntity[] {
    return Object.values(this.entities).filter(
      (e): e is ZoneEntity => e.entity_id.startsWith('zone.')
    );
  }

  /**
   * Find person corresponding to the current authenticated HA user.
   * Returns undefined if no authenticated user or no matching person exists.
   * NEVER falls back to persons[0], hardcoded names, or arbitrary mocks.
   */
  public findCurrentPerson(): PersonEntity | undefined {
    if (!this.currentUser || !this.currentUser.id) {
      return undefined;
    }

    const persons = this.getPersons();

    // 1. Official HA link: match by user_id attribute on person entity
    const byUserId = persons.find((p) => p.attributes?.user_id === this.currentUser?.id);
    if (byUserId) return byUserId;

    // 2. Exact match by username or entity_id suffix if user_id is not mapped in HA
    const currentName = this.currentUser.name?.toLowerCase().trim();
    if (currentName) {
      const byName = persons.find((p) => {
        const pName = p.attributes?.friendly_name?.toLowerCase().trim();
        const pId = p.entity_id.replace('person.', '').toLowerCase().trim();
        return pName === currentName || pId === currentName;
      });
      if (byName) return byName;
    }

    // Do NOT infer from persons[0] or first available person
    return undefined;
  }
}
