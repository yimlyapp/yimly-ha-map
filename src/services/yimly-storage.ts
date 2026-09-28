import { FamilyCircle, YimlyPreferences } from '../types/ha.ts';
import { DEFAULT_MAP_STYLE } from '../utils/map-styles.ts';

const CIRCLE_KEY = 'yimly_active_circle';
const PREFS_KEY = 'yimly_preferences';

export const DEFAULT_PREFERENCES: YimlyPreferences = {
  mapStyle: DEFAULT_MAP_STYLE,
  showAccuracyCircles: true,
  showDeviceMarkers: true,
  showZones: true,
  autoFollowZoom: 16,
};

// Forensic cleanup: purge any legacy credential keys from browser storage immediately
try {
  localStorage.removeItem('yimly_ha_session');
  sessionStorage.removeItem('yimly_ha_session');
  localStorage.removeItem('ha_token');
  sessionStorage.removeItem('ha_token');
} catch {
  // Ignore in environments where storage is blocked
}

export const YimlyStorage = {
  getCircle(): FamilyCircle | null {
    try {
      const data = localStorage.getItem(CIRCLE_KEY);
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  },

  saveCircle(circle: FamilyCircle | null): void {
    try {
      if (circle) {
        localStorage.setItem(CIRCLE_KEY, JSON.stringify(circle));
      } else {
        localStorage.removeItem(CIRCLE_KEY);
      }
    } catch (e) {
      console.error('Error saving circle to localStorage', e);
    }
  },

  getPreferences(): YimlyPreferences {
    try {
      const data = localStorage.getItem(PREFS_KEY);
      return data ? { ...DEFAULT_PREFERENCES, ...JSON.parse(data) } : DEFAULT_PREFERENCES;
    } catch {
      return DEFAULT_PREFERENCES;
    }
  },

  savePreferences(prefs: Partial<YimlyPreferences>): YimlyPreferences {
    try {
      const current = this.getPreferences();
      const updated = { ...current, ...prefs };
      localStorage.setItem(PREFS_KEY, JSON.stringify(updated));
      return updated;
    } catch (e) {
      console.error('Error saving preferences', e);
      return DEFAULT_PREFERENCES;
    }
  },
};
