import React from 'react';
import { Settings, Users, Navigation, AlertCircle, RefreshCw } from 'lucide-react';
import { FamilyCircle, ConnectionStatus } from '../../types/ha.ts';

interface TopBarProps {
  circle: FamilyCircle | null;
  onOpenCircleModal: () => void;
  onOpenSettingsModal: () => void;
  followPaused: boolean;
  selectedMemberName?: string;
  onResumeFollow: () => void;
  connectionStatus: ConnectionStatus;
  onReconnect: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  circle,
  onOpenCircleModal,
  onOpenSettingsModal,
  followPaused,
  selectedMemberName,
  onResumeFollow,
  connectionStatus,
  onReconnect,
}) => {
  return (
    <header className="pointer-events-none absolute left-0 right-0 top-0 z-[500] flex items-center justify-between p-3.5 sm:p-4">
      {/* Top Left: Family Circle Pill */}
      <button
        onClick={onOpenCircleModal}
        className="pointer-events-auto flex items-center gap-2 rounded-2xl border border-white/70 bg-white/90 px-3 py-2 sm:px-3.5 sm:py-2.5 shadow-md backdrop-blur-md transition-all active:scale-95 hover:bg-white cursor-pointer"
        title="Manage Family Circle"
      >
        <div className="flex h-6 w-6 items-center justify-center rounded-xl bg-slate-900 text-white shadow-xs">
          <Users className="h-3.5 w-3.5" />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-xs font-bold text-slate-900 max-w-[100px] sm:max-w-[150px] truncate">
            {circle?.name || 'Family Circle'}
          </span>
          {circle?.members?.length ? (
            <span className="text-[10px] text-slate-500 font-semibold">
              {circle.members.length} member{circle.members.length > 1 ? 's' : ''}
            </span>
          ) : (
            <span className="text-[10px] text-indigo-600 font-semibold">
              Setup Circle
            </span>
          )}
        </div>
      </button>

      {/* Top Center: Subtle Follow Paused or Reconnect pill (Only visible when needed) */}
      <div className="flex items-center gap-2">
        {followPaused && selectedMemberName && (
          <button
            onClick={onResumeFollow}
            className="pointer-events-auto flex items-center gap-1.5 rounded-full border border-indigo-200 bg-white/95 px-3 py-1.5 text-xs font-semibold text-indigo-700 shadow-md backdrop-blur-md transition-all hover:bg-indigo-50 active:scale-95 cursor-pointer animate-in fade-in duration-150"
            title="Resume following real-time location"
          >
            <Navigation className="h-3.5 w-3.5 fill-indigo-600 text-indigo-600" />
            <span className="max-w-[140px] truncate">Resume {selectedMemberName}</span>
          </button>
        )}

        {connectionStatus !== 'connected' && !followPaused && (
          <button
            onClick={onReconnect}
            className={`pointer-events-auto flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold shadow-sm backdrop-blur-md transition-all active:scale-95 cursor-pointer ${
              connectionStatus === 'connecting'
                ? 'border-amber-200 bg-amber-50/95 text-amber-800'
                : 'border-slate-200 bg-white/90 text-slate-600'
            }`}
          >
            {connectionStatus === 'connecting' ? (
              <RefreshCw className="h-3 w-3 animate-spin text-amber-700" />
            ) : (
              <AlertCircle className="h-3 w-3 text-slate-500" />
            )}
            <span>
              {connectionStatus === 'connecting'
                ? 'Connecting'
                : connectionStatus === 'auth_required'
                ? 'Connect HA'
                : 'Disconnected'}
            </span>
          </button>
        )}
      </div>

      {/* Top Right: Settings Gear */}
      <button
        onClick={onOpenSettingsModal}
        className="pointer-events-auto flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-2xl border border-white/70 bg-white/90 text-slate-700 shadow-md backdrop-blur-md transition-all active:scale-95 hover:bg-white cursor-pointer"
        title="Settings"
      >
        <Settings className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
      </button>
    </header>
  );
};
