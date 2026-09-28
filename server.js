// server.ts
import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
dotenv.config();
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
var app = express();
var PORT = Number(process.env.PORT) || 3e3;
var HA_URL = process.env.HA_URL || "https://home.robinhort.link";
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
var DATA_DIR = path.join(__dirname, "data");
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}
var CIRCLES_FILE = path.join(DATA_DIR, "circles.json");
function readCirclesData() {
  try {
    if (fs.existsSync(CIRCLES_FILE)) {
      return JSON.parse(fs.readFileSync(CIRCLES_FILE, "utf-8"));
    }
  } catch (e) {
    console.error("Error reading circles file", e);
  }
  return {};
}
function writeCirclesData(data) {
  try {
    fs.writeFileSync(CIRCLES_FILE, JSON.stringify(data, null, 2), "utf-8");
  } catch (e) {
    console.error("Error writing circles file", e);
  }
}
var HaServerManager = class {
  constructor() {
    this.ws = null;
    this.messageId = 1;
    this.pendingRequests = /* @__PURE__ */ new Map();
    this.reconnectTimer = null;
    this.pingInterval = null;
    this.connected = false;
    this.authenticated = false;
    this.haVersion = "";
    this.currentUser = null;
    this.states = {};
    this.sseClients = /* @__PURE__ */ new Set();
    this.init();
  }
  init() {
    const token = (process.env.HA_TOKEN || process.env.HOME_ASSISTANT_TOKEN || "").trim();
    if (token) {
      this.connect(token);
    }
  }
  setToken(token) {
    const cleanToken = token.trim();
    if (!cleanToken) return;
    process.env.HA_TOKEN = cleanToken;
    this.connect(cleanToken);
  }
  connect(token) {
    if (this.ws && (this.ws.readyState === WebSocket.OPEN || this.ws.readyState === WebSocket.CONNECTING)) {
      try {
        this.ws.close();
      } catch {
      }
    }
    const wsUrl = HA_URL.replace(/^http/, "ws") + "/api/websocket";
    console.log(`[HA Server] Connecting to Home Assistant WebSocket at ${wsUrl}...`);
    try {
      this.ws = new globalThis.WebSocket(wsUrl);
      this.ws.onopen = () => {
        this.connected = true;
        console.log(`[HA Server] WebSocket connection opened to ${wsUrl}`);
      };
      this.ws.onmessage = async (event) => {
        try {
          const raw = typeof event.data === "string" ? event.data : event.data.toString();
          const msg = JSON.parse(raw);
          await this.handleMessage(msg, token);
        } catch (e) {
          console.error("[HA Server] Error parsing WS message", e);
        }
      };
      this.ws.onclose = (event) => {
        this.connected = false;
        this.authenticated = false;
        this.cleanupPing();
        console.warn(`[HA Server] WebSocket closed (code ${event.code})`);
        this.scheduleReconnect(token);
      };
      this.ws.onerror = (err) => {
        console.warn("[HA Server] WebSocket error", err);
      };
    } catch (err) {
      console.error("[HA Server] Failed to initiate WebSocket", err);
      this.scheduleReconnect(token);
    }
  }
  async handleMessage(msg, token) {
    const type = msg.type;
    if (type === "auth_required") {
      this.haVersion = String(msg.ha_version || "");
      this.ws?.send(
        JSON.stringify({
          type: "auth",
          access_token: token
        })
      );
      return;
    }
    if (type === "auth_ok") {
      this.authenticated = true;
      this.haVersion = String(msg.ha_version || this.haVersion || "2026.9.4");
      console.log(`[HA Server] Authenticated successfully with Home Assistant Core ${this.haVersion}`);
      this.startPing();
      await this.loadInitialData();
      return;
    }
    if (type === "auth_invalid") {
      this.authenticated = false;
      console.error(`[HA Server] Authentication failed: ${msg.message || "Invalid access token"}`);
      return;
    }
    if (type === "event" && msg.event) {
      const ev = msg.event;
      if (ev.event_type === "state_changed" && ev.data) {
        const entityId = ev.data.entity_id || ev.data.new_state?.entity_id;
        if (entityId) {
          if (ev.data.new_state) {
            this.states[entityId] = ev.data.new_state;
            this.broadcastSse({ type: "state_changed", entity: ev.data.new_state });
          } else {
            delete this.states[entityId];
            this.broadcastSse({ type: "entity_removed", entity_id: entityId });
          }
        }
      }
      return;
    }
    if (type === "result") {
      const id = msg.id;
      const resolver = this.pendingRequests.get(id);
      if (resolver) {
        this.pendingRequests.delete(id);
        resolver(msg.result);
      }
    }
  }
  sendCommand(cmd) {
    return new Promise((resolve, reject) => {
      if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
        return reject(new Error("WebSocket is not connected"));
      }
      const id = this.messageId++;
      this.pendingRequests.set(id, resolve);
      this.ws.send(JSON.stringify({ id, ...cmd }));
    });
  }
  async loadInitialData() {
    try {
      const user = await this.sendCommand({ type: "auth/current_user" });
      if (user && user.id) {
        this.currentUser = user;
        console.log(`[HA Server] Authenticated user discovered: ${user.name} (${user.id})`);
      }
      const rawStates = await this.sendCommand({ type: "get_states" });
      if (Array.isArray(rawStates)) {
        const map = {};
        for (const s of rawStates) {
          map[s.entity_id] = s;
        }
        this.states = map;
        const persons = Object.keys(map).filter((k) => k.startsWith("person.")).length;
        const trackers = Object.keys(map).filter((k) => k.startsWith("device_tracker.")).length;
        console.log(`[HA Server] Loaded ${rawStates.length} entities (${persons} persons, ${trackers} device trackers)`);
      }
      await this.sendCommand({
        type: "subscribe_events",
        event_type: "state_changed"
      });
      console.log("[HA Server] Subscribed to real-time state_changed events");
      this.broadcastSse({
        type: "init",
        user: this.currentUser,
        states: this.states
      });
    } catch (e) {
      console.error("[HA Server] Error loading initial data from Home Assistant", e);
    }
  }
  broadcastSse(data) {
    const payload = `data: ${JSON.stringify(data)}

`;
    for (const client of this.sseClients) {
      try {
        client.write(payload);
      } catch {
        this.sseClients.delete(client);
      }
    }
  }
  startPing() {
    this.cleanupPing();
    this.pingInterval = setInterval(() => {
      if (this.ws && this.ws.readyState === WebSocket.OPEN) {
        this.sendCommand({ type: "ping" }).catch(() => this.ws?.close());
      }
    }, 3e4);
  }
  cleanupPing() {
    if (this.pingInterval) {
      clearInterval(this.pingInterval);
      this.pingInterval = null;
    }
  }
  scheduleReconnect(token) {
    if (this.reconnectTimer) return;
    this.reconnectTimer = setTimeout(() => {
      this.reconnectTimer = null;
      if (!this.authenticated && token) {
        this.connect(token);
      }
    }, 5e3);
  }
};
var haManager = new HaServerManager();
app.get("/api/ha/status", async (_req, res) => {
  const persons = Object.values(haManager.states).filter((s) => s.entity_id.startsWith("person."));
  const trackers = Object.values(haManager.states).filter((s) => s.entity_id.startsWith("device_tracker."));
  res.json({
    online: true,
    ha_url: HA_URL,
    ha_version: haManager.haVersion || "2026.9.4",
    authenticated: haManager.authenticated,
    user: haManager.currentUser ? { id: haManager.currentUser.id, name: haManager.currentUser.name } : null,
    stats: {
      total_entities: Object.keys(haManager.states).length,
      persons_count: persons.length,
      device_trackers_count: trackers.length,
      persons: persons.map((p) => ({
        entity_id: p.entity_id,
        name: p.attributes.friendly_name,
        latitude: p.attributes.latitude,
        longitude: p.attributes.longitude
      })),
      trackers: trackers.map((t) => ({
        entity_id: t.entity_id,
        name: t.attributes.friendly_name,
        latitude: t.attributes.latitude,
        longitude: t.attributes.longitude,
        source_type: t.attributes.source_type
      }))
    }
  });
});
app.get("/api/ha/bootstrap", (_req, res) => {
  res.json({
    authenticated: haManager.authenticated,
    ha_url: HA_URL,
    ha_version: haManager.haVersion || "2026.9.4",
    user: haManager.currentUser,
    states: haManager.states
  });
});
app.get("/api/ha/events", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.flushHeaders?.();
  if (haManager.authenticated) {
    res.write(`data: ${JSON.stringify({ type: "init", user: haManager.currentUser, states: haManager.states })}

`);
  }
  haManager.sseClients.add(res);
  req.on("close", () => {
    haManager.sseClients.delete(res);
  });
});
app.post("/api/ha/service", async (req, res) => {
  const { domain, service, serviceData } = req.body;
  if (!domain || !service) {
    return res.status(400).json({ error: "Missing domain or service" });
  }
  try {
    const result = await haManager.sendCommand({
      type: "call_service",
      domain,
      service,
      service_data: serviceData || {}
    });
    res.json({ success: true, result });
  } catch (err) {
    res.status(500).json({ error: "Service call failed", message: String(err) });
  }
});
app.post("/api/ha/connect-token", (req, res) => {
  const { token } = req.body;
  if (!token || typeof token !== "string") {
    return res.status(400).json({ error: "Token is required" });
  }
  haManager.setToken(token.trim());
  res.json({ success: true, message: "Server initiating authentication" });
});
app.post("/api/ha/token", async (req, res) => {
  try {
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(req.body)) {
      params.append(key, String(value));
    }
    const haRes = await fetch(`${HA_URL}/auth/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: params.toString()
    });
    const data = await haRes.json();
    if (data.access_token) {
      haManager.setToken(data.access_token);
    }
    res.status(haRes.status).json(data);
  } catch (err) {
    res.status(500).json({
      error: "Proxy token exchange failed",
      message: err instanceof Error ? err.message : String(err)
    });
  }
});
app.all("/api/ha/rest/*", async (req, res) => {
  const targetPath = req.url.replace("/api/ha/rest", "/api");
  const token = req.headers.authorization || (process.env.HA_TOKEN ? `Bearer ${process.env.HA_TOKEN}` : "");
  try {
    const haRes = await fetch(`${HA_URL}${targetPath}`, {
      method: req.method,
      headers: {
        ...token ? { Authorization: token } : {},
        "Content-Type": "application/json"
      },
      body: ["POST", "PUT", "PATCH"].includes(req.method) ? JSON.stringify(req.body) : void 0
    });
    const data = await haRes.json().catch(() => null);
    res.status(haRes.status).json(data || {});
  } catch (err) {
    res.status(502).json({ error: "Proxy to Home Assistant failed", message: String(err) });
  }
});
app.get("/api/yimly/circle/:code", (req, res) => {
  const code = req.params.code.toUpperCase();
  const circles = readCirclesData();
  const circle = circles[code];
  if (circle) {
    res.json({ success: true, circle });
  } else {
    res.status(404).json({ success: false, error: "Circle not found" });
  }
});
app.post("/api/yimly/circle", (req, res) => {
  const circle = req.body;
  if (!circle || !circle.code) {
    return res.status(400).json({ error: "Invalid circle data" });
  }
  const circles = readCirclesData();
  circles[circle.code.toUpperCase()] = circle;
  writeCirclesData(circles);
  res.json({ success: true, circle });
});
app.get("/yimly-panel.js", (req, res) => {
  res.setHeader("Content-Type", "application/javascript");
  const protocol = req.headers["x-forwarded-proto"] || req.protocol || "http";
  const host = req.headers["x-forwarded-host"] || req.get("host") || `localhost:${PORT}`;
  const defaultAppUrl = `${protocol}://${host}`;
  res.send(`
class HaPanelYimlyMap extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._onMessage = this._onMessage.bind(this);
    this._hass = null;
    this._panel = null;
    this._iframe = null;
    this._isInitialized = false;
  }
  setProperties(props) {
    if (!props) return;
    if (props.hass) this._hass = props.hass;
    if (props.panel) this._panel = props.panel;
    this._sendHass(this._isInitialized ? 'ha-state-changed' : 'ha-init');
  }
  set panel(panel) {
    this._panel = panel;
    if (this._iframe && panel?.config?.app_url) {
      const url = panel.config.app_url;
      const targetUrl = url + (url.includes('?') ? '&' : '?') + 'ha_panel=1';
      if (this._iframe.src !== targetUrl) {
        this._iframe.src = targetUrl;
      }
    }
  }
  get panel() {
    return this._panel;
  }
  set hass(hass) {
    const prev = this._hass;
    this._hass = hass;
    if (!prev || !this._isInitialized) {
      this._sendHass('ha-init');
    } else {
      this._sendHass('ha-state-changed');
    }
  }
  get hass() {
    return this._hass;
  }
  connectedCallback() {
    const rawUrl = this._panel?.config?.app_url || "${defaultAppUrl}";
    const finalUrl = rawUrl + (rawUrl.includes('?') ? '&' : '?') + 'ha_panel=1';
    this.shadowRoot.innerHTML = \`
      <style>:host{display:block;width:100%;height:100%;overflow:hidden;}iframe{border:none;width:100%;height:100%;}</style>
      <iframe id="yimlyFrame" src="\${finalUrl}" allow="geolocation; accelerometer"></iframe>
    \`;
    this._iframe = this.shadowRoot.getElementById('yimlyFrame');
    this._iframe.onload = () => {
      this._sendHass('ha-init');
      setTimeout(() => this._sendHass('ha-init'), 250);
      setTimeout(() => this._sendHass('ha-init'), 1000);
    };
    window.addEventListener('message', this._onMessage);
  }
  disconnectedCallback() {
    window.removeEventListener('message', this._onMessage);
  }
  _onMessage(event) {
    if (!event.data || typeof event.data !== 'object') return;
    if (event.data.type === 'yimly-request-hass') {
      this._sendHass('ha-init');
    } else if (event.data.type === 'yimly-call-service' && this._hass) {
      const { domain, service, serviceData } = event.data;
      if (domain && service) {
        this._hass.callService(domain, service, serviceData || {});
      }
    }
  }
  _sendHass(type) {
    const iframe = this._iframe || this.shadowRoot?.getElementById('yimlyFrame');
    if (!iframe || !iframe.contentWindow || !this._hass) return;
    const token = this._hass.auth?.accessToken || this._hass.auth?.data?.access_token || '';
    let safeStates = {};
    if (this._hass.states) {
      try {
        safeStates = JSON.parse(JSON.stringify(this._hass.states));
      } catch (e) {
        safeStates = this._hass.states;
      }
    }
    if (type === 'ha-init') {
      this._isInitialized = true;
    }
    iframe.contentWindow.postMessage({
      type: type || 'ha-init',
      user: this._hass.user || null,
      accessToken: token,
      states: safeStates,
      haUrl: window.location.origin,
    }, '*');
  }
}
if (!customElements.get('ha-panel-yimly_map')) {
  customElements.define('ha-panel-yimly_map', HaPanelYimlyMap);
}
  `);
});
async function startServer() {
  const isProd = process.env.NODE_ENV === "production";
  if (!isProd) {
    const { createServer } = await import("vite");
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Yimly HA Map server running on http://0.0.0.0:${PORT}`);
  });
}
startServer();
