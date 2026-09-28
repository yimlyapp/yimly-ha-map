import React, { useEffect, useRef, useState, useCallback } from 'react';
import L from 'leaflet';
import {
  CircleMember,
  HassEntity,
  PersonEntity,
  DeviceTrackerEntity,
  ZoneEntity,
  MapStyleId,
} from '../../types/ha.ts';
import { MAP_STYLES } from '../../utils/map-styles.ts';
import { EdgeMarkers, EdgeTarget } from './EdgeMarkers.tsx';
import { Layers, Maximize2, Plus, Minus } from 'lucide-react';

interface FamilyMapProps {
  members: CircleMember[];
  entities: Record<string, HassEntity>;
  selectedMemberId: string | null;
  onSelectMember: (memberId: string | null) => void;
  mapStyle: MapStyleId;
  onChangeMapStyle: (style: MapStyleId) => void;
  followPaused: boolean;
  onFollowResume: () => void;
  onUserManualPan: () => void;
  haUrl: string;
}

export const FamilyMap: React.FC<FamilyMapProps> = ({
  members,
  entities,
  selectedMemberId,
  onSelectMember,
  mapStyle,
  onChangeMapStyle,
  followPaused,
  onFollowResume,
  onUserManualPan,
  haUrl,
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const tileLayerRef = useRef<L.TileLayer | null>(null);
  const memberMarkersRef = useRef<Map<string, L.Marker>>(new Map());
  const deviceMarkersRef = useRef<Map<string, L.Marker>>(new Map());
  const zoneCirclesRef = useRef<Map<string, L.Circle>>(new Map());
  const accuracyCirclesRef = useRef<Map<string, L.Circle>>(new Map());

  // Tracks if current map movement was initiated by our code (flyTo / panTo)
  const isProgrammaticMoveRef = useRef(false);

  const [mapReady, setMapReady] = useState(false);
  const [stylePickerOpen, setStylePickerOpen] = useState(false);

  // Initialize Leaflet Map
  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    const map = L.map(mapContainerRef.current, {
      zoomControl: false,
      attributionControl: true,
      minZoom: 2,
      maxZoom: 19,
    }).setView([51.5074, -0.1278], 13);

    const styleConfig = MAP_STYLES[mapStyle] || MAP_STYLES.osm;
    const tileLayer = L.tileLayer(styleConfig.url, {
      attribution: styleConfig.attribution,
      maxZoom: styleConfig.maxZoom,
      subdomains: 'abcd',
    }).addTo(map);

    tileLayerRef.current = tileLayer;
    mapRef.current = map;
    setMapReady(true);

    // Track user manual interaction to pause follow mode smoothly without fighting gestures
    const handleUserInteraction = () => {
      if (isProgrammaticMoveRef.current) return;
      onUserManualPan();
    };

    map.on('dragstart', handleUserInteraction);
    map.on('zoomstart', (e: L.LeafletEvent) => {
      if (isProgrammaticMoveRef.current) return;
      const originEvent = (e as unknown as { originalEvent?: Event }).originalEvent;
      if (originEvent) {
        handleUserInteraction();
      }
    });

    // Reset programmatic move flag when move ends
    map.on('moveend', () => {
      isProgrammaticMoveRef.current = false;
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  // Update tile layer when mapStyle changes
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    const styleConfig = MAP_STYLES[mapStyle] || MAP_STYLES.osm;

    if (tileLayerRef.current) {
      map.removeLayer(tileLayerRef.current);
    }

    const newTileLayer = L.tileLayer(styleConfig.url, {
      attribution: styleConfig.attribution,
      maxZoom: styleConfig.maxZoom,
      subdomains: 'abcd',
    }).addTo(map);

    tileLayerRef.current = newTileLayer;
  }, [mapStyle]);

  // Aggregate targets for off-screen edge markers
  const [edgeTargets, setEdgeTargets] = useState<EdgeTarget[]>([]);

  // Update Person & Device Markers whenever HA entities or circle members change
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapReady) return;

    const currentEdgeTargets: EdgeTarget[] = [];
    const validCoords: L.LatLngTuple[] = [];

    // 1. Process Family Circle Members / HA Persons
    const activeMemberIds = new Set<string>();

    members.forEach((member) => {
      activeMemberIds.add(member.id);

      const personEntity = entities[member.ha_person_id] as PersonEntity | undefined;
      const lat = personEntity?.attributes?.latitude;
      const lng = personEntity?.attributes?.longitude;
      const accuracy = personEntity?.attributes?.gps_accuracy;

      if (typeof lat === 'number' && typeof lng === 'number' && !isNaN(lat) && !isNaN(lng)) {
        validCoords.push([lat, lng]);

        // Find linked tracker battery if available
        let batteryLevel: number | undefined = undefined;
        const sourceTrackerId = personEntity?.attributes?.source;
        if (sourceTrackerId && entities[sourceTrackerId]) {
          batteryLevel = entities[sourceTrackerId].attributes?.battery_level;
        }

        // Avatar picture from Home Assistant
        let avatarUrl = personEntity?.attributes?.entity_picture;
        if (avatarUrl && avatarUrl.startsWith('/')) {
          avatarUrl = `${haUrl}${avatarUrl}`;
        }

        currentEdgeTargets.push({
          id: member.id,
          name: member.display_name,
          lat,
          lng,
          color: member.color,
          avatarUrl,
          batteryLevel,
        });

        const isSelected = selectedMemberId === member.id;
        const initials =
          member.display_name
            .split(' ')
            .map((n) => n[0])
            .slice(0, 2)
            .join('')
            .toUpperCase() || '?';

        // Marker visual language: clean, modern Yimly pastel marker with unmistakable selected state
        const markerSize = isSelected ? 48 : 42;
        const halfSize = markerSize / 2;

        const markerHtml = `
          <div class="relative flex items-center justify-center -translate-x-1/2 -translate-y-1/2 cursor-pointer group" style="--member-color-glow: ${member.color}80">
            ${
              isSelected
                ? `<div class="absolute -inset-3 rounded-full yimly-selected-pulse" style="background-color: ${member.color}35;"></div>`
                : ''
            }
            <div
              class="relative rounded-full bg-white p-0.5 shadow-md flex items-center justify-center transition-all duration-150 active:scale-95 group-hover:scale-105"
              style="width: ${markerSize}px; height: ${markerSize}px; border: ${isSelected ? '3.5px' : '2.5px'} solid ${member.color}; ${
                isSelected ? 'box-shadow: 0 4px 16px rgba(0,0,0,0.22);' : ''
              }"
            >
              <div
                class="w-full h-full rounded-full flex items-center justify-center overflow-hidden font-bold text-white shadow-inner"
                style="background-color: ${member.color};"
              >
                ${
                  avatarUrl
                    ? `<img src="${avatarUrl}" alt="${member.display_name}" class="w-full h-full object-cover" />`
                    : `<span class="${isSelected ? 'text-sm' : 'text-xs'} font-bold text-white drop-shadow-sm tracking-tight">${initials}</span>`
                }
              </div>
              ${
                batteryLevel !== undefined
                  ? `<div class="absolute -bottom-1 bg-slate-900/90 text-white text-[9px] font-bold px-1.5 py-0.2 rounded-full shadow border border-white/70">${batteryLevel}%</div>`
                  : ''
              }
            </div>
            <!-- Name Label below marker -->
            <div class="absolute -bottom-5.5 whitespace-nowrap px-2 py-0.5 rounded-full text-[10px] font-semibold pointer-events-none transition-all duration-150 ${
              isSelected
                ? 'bg-slate-900 text-white ring-2 ring-white shadow-md scale-105'
                : 'bg-white/95 text-slate-800 shadow-sm border border-slate-200/70'
            }">
              ${member.display_name}
            </div>
          </div>
        `;

        const customIcon = L.divIcon({
          className: 'yimly-marker',
          html: markerHtml,
          iconSize: [markerSize, markerSize],
          iconAnchor: [halfSize, halfSize],
        });

        let marker = memberMarkersRef.current.get(member.id);
        if (marker) {
          marker.setLatLng([lat, lng]);
          marker.setIcon(customIcon);
          marker.setZIndexOffset(isSelected ? 1000 : 100);
        } else {
          marker = L.marker([lat, lng], {
            icon: customIcon,
            zIndexOffset: isSelected ? 1000 : 100,
          }).addTo(map);

          marker.on('click', (e) => {
            L.DomEvent.stopPropagation(e);
            onSelectMember(member.id);
          });

          memberMarkersRef.current.set(member.id, marker);
        }

        // Accuracy Circle (translucent precision circle when selected)
        if (accuracy && accuracy > 5 && isSelected) {
          let accCircle = accuracyCirclesRef.current.get(member.id);
          if (accCircle) {
            accCircle.setLatLng([lat, lng]);
            accCircle.setRadius(accuracy);
          } else {
            accCircle = L.circle([lat, lng], {
              radius: accuracy,
              color: member.color,
              weight: 1.5,
              fillColor: member.color,
              fillOpacity: 0.12,
              dashArray: '4, 5',
            }).addTo(map);
            accuracyCirclesRef.current.set(member.id, accCircle);
          }
        } else {
          const accCircle = accuracyCirclesRef.current.get(member.id);
          if (accCircle) {
            map.removeLayer(accCircle);
            accuracyCirclesRef.current.delete(member.id);
          }
        }
      }
    });

    // Remove deleted member markers
    memberMarkersRef.current.forEach((marker, id) => {
      if (!activeMemberIds.has(id)) {
        map.removeLayer(marker);
        memberMarkersRef.current.delete(id);
      }
    });

    // 2. Process Private Linked Device Trackers (34px, breathing animation, owner pastel colour border)
    const deviceTrackers = Object.values(entities).filter(
      (e): e is DeviceTrackerEntity => e.entity_id.startsWith('device_tracker.')
    );

    deviceTrackers.forEach((tracker) => {
      const lat = tracker.attributes?.latitude;
      const lng = tracker.attributes?.longitude;
      const trackerId = tracker.entity_id;

      // Check if claimed by a person entity as primary location source
      const claimedPerson = members.find((m) => {
        const p = entities[m.ha_person_id];
        return p?.attributes?.source === trackerId;
      });

      // Find owner member to borrow their assigned pastel colour
      const ownerMember =
        claimedPerson ||
        members.find((m) => m.linked_device_tracker_id === trackerId);
      const ownerColor = ownerMember ? ownerMember.color : '#64748B';

      if (!claimedPerson && typeof lat === 'number' && typeof lng === 'number' && !isNaN(lat) && !isNaN(lng)) {
        const isSelected = selectedMemberId === trackerId;
        const deviceName = tracker.attributes.friendly_name || trackerId.replace('device_tracker.', '');

        const deviceHtml = `
          <div class="relative flex items-center justify-center -translate-x-1/2 -translate-y-1/2 cursor-pointer group">
            <div
              class="w-[34px] h-[34px] rounded-full bg-white flex items-center justify-center shadow-md yimly-device-breathing transition-transform active:scale-95 group-hover:scale-110"
              style="border: 2.5px solid ${ownerColor};"
            >
              <svg class="w-4 h-4" style="color: ${ownerColor};" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
              </svg>
            </div>
            <div class="absolute -bottom-4 whitespace-nowrap bg-white/95 px-1.5 py-0.2 rounded text-[9px] font-semibold text-slate-700 shadow-xs border border-slate-200 pointer-events-none opacity-85">
              ${deviceName}
            </div>
          </div>
        `;

        const deviceIcon = L.divIcon({
          className: 'yimly-device-marker',
          html: deviceHtml,
          iconSize: [34, 34],
          iconAnchor: [17, 17],
        });

        let marker = deviceMarkersRef.current.get(trackerId);
        if (marker) {
          marker.setLatLng([lat, lng]);
          marker.setIcon(deviceIcon);
        } else {
          marker = L.marker([lat, lng], {
            icon: deviceIcon,
            zIndexOffset: isSelected ? 500 : 50,
          }).addTo(map);

          marker.on('click', (e) => {
            L.DomEvent.stopPropagation(e);
            onSelectMember(trackerId);
          });

          deviceMarkersRef.current.set(trackerId, marker);
        }
      }
    });

    // 3. Render HA Zones (soft translucent circles)
    const zones = Object.values(entities).filter((e): e is ZoneEntity => e.entity_id.startsWith('zone.'));
    zones.forEach((zone) => {
      const lat = zone.attributes?.latitude;
      const lng = zone.attributes?.longitude;
      const radius = zone.attributes?.radius || 100;
      const zoneId = zone.entity_id;

      if (typeof lat === 'number' && typeof lng === 'number' && !isNaN(lat) && !isNaN(lng)) {
        let circle = zoneCirclesRef.current.get(zoneId);
        if (circle) {
          circle.setLatLng([lat, lng]);
          circle.setRadius(radius);
        } else {
          circle = L.circle([lat, lng], {
            radius: radius,
            color: '#64748B',
            weight: 1,
            fillColor: '#94A3B8',
            fillOpacity: 0.1,
            dashArray: '3, 6',
          }).addTo(map);

          const zoneName = zone.attributes.friendly_name || zoneId.replace('zone.', '');
          circle.bindTooltip(zoneName, {
            permanent: false,
            direction: 'center',
            className: 'text-xs font-semibold text-slate-600 bg-white/90 rounded-md px-1.5 py-0.5 border border-slate-200 shadow-xs',
          });

          zoneCirclesRef.current.set(zoneId, circle);
        }
      }
    });

    setEdgeTargets(currentEdgeTargets);

    // Auto-fit bounds on initial load if we have valid coords
    if (validCoords.length > 0 && !selectedMemberId && !followPaused) {
      const bounds = L.latLngBounds(validCoords);
      if (bounds.isValid()) {
        isProgrammaticMoveRef.current = true;
        map.fitBounds(bounds, { padding: [60, 60], maxZoom: 16 });
      }
    }
  }, [members, entities, selectedMemberId, mapReady, haUrl]);

  // Live Follow Handler: when selected member location changes and follow is active
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !selectedMemberId || followPaused) return;

    const member = members.find((m) => m.id === selectedMemberId);
    let lat: number | undefined;
    let lng: number | undefined;

    if (member) {
      const personEntity = entities[member.ha_person_id];
      lat = personEntity?.attributes?.latitude;
      lng = personEntity?.attributes?.longitude;
    } else {
      const entity = entities[selectedMemberId];
      lat = entity?.attributes?.latitude;
      lng = entity?.attributes?.longitude;
    }

    if (typeof lat === 'number' && typeof lng === 'number' && !isNaN(lat) && !isNaN(lng)) {
      isProgrammaticMoveRef.current = true;
      map.panTo([lat, lng], { animate: true, duration: 0.8 });
    }
  }, [selectedMemberId, followPaused, entities, members]);

  // Action: Select target from edge marker & fly to real location
  const handleSelectFromEdge = (targetId: string, lat: number, lng: number) => {
    onSelectMember(targetId);
    onFollowResume();
    if (mapRef.current) {
      isProgrammaticMoveRef.current = true;
      mapRef.current.flyTo([lat, lng], Math.max(mapRef.current.getZoom(), 16), {
        duration: 0.9,
      });
    }
  };

  // Zoom controls
  const handleZoomIn = () => {
    isProgrammaticMoveRef.current = true;
    mapRef.current?.zoomIn();
  };

  const handleZoomOut = () => {
    isProgrammaticMoveRef.current = true;
    mapRef.current?.zoomOut();
  };

  // Recenter all members
  const handleFitAll = () => {
    const map = mapRef.current;
    if (!map) return;

    const coords: L.LatLngTuple[] = [];
    members.forEach((m) => {
      const p = entities[m.ha_person_id];
      if (p?.attributes?.latitude && p?.attributes?.longitude) {
        coords.push([p.attributes.latitude, p.attributes.longitude]);
      }
    });

    if (coords.length > 0) {
      const bounds = L.latLngBounds(coords);
      isProgrammaticMoveRef.current = true;
      map.fitBounds(bounds, { padding: [70, 70], maxZoom: 16 });
    }
  };

  const hasAnyLocations = edgeTargets.length > 0;

  return (
    <div className="relative h-full w-full overflow-hidden select-none bg-slate-100">
      {/* Full-Screen Leaflet Map */}
      <div
        ref={mapContainerRef}
        className="h-full w-full"
        onClick={() => {
          onSelectMember(null);
        }}
      />

      {/* Hanging / Off-Screen Edge Markers Layer */}
      <EdgeMarkers
        map={mapRef.current}
        targets={edgeTargets}
        onSelectTarget={handleSelectFromEdge}
        selectedId={selectedMemberId}
      />

      {/* Empty State when no real HA coordinates exist */}
      {!hasAnyLocations && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-6 z-[300]">
          <div className="rounded-2xl border border-white/80 bg-white/90 px-5 py-4 text-center shadow-lg backdrop-blur-md max-w-sm">
            <p className="text-sm font-semibold text-slate-800">
              No device locations available yet.
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Ensure Home Assistant Companion App location tracking is enabled for your users.
            </p>
          </div>
        </div>
      )}

      {/* Floating Map Controls (Right Side, top-20 to clear TopBar) */}
      <div
        className="absolute right-3.5 top-20 z-[400] flex flex-col gap-2"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Map Style Selector Toggle */}
        <div className="relative">
          <button
            onClick={() => setStylePickerOpen(!stylePickerOpen)}
            className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-2xl border border-white/70 bg-white/90 text-slate-700 shadow-md backdrop-blur-md transition-all active:scale-95 hover:bg-white"
            title="Map Style"
          >
            <Layers className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
          </button>

          {/* Map Style Dropdown */}
          {stylePickerOpen && (
            <div
              className="absolute right-12 sm:right-13 top-0 w-44 rounded-2xl border border-white/70 bg-white/95 p-1.5 shadow-xl backdrop-blur-md z-[500]"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Map Style
              </p>
              <div className="flex flex-col gap-0.5">
                {(Object.keys(MAP_STYLES) as MapStyleId[]).map((key) => {
                  const style = MAP_STYLES[key];
                  const isActive = mapStyle === key;
                  return (
                    <button
                      key={key}
                      onClick={() => {
                        onChangeMapStyle(key);
                        setStylePickerOpen(false);
                      }}
                      className={`flex w-full items-center justify-between rounded-xl px-3 py-1.5 text-xs font-semibold transition-colors ${
                        isActive
                          ? 'bg-slate-900 text-white shadow-xs'
                          : 'text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <span>{style.name}</span>
                      {isActive && <div className="h-1.5 w-1.5 rounded-full bg-white" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Fit Bounds / Show All Button */}
        {hasAnyLocations && (
          <button
            onClick={handleFitAll}
            className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-2xl border border-white/70 bg-white/90 text-slate-700 shadow-md backdrop-blur-md transition-all active:scale-95 hover:bg-white"
            title="Recenter All Members"
          >
            <Maximize2 className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
          </button>
        )}

        {/* Zoom In & Out */}
        <div className="flex flex-col overflow-hidden rounded-2xl border border-white/70 bg-white/90 shadow-md backdrop-blur-md">
          <button
            onClick={handleZoomIn}
            className="flex h-9.5 w-10 sm:h-10 sm:w-11 items-center justify-center border-b border-slate-200/50 text-slate-700 transition-colors active:bg-slate-100 hover:bg-white"
            title="Zoom In"
          >
            <Plus className="h-4 w-4" />
          </button>
          <button
            onClick={handleZoomOut}
            className="flex h-9.5 w-10 sm:h-10 sm:w-11 items-center justify-center text-slate-700 transition-colors active:bg-slate-100 hover:bg-white"
            title="Zoom Out"
          >
            <Minus className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
