/**
 * Generates the Home Assistant integration snippet and Web Component code
 * for loading Yimly HA Map as a native Custom Panel in Home Assistant Core.
 */

export function getHaPanelConfigYaml(appUrl: string): string {
  return `# Add to your Home Assistant configuration.yaml:

panel_custom:
  - name: yimly_map
    sidebar_title: Yimly
    sidebar_icon: mdi:map-marker-radius
    url_path: yimly
    config:
      app_url: "${appUrl}"
    module_url: /local/yimly-panel.js
`;
}

export function getHaPanelJsCode(appUrl: string): string {
  return `/**
 * Yimly HA Map - Home Assistant Custom Panel Web Component
 * Place this file in your Home Assistant: /config/www/yimly-panel.js
 * When registered in configuration.yaml under panel_custom,
 * Yimly HA Map opens automatically reusing your authenticated Home Assistant session.
 */

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
    if (props.hass) {
      this._hass = props.hass;
    }
    if (props.panel) {
      this._panel = props.panel;
    }
    this._sendHassToFrame(this._isInitialized ? 'ha-state-changed' : 'ha-init');
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
      this._sendHassToFrame('ha-init');
    } else {
      this._sendHassToFrame('ha-state-changed');
    }
  }

  get hass() {
    return this._hass;
  }

  connectedCallback() {
    const defaultUrl = "${appUrl}";
    const configUrl = this._panel?.config?.app_url || defaultUrl;
    const finalUrl = configUrl + (configUrl.includes('?') ? '&' : '?') + 'ha_panel=1';

    this.shadowRoot.innerHTML = \`
      <style>
        :host {
          display: block;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        iframe {
          border: none;
          width: 100%;
          height: 100%;
        }
      </style>
      <iframe id="yimlyFrame" src="\${finalUrl}" allow="geolocation; accelerometer"></iframe>
    \`;

    this._iframe = this.shadowRoot.getElementById('yimlyFrame');
    this._iframe.onload = () => {
      this._sendHassToFrame('ha-init');
      setTimeout(() => this._sendHassToFrame('ha-init'), 250);
      setTimeout(() => this._sendHassToFrame('ha-init'), 1000);
    };

    window.addEventListener('message', this._onMessage);
  }

  disconnectedCallback() {
    window.removeEventListener('message', this._onMessage);
  }

  _onMessage(event) {
    if (!event.data || typeof event.data !== 'object') return;

    if (event.data.type === 'yimly-request-hass') {
      this._sendHassToFrame('ha-init');
    } else if (event.data.type === 'yimly-call-service' && this._hass) {
      const { domain, service, serviceData } = event.data;
      if (domain && service) {
        this._hass.callService(domain, service, serviceData || {});
      }
    }
  }

  _sendHassToFrame(messageType) {
    const iframe = this._iframe || this.shadowRoot?.getElementById('yimlyFrame');
    if (!iframe || !iframe.contentWindow || !this._hass) return;

    // Extract access token from official HA auth object
    const token = this._hass.auth?.accessToken || this._hass.auth?.data?.access_token || '';

    // Safely serialize states to avoid DataCloneError
    let safeStates = {};
    if (this._hass.states) {
      try {
        safeStates = JSON.parse(JSON.stringify(this._hass.states));
      } catch (e) {
        safeStates = this._hass.states;
      }
    }

    if (messageType === 'ha-init') {
      this._isInitialized = true;
    }

    iframe.contentWindow.postMessage({
      type: messageType || 'ha-init',
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
`;
}
