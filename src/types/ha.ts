export type ConnectionStatus = 'disconnected' | 'connecting' | 'connected' | 'auth_required' | 'error';

export interface HassUser {
  id: string;
  name: string;
  is_owner?: boolean;
  is_admin?: boolean;
}

export interface HassEntityAttributes {
  friendly_name?: string;
  latitude?: number;
  longitude?: number;
  gps_accuracy?: number;
  source?: string;
  user_id?: string;
  entity_picture?: string;
  battery_level?: number;
  battery_state?: string;
  altitude?: number;
  speed?: number;
  course?: number;
  radius?: number;
  icon?: string;
  passive?: boolean;
  [key: string]: unknown;
}

export interface HassEntity {
  entity_id: string;
  state: string;
  attributes: HassEntityAttributes;
  last_changed: string;
  last_updated: string;
}

export interface PersonEntity extends HassEntity {
  attributes: HassEntityAttributes & {
    friendly_name: string;
    latitude?: number;
    longitude?: number;
    gps_accuracy?: number;
    source?: string;
    user_id?: string;
  };
}

export interface DeviceTrackerEntity extends HassEntity {
  attributes: HassEntityAttributes & {
    source_type?: string;
    battery_level?: number;
    battery_state?: string;
    latitude?: number;
    longitude?: number;
  };
}

export interface ZoneEntity extends HassEntity {
  attributes: HassEntityAttributes & {
    friendly_name: string;
    latitude: number;
    longitude: number;
    radius: number;
    icon?: string;
    passive?: boolean;
  };
}

export interface CircleMember {
  id: string; // Dynamic HA person entity_id (e.g. person.*)
  ha_person_id: string;
  display_name: string;
  color: string; // Pastel colour HEX
  is_self?: boolean;
  added_at: string;
  custom_icon?: string;
  linked_device_tracker_id?: string;
}

export interface FamilyCircle {
  id: string;
  name: string;
  code: string; // 6-character join code
  created_at: string;
  members: CircleMember[];
}

export type MapStyleId = 'positron' | 'osm' | 'bright' | 'liberty' | 'dark' | 'fiord';

export interface MapStyleOption {
  id: MapStyleId;
  name: string;
  url: string;
  attribution: string;
  maxZoom: number;
}

export interface YimlyPreferences {
  mapStyle: MapStyleId;
  showAccuracyCircles: boolean;
  showDeviceMarkers: boolean;
  showZones: boolean;
  autoFollowZoom: number;
}

export interface HaSessionData {
  access_token: string;
  refresh_token?: string;
  expires_at?: number;
  ha_url: string;
  user?: HassUser;
  mode: 'oauth' | 'token' | 'panel_context';
}
