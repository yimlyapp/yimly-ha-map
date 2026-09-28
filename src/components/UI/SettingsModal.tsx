import React, { useState } from 'react';
import {
  X,
  User,
  Users,
  Map as MapIcon,
  Smartphone,
  Bell,
  ChevronDown,
  ChevronUp,
  Check,
  Copy,
  LogOut,
  ShieldCheck,
  ExternalLink,
  Home,
} from 'lucide-react';
import {
  HassUser,
  PersonEntity,
  DeviceTrackerEntity,
  MapStyleId,
  YimlyPreferences,
  ConnectionStatus,
} from '../../types/ha.ts';
import { MAP_STYLES } from '../../utils/map-styles.ts';
import { getHaPanelConfigYaml, getHaPanelJsCode } from '../../services/ha-panel-export.ts';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: HassUser | null;
  currentPerson?: PersonEntity;
  deviceTrackers: DeviceTrackerEntity[];
  mapStyle: MapStyleId;
  onChangeMapStyle: (style: MapStyleId) => void;
  preferences: YimlyPreferences;
  onUpdatePreferences: (prefs: Partial<YimlyPreferences>) => void;
  connectionStatus: ConnectionStatus;
  haUrl: string;
  onLogout: () => void;
  onPingDevice: (entityId: string) => Promise<void>;
  onOpenCircleModal: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  currentPerson,
  deviceTrackers,
  mapStyle,
  onChangeMapStyle,
  preferences,
  onUpdatePreferences,
  connectionStatus,
  haUrl,
  onLogout,
  onPingDevice,
  onOpenCircleModal,
}) => {
  // Collapsible rounded card sections
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    profile: true,
    maps: true,
    family: false,
    devices: false,
    notifications: false,
    ha: false,
  });

  const [copiedYaml, setCopiedYaml] = useState(false);
  const [copiedJs, setCopiedJs] = useState(false);
  const [pingStatus, setPingStatus] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const appUrl = typeof window !== 'undefined' ? window.location.origin : '';

  const handleCopyYaml = () => {
    navigator.clipboard.writeText(getHaPanelConfigYaml(appUrl));
    setCopiedYaml(true);
    setTimeout(() => setCopiedYaml(false), 2000);
  };

  const handleCopyJs = () => {
    navigator.clipboard.writeText(getHaPanelJsCode(appUrl));
    setCopiedJs(true);
    setTimeout(() => setCopiedJs(false), 2000);
  };

  const handlePing = async (trackerId: string) => {
    setPingStatus((prev) => ({ ...prev, [trackerId]: 'pinging' }));
    try {
      await onPingDevice(trackerId);
      setPingStatus((prev) => ({ ...prev, [trackerId]: 'success' }));
      setTimeout(() => {
        setPingStatus((prev) => ({ ...prev, [trackerId]: '' }));
      }, 3000);
    } catch {
      setPingStatus((prev) => ({ ...prev, [trackerId]: 'error' }));
    }
  };

  return (
    <div
      className="fixed inset-0 z-[650] flex items-center justify-center p-3.5 sm:p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      {/* Modal Dialog */}
      <div
        className="flex max-h-[85vh] w-full max-w-lg flex-col overflow-hidden rounded-3xl border border-white/80 bg-white/95 shadow-2xl backdrop-blur-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-5 sm:px-6 py-4 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-white shadow-xs">
              <MapIcon className="h-4 w-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 tracking-tight">
                Settings
              </h3>
              <p className="text-[11px] text-slate-500 font-medium">
                Yimly Map & Home Assistant Preferences
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 active:scale-95 cursor-pointer"
            title="Close"
          >
            <X className="h-4.5 w-4.5" />
          </button>
        </div>

        {/* Scrollable Body: Collapsible Rounded Cards */}
        <div
          className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3 overscroll-contain"
          style={{ touchAction: 'pan-y' }}
        >
          {/* 1. PROFILE SECTION CARD */}
          <div className="overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-2xs">
            <button
              onClick={() => toggleSection('profile')}
              className="flex w-full items-center justify-between p-4 text-left font-semibold text-slate-900 hover:bg-slate-50/70 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <User className="h-4 w-4 text-slate-700" />
                <span className="text-xs uppercase tracking-wider font-bold">Profile</span>
              </div>
              {openSections.profile ? (
                <ChevronUp className="h-4 w-4 text-slate-400" />
              ) : (
                <ChevronDown className="h-4 w-4 text-slate-400" />
              )}
            </button>

            {openSections.profile && (
              <div className="border-t border-slate-100 p-4 pt-3 space-y-3 bg-slate-50/40 text-xs animate-in fade-in duration-150">
                <div className="flex items-center gap-3.5 rounded-xl bg-white p-3 border border-slate-200/60 shadow-2xs">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white text-base font-bold shadow-xs shrink-0">
                    {currentUser?.name ? currentUser.name.charAt(0).toUpperCase() : 'U'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-slate-900 truncate">
                      {currentUser?.name || 'Home Assistant User'}
                    </h4>
                    <p className="text-[11px] text-slate-400 font-mono truncate">
                      ID: {currentUser?.id || 'Connected'}
                    </p>
                    <div className="mt-0.5 flex items-center gap-1.5 text-[11px] text-emerald-600 font-semibold">
                      <ShieldCheck className="h-3.5 w-3.5 shrink-0" />
                      <span>Authenticated via Home Assistant Core</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200/60 bg-white p-3 space-y-1">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                    Linked Home Assistant Person
                  </div>
                  <div className="text-xs font-semibold text-slate-800">
                    {currentPerson ? (
                      <div className="flex items-center justify-between">
                        <span>{currentPerson.attributes.friendly_name || currentPerson.entity_id}</span>
                        <span className="font-mono text-[10px] text-slate-400">{currentPerson.entity_id}</span>
                      </div>
                    ) : (
                      <span className="text-slate-500 font-normal">
                        No Person entity linked to this HA user
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-1">
                  <button
                    onClick={onLogout}
                    className="flex items-center gap-2 rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-xs font-semibold text-rose-700 hover:bg-rose-100 transition-colors cursor-pointer"
                  >
                    <LogOut className="h-3.5 w-3.5" />
                    <span>Disconnect HA Session</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* 2. FAMILY CIRCLE SECTION CARD */}
          <div className="overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-2xs">
            <button
              onClick={() => toggleSection('family')}
              className="flex w-full items-center justify-between p-4 text-left font-semibold text-slate-900 hover:bg-slate-50/70 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <Users className="h-4 w-4 text-slate-700" />
                <span className="text-xs uppercase tracking-wider font-bold">Family Circle</span>
              </div>
              {openSections.family ? (
                <ChevronUp className="h-4 w-4 text-slate-400" />
              ) : (
                <ChevronDown className="h-4 w-4 text-slate-400" />
              )}
            </button>

            {openSections.family && (
              <div className="border-t border-slate-100 p-4 pt-3 space-y-3 bg-slate-50/40 text-xs animate-in fade-in duration-150">
                <p className="text-xs text-slate-600 leading-relaxed">
                  Family Circles group your Home Assistant Persons and device trackers with custom pastel colours, display preferences, and invite codes.
                </p>
                <button
                  onClick={() => {
                    onClose();
                    onOpenCircleModal();
                  }}
                  className="flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-semibold text-white shadow-xs hover:bg-slate-800 transition-all cursor-pointer"
                >
                  <Users className="h-3.5 w-3.5" />
                  <span>Open Family Circle Management</span>
                </button>
              </div>
            )}
          </div>

          {/* 3. MAPS SECTION CARD (Positron, OSM, Bright, Liberty, Dark, Fiord - NO Pin Type) */}
          <div className="overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-2xs">
            <button
              onClick={() => toggleSection('maps')}
              className="flex w-full items-center justify-between p-4 text-left font-semibold text-slate-900 hover:bg-slate-50/70 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <MapIcon className="h-4 w-4 text-slate-700" />
                <span className="text-xs uppercase tracking-wider font-bold">Maps</span>
              </div>
              {openSections.maps ? (
                <ChevronUp className="h-4 w-4 text-slate-400" />
              ) : (
                <ChevronDown className="h-4 w-4 text-slate-400" />
              )}
            </button>

            {openSections.maps && (
              <div className="border-t border-slate-100 p-4 pt-3 space-y-4 bg-slate-50/40 text-xs animate-in fade-in duration-150">
                <div>
                  <div className="text-[11px] font-bold text-slate-700 mb-2">
                    Map Tile Style
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {(Object.keys(MAP_STYLES) as MapStyleId[]).map((key) => {
                      const style = MAP_STYLES[key];
                      const isSelected = mapStyle === key;
                      return (
                        <button
                          key={key}
                          onClick={() => onChangeMapStyle(key)}
                          className={`flex items-center justify-between rounded-xl border p-2.5 text-left transition-all cursor-pointer ${
                            isSelected
                              ? 'border-slate-900 bg-slate-900 text-white shadow-xs'
                              : 'border-slate-200 bg-white text-slate-800 hover:border-slate-300'
                          }`}
                        >
                          <span className="font-semibold text-xs">{style.name}</span>
                          {isSelected && <Check className="h-3.5 w-3.5" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200/60 bg-white p-3 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-slate-800">Show Accuracy Circles</div>
                      <div className="text-[10px] text-slate-500">
                        Display translucent precision ring around active member
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.showAccuracyCircles}
                      onChange={(e) =>
                        onUpdatePreferences({ showAccuracyCircles: e.target.checked })
                      }
                      className="h-4 w-4 rounded accent-slate-900 cursor-pointer"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                    <div>
                      <div className="font-semibold text-slate-800">Show Home Assistant Zones</div>
                      <div className="text-[10px] text-slate-500">
                        Render Home and defined zones on map
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.showZones}
                      onChange={(e) => onUpdatePreferences({ showZones: e.target.checked })}
                      className="h-4 w-4 rounded accent-slate-900 cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 4. DEVICES SECTION CARD */}
          <div className="overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-2xs">
            <button
              onClick={() => toggleSection('devices')}
              className="flex w-full items-center justify-between p-4 text-left font-semibold text-slate-900 hover:bg-slate-50/70 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <Smartphone className="h-4 w-4 text-slate-700" />
                <span className="text-xs uppercase tracking-wider font-bold">
                  Devices ({deviceTrackers.length})
                </span>
              </div>
              {openSections.devices ? (
                <ChevronUp className="h-4 w-4 text-slate-400" />
              ) : (
                <ChevronDown className="h-4 w-4 text-slate-400" />
              )}
            </button>

            {openSections.devices && (
              <div className="border-t border-slate-100 p-4 pt-3 space-y-2 bg-slate-50/40 text-xs animate-in fade-in duration-150">
                <div className="space-y-1.5 max-h-56 overflow-y-auto pr-1">
                  {deviceTrackers.length === 0 ? (
                    <p className="text-slate-500 text-xs py-2">
                      No device trackers discovered from Home Assistant yet.
                    </p>
                  ) : (
                    deviceTrackers.map((tracker) => {
                      const status = pingStatus[tracker.entity_id];
                      const isOwnTracker =
                        tracker.entity_id === currentPerson?.attributes.source;

                      return (
                        <div
                          key={tracker.entity_id}
                          className="flex items-center justify-between rounded-xl border border-slate-200/60 bg-white p-2.5 shadow-2xs"
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-700 shrink-0">
                              <Smartphone className="h-4 w-4" />
                            </div>
                            <div className="min-w-0">
                              <div className="flex items-center gap-1.5">
                                <span className="text-xs font-semibold text-slate-800 truncate">
                                  {tracker.attributes.friendly_name || tracker.entity_id}
                                </span>
                                {isOwnTracker && (
                                  <span className="rounded-md bg-emerald-50 px-1 py-0.2 text-[8px] font-bold text-emerald-700 border border-emerald-200">
                                    You
                                  </span>
                                )}
                              </div>
                              <div className="text-[10px] text-slate-400 font-mono truncate">
                                {tracker.entity_id}
                              </div>
                            </div>
                          </div>

                          {isOwnTracker && (
                            <button
                              onClick={() => handlePing(tracker.entity_id)}
                              disabled={status === 'pinging'}
                              className="rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors shrink-0 disabled:opacity-50 cursor-pointer"
                            >
                              {status === 'pinging'
                                ? 'Pinging...'
                                : status === 'success'
                                ? 'Pinged!'
                                : 'Ping'}
                            </button>
                          )}
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            )}
          </div>

          {/* 5. NOTIFICATIONS SECTION CARD */}
          <div className="overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-2xs">
            <button
              onClick={() => toggleSection('notifications')}
              className="flex w-full items-center justify-between p-4 text-left font-semibold text-slate-900 hover:bg-slate-50/70 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <Bell className="h-4 w-4 text-slate-700" />
                <span className="text-xs uppercase tracking-wider font-bold">Notifications</span>
              </div>
              {openSections.notifications ? (
                <ChevronUp className="h-4 w-4 text-slate-400" />
              ) : (
                <ChevronDown className="h-4 w-4 text-slate-400" />
              )}
            </button>

            {openSections.notifications && (
              <div className="border-t border-slate-100 p-4 pt-3 space-y-3 bg-slate-50/40 text-xs animate-in fade-in duration-150">
                <div className="rounded-xl border border-slate-200/60 bg-white p-3 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-slate-800">Zone Departure Alerts</div>
                      <div className="text-[10px] text-slate-500">
                        Notify when family members leave home or registered zones
                      </div>
                    </div>
                    <input type="checkbox" defaultChecked className="h-4 w-4 rounded accent-slate-900 cursor-pointer" />
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                    <div>
                      <div className="font-semibold text-slate-800">Low Battery Warnings</div>
                      <div className="text-[10px] text-slate-500">
                        Notify when a family member device battery drops below 15%
                      </div>
                    </div>
                    <input type="checkbox" defaultChecked className="h-4 w-4 rounded accent-slate-900 cursor-pointer" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 6. HOME ASSISTANT INTEGRATION CARD */}
          <div className="overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-2xs">
            <button
              onClick={() => toggleSection('ha')}
              className="flex w-full items-center justify-between p-4 text-left font-semibold text-slate-900 hover:bg-slate-50/70 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <Home className="h-4 w-4 text-slate-700" />
                <span className="text-xs uppercase tracking-wider font-bold">HA Custom Panel Integration</span>
              </div>
              {openSections.ha ? (
                <ChevronUp className="h-4 w-4 text-slate-400" />
              ) : (
                <ChevronDown className="h-4 w-4 text-slate-400" />
              )}
            </button>

            {openSections.ha && (
              <div className="border-t border-slate-100 p-4 pt-3 space-y-3 bg-slate-50/40 text-xs animate-in fade-in duration-150">
                <div className="rounded-xl bg-white p-3 border border-slate-200/60 space-y-1">
                  <div className="flex items-center justify-between text-slate-700">
                    <span className="font-semibold">HA Instance</span>
                    <span className="font-mono text-[11px] text-slate-900">{haUrl}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-emerald-600 font-medium">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span>Real-time WebSocket & authenticated session</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-[10px] uppercase tracking-wider text-slate-500">
                      configuration.yaml snippet
                    </span>
                    <button
                      onClick={handleCopyYaml}
                      className="flex items-center gap-1 text-[11px] font-semibold text-indigo-600 hover:text-indigo-800 cursor-pointer"
                    >
                      {copiedYaml ? <Check className="h-3 w-3 text-emerald-600" /> : <Copy className="h-3 w-3" />}
                      <span>{copiedYaml ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                  <pre className="rounded-xl bg-slate-900 p-2.5 text-[10px] font-mono text-slate-200 overflow-x-auto">
                    {getHaPanelConfigYaml(appUrl)}
                  </pre>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
