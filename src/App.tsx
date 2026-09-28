import React, { useEffect, useState, useCallback, useMemo } from 'react';
import {
  CircleMember,
  ConnectionStatus,
  FamilyCircle,
  HassEntity,
  HassUser,
  MapStyleId,
  PersonEntity,
  DeviceTrackerEntity,
} from './types/ha.ts';
import { HaConnectionService, HA_DEFAULT_URL } from './services/ha-connection.ts';
import { YimlyStorage } from './services/yimly-storage.ts';
import { PASTEL_RAINBOW_COLORS, DEFAULT_MEMBER_COLOR } from './utils/colors.ts';
import { FamilyMap } from './components/Map/FamilyMap.tsx';
import { TopBar } from './components/UI/TopBar.tsx';
import { SelectedUserCard } from './components/UI/SelectedUserCard.tsx';
import { CircleModal } from './components/UI/CircleModal.tsx';
import { SettingsModal } from './components/UI/SettingsModal.tsx';
import { HaAuthModal } from './components/UI/HaAuthModal.tsx';

export default function App() {
  const haService = useMemo(() => HaConnectionService.getInstance(), []);

  // HA State
  const [connectionStatus, setConnectionStatus] = useState<ConnectionStatus>(haService.getStatus());
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [entities, setEntities] = useState<Record<string, HassEntity>>({});
  const [currentUser, setCurrentUser] = useState<HassUser | null>(haService.getCurrentUser());

  // Yimly Circle & Preferences State (Non-sensitive persistence)
  const [circle, setCircle] = useState<FamilyCircle | null>(() => YimlyStorage.getCircle());
  const [preferences, setPreferences] = useState(() => YimlyStorage.getPreferences());

  // Selection & Live Follow State
  const [selectedMemberId, setSelectedMemberId] = useState<string | null>(null);
  const [isFollowing, setIsFollowing] = useState(true);
  const [followPaused, setFollowPaused] = useState(false);

  // Modals
  const [circleModalOpen, setCircleModalOpen] = useState(false);
  const [settingsModalOpen, setSettingsModalOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);

  // Home Assistant Connection & Subscriptions
  useEffect(() => {
    // 1. Connection status listener
    const unsubscribeStatus = haService.onStatusChange((status, message) => {
      setConnectionStatus(status);
      if (message) setStatusMessage(message);
      // Close modal once connected
      if (status === 'connected') {
        setAuthModalOpen(false);
      }
    });

    // 2. Entities bulk loaded listener
    const unsubscribeEntities = haService.onEntitiesLoaded((newEntities) => {
      setEntities({ ...newEntities });
      setCurrentUser(haService.getCurrentUser());
    });

    // 3. Real-time individual state change listener
    const unsubscribeStateChange = haService.onStateChange((entity) => {
      setEntities((prev) => ({
        ...prev,
        [entity.entity_id]: entity,
      }));
    });

    // 4. Listen for postMessage from Home Assistant custom panel
    const handleParentMessage = (event: MessageEvent) => {
      if (event.data?.type === 'ha-init' || event.data?.type === 'ha-state-changed') {
        setAuthModalOpen(false);
      }
    };
    window.addEventListener('message', handleParentMessage);

    // Initial check: if running inside HA or callback code in URL
    const initConnection = async () => {
      // 1. Perform handshake with parent frame (identifies if inside HA custom panel)
      const isEmbedded = await haService.startHandshake();
      if (isEmbedded) {
        // Running inside Home Assistant custom panel: native session will be reused
        setAuthModalOpen(false);
        return;
      }

      // 2. Check if URL has ?code= from HA OAuth redirect callback
      const hasCode = await haService.handleAuthCallback();
      if (hasCode) {
        setAuthModalOpen(false);
        return;
      }

      // 3. In standalone preview mode, trigger connect check
      await haService.connect();
    };
    initConnection();

    return () => {
      unsubscribeStatus();
      unsubscribeEntities();
      unsubscribeStateChange();
      window.removeEventListener('message', handleParentMessage);
    };
  }, [haService]);

  // HA Entities helpers (discovered dynamically from Home Assistant state)
  const haPersons: PersonEntity[] = useMemo(() => {
    return Object.values(entities).filter(
      (e): e is PersonEntity => e.entity_id.startsWith('person.')
    );
  }, [entities]);

  const haDeviceTrackers: DeviceTrackerEntity[] = useMemo(() => {
    return Object.values(entities).filter(
      (e): e is DeviceTrackerEntity => e.entity_id.startsWith('device_tracker.')
    );
  }, [entities]);

  // Current Person strictly matching authenticated HA user (NEVER falls back to first person)
  const currentPerson = useMemo(() => {
    return haService.findCurrentPerson();
  }, [haService, entities, currentUser]);

  // Synchronize Circle with HA persons dynamically when connected
  useEffect(() => {
    if (connectionStatus === 'connected' && haPersons.length > 0) {
      if (!circle) {
        // Bootstrap Family Circle strictly using authenticated user's person (if identified)
        const myPersonId = currentPerson?.entity_id;
        const newCode = `YIM-${Math.floor(100 + Math.random() * 900)}`;

        const initialMembers: CircleMember[] = haPersons.map((p, idx) => {
          // Only true if this person actually belongs to the authenticated HA user
          const isSelf = myPersonId ? p.entity_id === myPersonId : false;
          const color = PASTEL_RAINBOW_COLORS[idx % PASTEL_RAINBOW_COLORS.length].hex;
          return {
            id: p.entity_id,
            ha_person_id: p.entity_id,
            display_name: p.attributes.friendly_name || p.entity_id.replace('person.', ''),
            color,
            is_self: isSelf,
            added_at: new Date().toISOString(),
          };
        });

        const newCircle: FamilyCircle = {
          id: `circle_${Date.now()}`,
          name: 'Home Circle',
          code: newCode,
          created_at: new Date().toISOString(),
          members: initialMembers,
        };

        setCircle(newCircle);
        YimlyStorage.saveCircle(newCircle);
      }
    }
  }, [connectionStatus, haPersons, currentPerson, circle]);

  // Active circle members
  const circleMembers = useMemo(() => {
    return circle?.members || [];
  }, [circle]);

  // Selected member details
  const selectedMember = useMemo(() => {
    return circleMembers.find((m) => m.id === selectedMemberId);
  }, [circleMembers, selectedMemberId]);

  // Handle member selection
  const handleSelectMember = useCallback(
    (memberId: string | null) => {
      setSelectedMemberId(memberId);
      if (memberId) {
        setIsFollowing(true);
        setFollowPaused(false);
      }
    },
    []
  );

  // Resume follow mode
  const handleResumeFollow = useCallback(() => {
    setFollowPaused(false);
    setIsFollowing(true);
  }, []);

  // When user manually pans or zooms the map, suspend live follow
  const handleUserManualPan = useCallback(() => {
    if (selectedMemberId && isFollowing && !followPaused) {
      setFollowPaused(true);
    }
  }, [selectedMemberId, isFollowing, followPaused]);

  // Preferences update
  const handleUpdatePreferences = (newPrefs: Partial<typeof preferences>) => {
    const updated = YimlyStorage.savePreferences(newPrefs);
    setPreferences(updated);
  };

  // Map style update
  const handleChangeMapStyle = (style: MapStyleId) => {
    handleUpdatePreferences({ mapStyle: style });
  };

  // Circle actions
  const handleCreateCircle = (name: string, memberPersonId: string, color: string) => {
    const code = `YIM-${Math.floor(100 + Math.random() * 900)}`;
    const person = haPersons.find((p) => p.entity_id === memberPersonId);
    const isSelf = currentPerson ? memberPersonId === currentPerson.entity_id : false;
    const newCircle: FamilyCircle = {
      id: `circle_${Date.now()}`,
      name,
      code,
      created_at: new Date().toISOString(),
      members: [
        {
          id: memberPersonId,
          ha_person_id: memberPersonId,
          display_name: person?.attributes.friendly_name || memberPersonId.replace('person.', ''),
          color,
          is_self: isSelf,
          added_at: new Date().toISOString(),
        },
      ],
    };
    setCircle(newCircle);
    YimlyStorage.saveCircle(newCircle);
  };

  const handleJoinCircle = (code: string) => {
    const myPerson = currentPerson;
    const newCircle: FamilyCircle = {
      id: `circle_${Date.now()}`,
      name: `Circle ${code}`,
      code,
      created_at: new Date().toISOString(),
      members: myPerson
        ? [
            {
              id: myPerson.entity_id,
              ha_person_id: myPerson.entity_id,
              display_name: myPerson.attributes.friendly_name || 'Me',
              color: DEFAULT_MEMBER_COLOR,
              is_self: true,
              added_at: new Date().toISOString(),
            },
          ]
        : [],
    };
    setCircle(newCircle);
    YimlyStorage.saveCircle(newCircle);
  };

  const handleLeaveCircle = () => {
    setCircle(null);
    YimlyStorage.saveCircle(null);
    setSelectedMemberId(null);
  };

  const handleAddMemberToCircle = (personId: string, displayName: string, color: string) => {
    if (!circle) return;
    const isSelf = currentPerson ? personId === currentPerson.entity_id : false;
    const newMember: CircleMember = {
      id: personId,
      ha_person_id: personId,
      display_name: displayName,
      color,
      is_self: isSelf,
      added_at: new Date().toISOString(),
    };
    const updated: FamilyCircle = {
      ...circle,
      members: [...circle.members, newMember],
    };
    setCircle(updated);
    YimlyStorage.saveCircle(updated);
  };

  const handleRemoveMemberFromCircle = (memberId: string) => {
    if (!circle) return;
    const updated: FamilyCircle = {
      ...circle,
      members: circle.members.filter((m) => m.id !== memberId),
    };
    setCircle(updated);
    YimlyStorage.saveCircle(updated);
    if (selectedMemberId === memberId) {
      setSelectedMemberId(null);
    }
  };

  const handleUpdateMemberColor = (memberId: string, color: string) => {
    if (!circle) return;
    const updated: FamilyCircle = {
      ...circle,
      members: circle.members.map((m) => (m.id === memberId ? { ...m, color } : m)),
    };
    setCircle(updated);
    YimlyStorage.saveCircle(updated);
  };

  // Home Assistant Service Call: Ping device
  const handlePingDevice = async (trackerEntityId: string) => {
    const tracker = entities[trackerEntityId];
    const friendlyName = tracker?.attributes?.friendly_name || trackerEntityId;
    await haService.callService('persistent_notification', 'create', {
      title: 'Yimly Device Ping',
      message: `Ping request received for ${friendlyName} from Yimly HA Map.`,
      notification_id: `yimly_ping_${Date.now()}`,
    });
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden select-none bg-slate-100 font-sans">
      {/* Top Bar with Family Circle pill and Settings gear */}
      <TopBar
        circle={circle}
        onOpenCircleModal={() => setCircleModalOpen(true)}
        onOpenSettingsModal={() => setSettingsModalOpen(true)}
        followPaused={followPaused}
        selectedMemberName={selectedMember?.display_name}
        onResumeFollow={handleResumeFollow}
        connectionStatus={connectionStatus}
        onReconnect={() => haService.connect()}
      />

      {/* Real Full-Screen Family Map */}
      <FamilyMap
        members={circleMembers}
        entities={entities}
        selectedMemberId={selectedMemberId}
        onSelectMember={handleSelectMember}
        mapStyle={preferences.mapStyle}
        onChangeMapStyle={handleChangeMapStyle}
        followPaused={followPaused}
        onFollowResume={handleResumeFollow}
        onUserManualPan={handleUserManualPan}
        haUrl={HA_DEFAULT_URL}
      />

      {/* Selected User Info Card (Collapsible bottom frosted sheet) */}
      <SelectedUserCard
        selectedId={selectedMemberId}
        members={circleMembers}
        entities={entities}
        isCurrentUser={selectedMember?.is_self ?? false}
        isFollowing={isFollowing}
        followPaused={followPaused}
        onToggleFollow={() => {
          if (isFollowing && !followPaused) {
            setIsFollowing(false);
          } else {
            setIsFollowing(true);
            setFollowPaused(false);
          }
        }}
        onRecenter={() => {
          setFollowPaused(false);
          setIsFollowing(true);
        }}
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
        onJoinCircle={handleJoinCircle}
        onLeaveCircle={handleLeaveCircle}
        onAddMember={handleAddMemberToCircle}
        onRemoveMember={handleRemoveMemberFromCircle}
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
        connectionStatus={connectionStatus}
        haUrl={HA_DEFAULT_URL}
        onLogout={() => {
          haService.logout();
          setSettingsModalOpen(false);
          if (!haService.isEmbedded()) {
            setAuthModalOpen(true);
          }
        }}
        onPingDevice={handlePingDevice}
        onOpenCircleModal={() => setCircleModalOpen(true)}
      />

      {/* Home Assistant Authentication Modal (Standalone Mode only) */}
      <HaAuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onStartOAuth={() => haService.startOAuthLogin()}
        onConnectToken={async (token, url) => {
          await haService.connectWithToken(token, url);
          setAuthModalOpen(false);
        }}
        statusMessage={statusMessage}
        isConnecting={connectionStatus === 'connecting'}
        isEmbeddedInHa={haService.isEmbedded()}
      />
    </div>
  );
}
