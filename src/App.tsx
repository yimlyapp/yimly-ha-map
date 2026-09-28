import React, { useEffect, useState, useMemo, useRef } from 'react';
import './yimly-ha-map-card.ts';
import { HomeAssistant, HassEntity, HassUser, YimlyCardConfig } from './types/ha.ts';
import { LayoutDashboard, Sliders, Layers, Eye, RefreshCw } from 'lucide-react';

export default function App() {
  const [entities, setEntities] = useState<Record<string, HassEntity>>({});
  const [currentUser, setCurrentUser] = useState<HassUser>({
    id: 'ha_user_main',
    name: 'Home Assistant User',
    is_owner: true,
    is_admin: true,
  });
  const [cardHeight, setCardHeight] = useState<string>('540px');
  const [activeStyle, setActiveStyle] = useState<'osm' | 'positron' | 'bright' | 'liberty' | 'dark' | 'fiord'>('osm');
  const [dashboardView, setDashboardView] = useState<'card' | 'panel'>('card');
  const [isLiveConnected, setIsLiveConnected] = useState<boolean>(false);

  // Home Assistant Object construction
  const hassObject = useMemo<HomeAssistant>(() => {
    return {
      states: entities,
      user: currentUser,
      language: 'en',
      callService: async (domain: string, service: string, serviceData?: Record<string, unknown>) => {
        console.log(`[HA Lovelace Service Call] ${domain}.${service}`, serviceData);
        try {
          const res = await fetch('/api/ha/service', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ domain, service, serviceData }),
          });
          if (res.ok) return await res.json();
        } catch {
          // Dev preview fallback
        }
        return { success: true };
      },
    };
  }, [entities, currentUser]);

  // Connect to live Home Assistant backend stream if available
  useEffect(() => {
    let eventSource: EventSource | null = null;

    async function bootstrap() {
      try {
        const res = await fetch('/api/ha/bootstrap');
        if (res.ok) {
          const data = await res.json();
          if (data.authenticated && data.states && Object.keys(data.states).length > 0) {
            setEntities(data.states);
            if (data.user) setCurrentUser(data.user);
            setIsLiveConnected(true);

            eventSource = new EventSource('/api/ha/events');
            eventSource.onmessage = (event) => {
              try {
                const payload = JSON.parse(event.data);
                if (payload.type === 'init' && payload.states) {
                  setEntities(payload.states);
                  if (payload.user) setCurrentUser(payload.user);
                } else if (payload.type === 'state_changed' && payload.entity) {
                  setEntities((prev) => ({
                    ...prev,
                    [payload.entity.entity_id]: payload.entity,
                  }));
                }
              } catch (e) {
                console.error('Error in SSE parsing', e);
              }
            };
          }
        }
      } catch {
        // Dev offline preview
      }
    }

    bootstrap();

    return () => {
      if (eventSource) eventSource.close();
    };
  }, []);

  // Card reference to pass hass and config
  const cardRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const cardEl = cardRef.current as any;
    if (!cardEl) return;

    const config: YimlyCardConfig = {
      type: 'custom:yimly-ha-map',
      height: dashboardView === 'panel' ? 'calc(100vh - 120px)' : cardHeight,
      map_style: activeStyle,
    };

    if (typeof cardEl.setConfig === 'function') {
      cardEl.setConfig(config);
    }
    cardEl.hass = hassObject;
  }, [hassObject, cardHeight, activeStyle, dashboardView]);

  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden bg-slate-900 text-slate-100 font-sans">
      {/* Top Lovelace Test Harness Bar */}
      <header className="flex h-12 shrink-0 items-center justify-between border-b border-slate-800 bg-slate-950/80 px-4 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-bold text-sm tracking-tight text-white">Yimly HA Map</span>
          </div>
          <span className="rounded-md bg-slate-800 px-2 py-0.5 text-[11px] font-mono text-indigo-300 border border-slate-700">
            type: custom:yimly-ha-map
          </span>
        </div>

        {/* Dashboard View & Sizing Switcher */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-slate-800/80 p-1 rounded-xl border border-slate-700/60 text-xs">
            <button
              onClick={() => setDashboardView('card')}
              className={`px-2.5 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
                dashboardView === 'card' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Card View (Lovelace Grid)
            </button>
            <button
              onClick={() => setDashboardView('panel')}
              className={`px-2.5 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
                dashboardView === 'panel' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Panel View (Full Screen)
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
            <span>Height:</span>
            <select
              value={cardHeight}
              onChange={(e) => setCardHeight(e.target.value)}
              className="rounded-lg border border-slate-700 bg-slate-800 px-2 py-1 text-slate-200 text-xs focus:outline-none"
            >
              <option value="420px">420px (Compact)</option>
              <option value="540px">540px (Standard)</option>
              <option value="680px">680px (Large)</option>
            </select>
          </div>
        </div>
      </header>

      {/* Main Dashboard Canvas */}
      <main className="flex-1 overflow-auto bg-slate-900/60 p-3 sm:p-6 flex flex-col items-center justify-start">
        <div
          className={`w-full transition-all duration-200 ${
            dashboardView === 'panel' ? 'max-w-full h-full' : 'max-w-4xl'
          }`}
        >
          {/* Lovelace Card Container */}
          <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-700/50 bg-slate-950">
            {/* Custom Lovelace Card Web Component Instance */}
            {React.createElement('yimly-ha-map', {
              ref: cardRef,
              style: {
                display: 'block',
                width: '100%',
                height: dashboardView === 'panel' ? 'calc(100vh - 120px)' : cardHeight,
              },
            })}
          </div>

          {/* Lovelace Dashboard YAML Snippet Helper */}
          {dashboardView === 'card' && (
            <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-xs text-slate-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="font-semibold text-slate-300">Lovelace Dashboard YAML Configuration:</span>
                <pre className="mt-1 font-mono text-[11px] text-indigo-300 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800 inline-block">
                  type: custom:yimly-ha-map
                </pre>
              </div>
              <div className="text-[11px] text-slate-500">
                HACS Custom Card • Home Assistant Native Lovelace Lifecycle
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
