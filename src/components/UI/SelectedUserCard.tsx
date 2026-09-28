import React, { useState } from 'react';
import {
  Navigation,
  Battery,
  BatteryCharging,
  LocateFixed,
  BellRing,
  ExternalLink,
  X,
  Compass,
  Gauge,
  Play,
} from 'lucide-react';
import { CircleMember, HassEntity, PersonEntity, DeviceTrackerEntity } from '../../types/ha.ts';

interface SelectedUserCardProps {
  selectedId: string | null;
  members: CircleMember[];
  entities: Record<string, HassEntity>;
  isCurrentUser: boolean;
  isFollowing: boolean;
  followPaused: boolean;
  onToggleFollow: () => void;
  onRecenter: () => void;
  onClose: () => void;
  onPingDevice: (entityId: string) => Promise<void>;
}

export const SelectedUserCard: React.FC<SelectedUserCardProps> = ({
  selectedId,
  members,
  entities,
  isCurrentUser,
  isFollowing,
  followPaused,
  onToggleFollow,
  onRecenter,
  onClose,
  onPingDevice,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [pinging, setPinging] = useState(false);
  const [pingSuccess, setPingSuccess] = useState(false);

  if (!selectedId) return null;

  const member = members.find((m) => m.id === selectedId);
  const isDirectDevice = selectedId.startsWith('device_tracker.');

  let displayName = '';
  let memberColor = '#7BC9FF';
  let personEntity: PersonEntity | undefined;
  let trackerEntity: DeviceTrackerEntity | undefined;
  let stateDisplay = 'Unknown';
  let lastUpdated = '';

  if (member) {
    displayName = member.display_name;
    memberColor = member.color;
    personEntity = entities[member.ha_person_id] as PersonEntity | undefined;
    stateDisplay = personEntity?.state || 'Unknown';
    lastUpdated = personEntity?.last_updated || '';

    const sourceId = personEntity?.attributes?.source;
    if (sourceId && entities[sourceId]) {
      trackerEntity = entities[sourceId] as DeviceTrackerEntity;
    }
  } else if (isDirectDevice) {
    trackerEntity = entities[selectedId] as DeviceTrackerEntity | undefined;
    displayName = trackerEntity?.attributes?.friendly_name || selectedId.replace('device_tracker.', '');
    stateDisplay = trackerEntity?.state || 'Unknown';
    lastUpdated = trackerEntity?.last_updated || '';
  }

  // Exact relative wording: "Just now", "2 min ago", "15 min ago", "1 hr ago"
  const formatRelativeTime = (timestamp?: string): string => {
    if (!timestamp) return 'Just now';
    const diffMs = Date.now() - new Date(timestamp).getTime();
    const diffSec = Math.floor(diffMs / 1000);
    if (diffSec < 45) return 'Just now';
    const diffMin = Math.floor(diffSec / 60);
    if (diffMin === 1) return '1 min ago';
    if (diffMin < 60) return `${diffMin} min ago`;
    const diffHours = Math.floor(diffMin / 60);
    if (diffHours === 1) return '1 hr ago';
    if (diffHours < 24) return `${diffHours} hr ago`;
    const diffDays = Math.floor(diffHours / 24);
    if (diffDays === 1) return '1 day ago';
    return `${diffDays} days ago`;
  };

  const latitude = personEntity?.attributes?.latitude ?? trackerEntity?.attributes?.latitude;
  const longitude = personEntity?.attributes?.longitude ?? trackerEntity?.attributes?.longitude;
  const gpsAccuracy = personEntity?.attributes?.gps_accuracy ?? trackerEntity?.attributes?.gps_accuracy;
  const batteryLevel = trackerEntity?.attributes?.battery_level;
  const batteryState = trackerEntity?.attributes?.battery_state;
  const altitude = trackerEntity?.attributes?.altitude;
  const speed = trackerEntity?.attributes?.speed;

  const handlePing = async () => {
    const targetEntityId = trackerEntity?.entity_id || personEntity?.attributes?.source;
    if (!targetEntityId) return;

    setPinging(true);
    setPingSuccess(false);
    try {
      await onPingDevice(targetEntityId);
      setPingSuccess(true);
      setTimeout(() => setPingSuccess(false), 3000);
    } catch (e) {
      console.error('Failed to ping device', e);
    } finally {
      setPinging(false);
    }
  };

  const openDirections = () => {
    if (latitude && longitude) {
      window.open(`https://maps.google.com/?q=${latitude},${longitude}`, '_blank');
    }
  };

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[500] flex justify-center">
      {/* Bottom Sheet Container: rounded upper corners, flows seamlessly into viewport bottom */}
      <div
        className="pointer-events-auto w-full max-w-lg rounded-t-3xl rounded-b-none border-t border-x border-b-0 border-white/80 bg-white/95 shadow-2xl backdrop-blur-2xl transition-all duration-300 flex flex-col pb-safe"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Grab handle bar */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex w-full items-center justify-center pt-3 pb-1.5 active:opacity-70 cursor-pointer"
          title={isExpanded ? 'Collapse' : 'Expand'}
        >
          <div className="h-1.5 w-11 rounded-full bg-slate-300" />
        </button>

        {/* Collapsed Header View (Always visible) */}
        <div className="px-5 pb-3.5 pt-0.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Member Color Indicator Line (no avatar or icon inside card) */}
              <div
                style={{ backgroundColor: memberColor }}
                className="h-9 w-1.5 rounded-full shrink-0 shadow-xs"
              />

              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <h2 className="text-base font-bold text-slate-900 tracking-tight">
                    {displayName}
                  </h2>
                  {isCurrentUser && (
                    <span className="rounded-full bg-slate-100 px-2 py-0.2 text-[10px] font-semibold text-slate-600">
                      You
                    </span>
                  )}
                </div>

                {/* State & Relative time (e.g. "Home • 2 min ago") */}
                <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-0.5">
                  <span className="capitalize font-semibold text-slate-700">
                    {stateDisplay === 'not_home' ? 'Away' : stateDisplay}
                  </span>
                  <span>•</span>
                  <span>{formatRelativeTime(lastUpdated)}</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-1.5">
              {/* Live Follow Toggle / Resume Button */}
              <button
                onClick={onToggleFollow}
                className={`flex h-9 items-center gap-1.5 rounded-full px-3 text-xs font-semibold transition-all active:scale-95 cursor-pointer ${
                  isFollowing && !followPaused
                    ? 'bg-slate-900 text-white shadow-xs'
                    : followPaused
                    ? 'border border-indigo-300 bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
                    : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                }`}
                title={
                  followPaused
                    ? 'Resume Follow'
                    : isFollowing
                    ? 'Following live'
                    : 'Follow on map'
                }
              >
                {followPaused ? (
                  <Play className="h-3 w-3 fill-indigo-600" />
                ) : (
                  <Navigation
                    className={`h-3.5 w-3.5 ${isFollowing && !followPaused ? 'fill-white' : ''}`}
                  />
                )}
                <span>
                  {followPaused
                    ? 'Resume Follow'
                    : isFollowing
                    ? 'Following'
                    : 'Follow'}
                </span>
              </button>

              {/* Recenter Button */}
              <button
                onClick={onRecenter}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-2xs transition-colors hover:bg-slate-50 active:scale-95 cursor-pointer"
                title="Center on map"
              >
                <LocateFixed className="h-4 w-4" />
              </button>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 active:scale-95 cursor-pointer"
                title="Deselect"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Expanded View */}
        {isExpanded && (
          <div
            className="border-t border-slate-100 bg-slate-50/70 px-5 pb-6 pt-4 space-y-4 overflow-y-auto max-h-[62vh] overscroll-contain animate-in fade-in slide-in-from-bottom-2 duration-200"
            style={{ touchAction: 'pan-y' }}
          >
            {/* Metric Row */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              {/* Battery */}
              <div className="flex items-center gap-2.5 rounded-2xl border border-slate-200/60 bg-white p-3 shadow-2xs">
                {batteryState === 'charging' ? (
                  <BatteryCharging className="h-5 w-5 text-emerald-600 shrink-0" />
                ) : (
                  <Battery className="h-5 w-5 text-slate-600 shrink-0" />
                )}
                <div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    Battery
                  </div>
                  <div className="text-sm font-semibold text-slate-800">
                    {batteryLevel !== undefined ? `${batteryLevel}%` : 'Unavailable'}
                    {batteryState === 'charging' && (
                      <span className="ml-1 text-[10px] text-emerald-600 font-normal">
                        Charging
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* GPS Accuracy */}
              <div className="flex items-center gap-2.5 rounded-2xl border border-slate-200/60 bg-white p-3 shadow-2xs">
                <Compass className="h-5 w-5 text-slate-600 shrink-0" />
                <div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    Accuracy
                  </div>
                  <div className="text-sm font-semibold text-slate-800">
                    {gpsAccuracy !== undefined ? `±${Math.round(gpsAccuracy)} m` : 'Unknown'}
                  </div>
                </div>
              </div>

              {/* Speed if available */}
              {speed !== undefined && (
                <div className="flex items-center gap-2.5 rounded-2xl border border-slate-200/60 bg-white p-3 shadow-2xs">
                  <Gauge className="h-5 w-5 text-slate-600 shrink-0" />
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                      Speed
                    </div>
                    <div className="text-sm font-semibold text-slate-800">
                      {Math.round(speed)} km/h
                    </div>
                  </div>
                </div>
              )}

              {/* Altitude if available */}
              {altitude !== undefined && (
                <div className="flex items-center gap-2.5 rounded-2xl border border-slate-200/60 bg-white p-3 shadow-2xs">
                  <div className="flex h-5 w-5 items-center justify-center font-bold text-slate-600 text-xs shrink-0">
                    ▲
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                      Altitude
                    </div>
                    <div className="text-sm font-semibold text-slate-800">
                      {Math.round(altitude)} m
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Coordinates & HA Entity Info */}
            <div className="rounded-2xl border border-slate-200/60 bg-white p-3 space-y-1.5 text-xs">
              <div className="flex items-center justify-between text-slate-600">
                <span className="text-[11px] text-slate-400 font-medium">Home Assistant Entity</span>
                <span className="font-mono text-[11px] text-slate-700">
                  {member?.ha_person_id || selectedId}
                </span>
              </div>
              {trackerEntity && (
                <div className="flex items-center justify-between text-slate-600">
                  <span className="text-[11px] text-slate-400 font-medium">Source Tracker</span>
                  <span className="font-mono text-[11px] text-slate-700">
                    {trackerEntity.entity_id}
                  </span>
                </div>
              )}
              {latitude !== undefined && longitude !== undefined && (
                <div className="flex items-center justify-between text-slate-600 pt-1 border-t border-slate-100">
                  <span className="text-[11px] text-slate-400 font-medium">Coordinates</span>
                  <span className="font-mono text-[11px] text-slate-700">
                    {latitude.toFixed(5)}, {longitude.toFixed(5)}
                  </span>
                </div>
              )}
            </div>

            {/* Primary Action Buttons */}
            <div className="flex items-center gap-2 pt-1">
              {/* Ping My Device (Allowed for current user's own linked devices) */}
              {isCurrentUser && (
                <button
                  onClick={handlePing}
                  disabled={pinging}
                  className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-slate-900 py-3 text-xs font-semibold text-white shadow-md transition-all hover:bg-slate-800 active:scale-95 disabled:opacity-60 cursor-pointer"
                >
                  <BellRing className={`h-4 w-4 ${pinging ? 'animate-bounce' : ''}`} />
                  <span>
                    {pinging ? 'Pinging...' : pingSuccess ? 'Ping Sent!' : 'Ping My Device'}
                  </span>
                </button>
              )}

              {/* Directions Button */}
              {latitude !== undefined && longitude !== undefined && (
                <button
                  onClick={openDirections}
                  className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white py-3 text-xs font-semibold text-slate-800 shadow-2xs transition-all hover:bg-slate-50 active:scale-95 cursor-pointer"
                >
                  <ExternalLink className="h-4 w-4 text-slate-500" />
                  <span>Directions</span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
