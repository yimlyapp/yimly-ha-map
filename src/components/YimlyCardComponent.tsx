import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  HomeAssistant,
  YimlyCardConfig,
  CircleMember,
  FamilyCircle,
  HassEntity,
  HassUser,
  PersonEntity,
  DeviceTrackerEntity,
  ZoneEntity,
  MapStyleId,
  YimlyPreferences,
} from '../types/ha.ts';
import { YimlyStorage } from '../services/yimly-storage.ts';
import { PASTEL_RAINBOW_COLORS, DEFAULT_MEMBER_COLOR } from '../utils/colors.ts';
import { FamilyMap } from './Map/FamilyMap.tsx';
import { TopBar } from './UI/TopBar.tsx';
import { SelectedUserCard } from './UI/SelectedUserCard.tsx';
import { CircleModal } from './UI/CircleModal.tsx';
import { SettingsModal } from './UI/SettingsModal.tsx';

export interface YimlyCardProps {
  hass?: HomeAssistant;
  config: YimlyCardConfig;
}

export const YimlyCardComponent: React.FC<YimlyCardProps> = ({ hass, config }) => {
  // Sizing
  const cardHeight = config.height
    ? typeof config.height === 'number'
      ? `${config.height}px`
      : config.height
    : '500px';

  // HA State directly from Home Assistant hass object
  const entities = useMemo<Record<string, HassEntity>>(() => {
    return hass?.states || {};
  }, [hass?.states]);

  const currentUser = useMemo<HassUser | null>(() => {
    return hass?.user || null;
  }, [hass?.user]);

  // Yimly Circle & Preferences (stored locally in browser for visual personalization)
  const [circle, setCircle] = useState<FamilyCircle | null>(() => YimlyStorage.getCircle());
  const [preferences, setPreferences] = useState<YimlyPreferences>(() => {
    const saved = YimlyStorage.getPreferences();
    if (config.map_style) {
      return { ...saved, mapStyle: config.map_style };
    }
    return saved;
  });

  // Selection & Live Follow State
  const [selectedMemberId, setSelectedMemberId] = useState<string | null>(null);
  const [isFollowing, setIsFollowing] = useState(true);
  const [followPaused, setFollowPaused] = useState(false);

  // Modals
  const [circleModalOpen, setCircleModalOpen] = useState(false);
  const [settingsModalOpen, setSettingsModalOpen] = useState(false);

  // Dynamic discovery of Home Assistant Persons
  const haPersons: PersonEntity[] = useMemo(() => {
    return Object.values(entities).filter(
      (e): e is PersonEntity => e.entity_id.startsWith('person.')
    );
  }, [entities]);

  // Dynamic discovery of Home Assistant Device Trackers
  const haDeviceTrackers: DeviceTrackerEntity[] = useMemo(() => {
    return Object.values(entities).filter(
      (e): e is DeviceTrackerEntity => e.entity_id.startsWith('device_tracker.')
    );
  }, [entities]);

  // Identify current person matching authenticated HA user (NEVER positional persons[0])
  const currentPerson: PersonEntity | undefined = useMemo(() => {
    if (!currentUser || !currentUser.id) return undefined;

    // 1. Official HA match: person with user_id matching current user
    const byUserId = haPersons.find((p) => p.attributes?.user_id === currentUser.id);
    if (byUserId) return byUserId;

    // 2. Name or entity suffix match
    const currentName = currentUser.name?.toLowerCase().trim();
    if (currentName) {
      const byName = haPersons.find((p) => {
        const pName = p.attributes?.friendly_name?.toLowerCase().trim();
        const pId = p.entity_id.replace('person.', '').toLowerCase().trim();
        return pName === currentName || pId === currentName;
      });
      if (byName) return byName;
    }

    return undefined;
  }, [currentUser, haPersons]);

  // Synchronize Circle members with real HA persons dynamically
  useEffect(() => {
    if (haPersons.length > 0) {
      const myPersonId = currentPerson?.entity_id;

      setCircle((prevCircle) => {
        const existingMembers = prevCircle?.members || [];
        const memberMap = new Map(existingMembers.map((m) => [m.id, m]));

        const updatedMembers: CircleMember[] = haPersons.map((p, idx) => {
          const existing = memberMap.get(p.entity_id);
          const isSelf = myPersonId ? p.entity_id === myPersonId : false;
          const defaultColor = PASTEL_RAINBOW_COLORS[idx % PASTEL_RAINBOW_COLORS.length].hex;
          return {
            id: p.entity_id,
            ha_person_id: p.entity_id,
            display_name: p.attributes.friendly_name || p.entity_id.replace('person.', ''),
            color: existing?.color || defaultColor,
            is_self: isSelf,
            added_at: existing?.added_at || new Date().toISOString(),
          };
        });

        const newCircle: FamilyCircle = {
          id: prevCircle?.id || 'ha_family_circle',
          name: prevCircle?.name || 'Family Circle',
          code: prevCircle?.code || 'FAMILY',
          created_at: prevCircle?.created_at || new Date().toISOString(),
          members: updatedMembers,
        };

        YimlyStorage.saveCircle(newCircle);
        return newCircle;
      });
    }
  }, [haPersons, currentPerson]);

  // Selected member object
  const selectedMember = useMemo(() => {
    return circle?.members.find((m) => m.id === selectedMemberId);
  }, [circle?.members, selectedMemberId]);

  // Handlers
  const handleSelectMember = useCallback((memberId: string | null) => {
    setSelectedMemberId(memberId);
    if (memberId) {
      setIsFollowing(true);
      setFollowPaused(false);
    }
  }, []);

  const handleSelectDevice = useCallback((trackerId: string) => {
    setSelectedMemberId(trackerId);
    setIsFollowing(true);
    setFollowPaused(false);
  }, []);

  const handleUserManualPan = useCallback(() => {
    setFollowPaused(true);
  }, []);

  const handleResumeFollow = useCallback(() => {
    setFollowPaused(false);
    setIsFollowing(true);
  }, []);

  const handleUpdatePreferences = useCallback((newPrefs: Partial<YimlyPreferences>) => {
    const updated = YimlyStorage.savePreferences(newPrefs);
    setPreferences(updated);
  }, []);

  const handleChangeMapStyle = useCallback((style: MapStyleId) => {
    const updated = YimlyStorage.savePreferences({ mapStyle: style });
    setPreferences(updated);
  }, []);

  // Real HA Service Call (Ping Device / Update entity)
  const handlePingDevice = useCallback(
    async (entityId: string) => {
      if (!hass) return;
      try {
        await hass.callService('homeassistant', 'update_entity', {
          entity_id: entityId,
        });
      } catch (err) {
        console.warn('Failed to call HA service', err);
      }
    },
    [hass]
  );

  // Circle Modal handlers
  const handleUpdateMemberColor = useCallback((memberId: string, color: string) => {
    setCircle((prev) => {
      if (!prev) return null;
      const updated = {
        ...prev,
        members: prev.members.map((m) => (m.id === memberId ? { ...m, color } : m)),
      };
      YimlyStorage.saveCircle(updated);
      return updated;
    });
  }, []);

  const handleAddMember = useCallback((personId: string, displayName: string, color: string) => {
    setCircle((prev) => {
      if (!prev) return null;
      const newMember: CircleMember = {
        id: personId,
        ha_person_id: personId,
        display_name: displayName,
        color,
        added_at: new Date().toISOString(),
      };
      const updated = {
        ...prev,
        members: [...prev.members.filter((m) => m.id !== personId), newMember],
      };
      YimlyStorage.saveCircle(updated);
      return updated;
    });
  }, []);

  const handleRemoveMember = useCallback((memberId: string) => {
    setCircle((prev) => {
      if (!prev) return null;
      const updated = {
        ...prev,
        members: prev.members.filter((m) => m.id !== memberId),
      };
      YimlyStorage.saveCircle(updated);
      return updated;
    });
  }, []);

  const handleCreateCircle = useCallback((name: string, memberPersonId: string, color: string) => {
    const newCircle: FamilyCircle = {
      id: `circle_${Date.now()}`,
      name,
      code: 'FAMILY',
      created_at: new Date().toISOString(),
      members: [
        {
          id: memberPersonId,
          ha_person_id: memberPersonId,
          display_name: name,
          color,
          is_self: true,
          added_at: new Date().toISOString(),
        },
      ],
    };
    setCircle(newCircle);
    YimlyStorage.saveCircle(newCircle);
  }, []);

  // If hass is not yet supplied by Home Assistant
  if (!hass) {
    return (
      <div
        className="w-full flex items-center justify-center rounded-3xl bg-slate-100 text-slate-500 font-sans"
        style={{ height: cardHeight, minHeight: '350px' }}
      >
        <div className="flex flex-col items-center gap-2 text-center p-6">
          <div className="h-6 w-6 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin" />
          <span className="text-xs font-semibold text-slate-700">Connecting to Home Assistant...</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className="yimly-card-container relative w-full overflow-hidden rounded-3xl bg-slate-50 shadow-md font-sans text-slate-900 border border-slate-200/50"
      style={{
        height: cardHeight,
        minHeight: '350px',
        maxHeight: '100%',
      }}
    >
      {/* TopBar: Family Circle pill (top-left) & Settings Gear (top-right) */}
      <TopBar
        circle={circle}
        onOpenCircleModal={() => setCircleModalOpen(true)}
        onOpenSettingsModal={() => setSettingsModalOpen(true)}
        followPaused={followPaused}
        selectedMemberName={selectedMember?.display_name}
        onResumeFollow={handleResumeFollow}
        connectionStatus="connected"
        onReconnect={() => {}}
      />

      {/* Full-width Map Layer */}
      <FamilyMap
        members={circle?.members || []}
        entities={entities}
        selectedMemberId={selectedMemberId}
        onSelectMember={handleSelectMember}
        onSelectDevice={handleSelectDevice}
        mapStyle={preferences.mapStyle}
        onChangeMapStyle={handleChangeMapStyle}
        showAccuracyCircles={preferences.showAccuracyCircles}
        showZones={preferences.showZones}
        showPrivateDevices={preferences.showDeviceMarkers}
        isFollowing={isFollowing}
        followPaused={followPaused}
        onUserManualPan={handleUserManualPan}
        haUrl=""
      />

      {/* Selected Member / Device Bottom Card */}
      <SelectedUserCard
        selectedId={selectedMemberId}
        members={circle?.members || []}
        entities={entities}
        isCurrentUser={selectedMember ? Boolean(selectedMember.is_self) : false}
        isFollowing={isFollowing}
        followPaused={followPaused}
        onToggleFollow={() => setIsFollowing((prev) => !prev)}
        onRecenter={handleResumeFollow}
        onClose={() => setSelectedMemberId(null)}
        onPingDevice={handlePingDevice}
      />

      {/* Circle Modal */}
      <CircleModal
        isOpen={circleModalOpen}
        onClose={() => setCircleModalOpen(false)}
        circle={circle}
        haPersons={haPersons}
        onCreateCircle={handleCreateCircle}
        onJoinCircle={() => {}}
        onLeaveCircle={() => {}}
        onAddMember={handleAddMember}
        onRemoveMember={handleRemoveMember}
        onUpdateMemberColor={handleUpdateMemberColor}
        currentPersonId={currentPerson?.entity_id}
      />

      {/* Settings Modal */}
      <SettingsModal
        isOpen={settingsModalOpen}
        onClose={() => setSettingsModalOpen(false)}
        currentUser={currentUser}
        currentPerson={currentPerson}
        deviceTrackers={haDeviceTrackers}
        mapStyle={preferences.mapStyle}
        onChangeMapStyle={handleChangeMapStyle}
        preferences={preferences}
        onUpdatePreferences={handleUpdatePreferences}
        connectionStatus="connected"
        haUrl=""
        onLogout={() => {}}
        onPingDevice={handlePingDevice}
        onOpenCircleModal={() => {
          setSettingsModalOpen(false);
          setCircleModalOpen(true);
        }}
      />
    </div>
  );
};
