import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import { YimlyCardComponent } from './components/YimlyCardComponent.tsx';
import { HomeAssistant, YimlyCardConfig } from './types/ha.ts';
import cardStyles from './index.css?inline';

// Inject scoped styles into document head once for Lovelace rendering
function ensureStylesInjected(): void {
  if (typeof document === 'undefined') return;
  if (!document.getElementById('yimly-ha-map-styles')) {
    const styleEl = document.createElement('style');
    styleEl.id = 'yimly-ha-map-styles';
    styleEl.textContent = cardStyles;
    document.head.appendChild(styleEl);
  }
}

/**
 * Yimly HA Map - Home Assistant Lovelace Custom Card
 * Custom Element: <yimly-ha-map>
 * Dashboard Type: type: custom:yimly-ha-map
 */
export class YimlyHaMapCard extends HTMLElement {
  private _hass?: HomeAssistant;
  private _config?: YimlyCardConfig;
  private _root?: Root;
  private _mountPoint?: HTMLDivElement;

  static getStubConfig(): Partial<YimlyCardConfig> {
    return {
      type: 'custom:yimly-ha-map',
      height: '500px',
      map_style: 'osm',
    };
  }

  public setConfig(config: YimlyCardConfig): void {
    if (!config) {
      throw new Error('Invalid configuration provided to yimly-ha-map card');
    }
    this._config = {
      height: '500px',
      map_style: 'osm',
      ...config,
      type: 'custom:yimly-ha-map',
    };
    this.updateCard();
  }

  public set hass(hass: HomeAssistant) {
    this._hass = hass;
    this.updateCard();
  }

  public get hass(): HomeAssistant | undefined {
    return this._hass;
  }

  public getCardSize(): number {
    const heightStr = String(this._config?.height || '500');
    const heightPx = parseInt(heightStr, 10) || 500;
    return Math.max(1, Math.round(heightPx / 50));
  }

  // Home Assistant Sections Dashboard layout options
  public getLayoutOptions(): { grid_rows?: number; grid_columns?: number; grid_min_rows?: number } {
    const heightStr = String(this._config?.height || '500');
    const heightPx = parseInt(heightStr, 10) || 500;
    const rows = Math.max(4, Math.round(heightPx / 60));
    return {
      grid_rows: rows,
      grid_columns: 4,
      grid_min_rows: 4,
    };
  }

  connectedCallback(): void {
    ensureStylesInjected();
    if (!this._mountPoint) {
      this._mountPoint = document.createElement('div');
      this._mountPoint.className = 'yimly-ha-card-root w-full h-full';
      this.appendChild(this._mountPoint);
      this._root = createRoot(this._mountPoint);
    }
    this.updateCard();
  }

  disconnectedCallback(): void {
    if (this._root) {
      this._root.unmount();
      this._root = undefined;
    }
    if (this._mountPoint) {
      this._mountPoint.remove();
      this._mountPoint = undefined;
    }
  }

  private updateCard(): void {
    if (!this._root || !this._config) return;

    this._root.render(
      React.createElement(YimlyCardComponent, {
        hass: this._hass,
        config: this._config,
      })
    );
  }
}

// Define custom element for Home Assistant Lovelace
if (!customElements.get('yimly-ha-map')) {
  customElements.define('yimly-ha-map', YimlyHaMapCard);
}

// Register in customCards array for Home Assistant Card Picker UI
interface CustomCardEntry {
  type: string;
  name: string;
  description: string;
  preview: boolean;
  documentationURL?: string;
}

declare global {
  interface Window {
    customCards?: CustomCardEntry[];
  }
}

window.customCards = window.customCards || [];
if (!window.customCards.some((c) => c.type === 'yimly-ha-map')) {
  window.customCards.push({
    type: 'yimly-ha-map',
    name: 'Yimly HA Map',
    description: 'Family location map card with live member tracking and edge markers',
    preview: true,
    documentationURL: 'https://github.com/yimlyapp/yimly-ha-map',
  });
}
