import React, { useEffect, useState, useCallback } from 'react';
import type L from 'leaflet';

export interface EdgeTarget {
  id: string;
  name: string;
  lat: number;
  lng: number;
  color: string;
  avatarUrl?: string;
  isDevice?: boolean;
  batteryLevel?: number;
}

interface EdgeMarkerItem {
  target: EdgeTarget;
  edgeX: number;
  edgeY: number;
  angleDeg: number;
  distanceKm: number;
  side: 'top' | 'bottom' | 'left' | 'right';
}

interface EdgeMarkersProps {
  map: L.Map | null;
  targets: EdgeTarget[];
  onSelectTarget: (id: string, lat: number, lng: number) => void;
  selectedId: string | null;
}

export const EdgeMarkers: React.FC<EdgeMarkersProps> = ({
  map,
  targets,
  onSelectTarget,
  selectedId,
}) => {
  const [edgeItems, setEdgeItems] = useState<EdgeMarkerItem[]>([]);

  const calculateEdgePositions = useCallback(() => {
    if (!map) return;

    const container = map.getContainer();
    const width = container.clientWidth;
    const height = container.clientHeight;

    if (width <= 0 || height <= 0) return;

    // Viewport safe insets:
    // Top inset accounts for TopBar (Family Circle pill & Settings)
    // Right inset accounts for floating map controls (+ / - / layers)
    // Bottom inset accounts for selected-user card handle
    // Left inset provides clean padding from device border
    const marginTop = 76;
    const marginBottom = 88;
    const marginLeft = 28;
    const marginRight = 64;

    const minX = marginLeft;
    const maxX = width - marginRight;
    const minY = marginTop;
    const maxY = height - marginBottom;

    if (maxX <= minX || maxY <= minY) return;

    const centerX = (minX + maxX) / 2;
    const centerY = (minY + maxY) / 2;
    const halfW = (maxX - minX) / 2;
    const halfH = (maxY - minY) / 2;

    const rawItems: EdgeMarkerItem[] = [];

    targets.forEach((target) => {
      if (typeof target.lat !== 'number' || typeof target.lng !== 'number') return;
      if (isNaN(target.lat) || isNaN(target.lng)) return;

      const latLng: [number, number] = [target.lat, target.lng];
      const point = map.latLngToContainerPoint(latLng);

      // Check if target point is currently inside the visible viewport
      const isVisible =
        point.x >= minX - 10 &&
        point.x <= maxX + 10 &&
        point.y >= minY - 10 &&
        point.y <= maxY + 10;

      // If visible inside viewport, do NOT show edge marker (normal map marker shows instead)
      if (isVisible) return;

      // Calculate directional ray from center to target screen position
      const dx = point.x - centerX;
      const dy = point.y - centerY;
      if (dx === 0 && dy === 0) return;

      const angleRad = Math.atan2(dy, dx);
      const angleDeg = (angleRad * 180) / Math.PI;

      // Ray intersection with the safe rectangle
      const scaleX = Math.abs(dx) > 0 ? halfW / Math.abs(dx) : Infinity;
      const scaleY = Math.abs(dy) > 0 ? halfH / Math.abs(dy) : Infinity;
      const scale = Math.min(scaleX, scaleY);

      let edgeX = centerX + dx * scale;
      let edgeY = centerY + dy * scale;

      let side: 'top' | 'bottom' | 'left' | 'right';
      if (scale === scaleY) {
        side = dy < 0 ? 'top' : 'bottom';
        edgeY = dy < 0 ? minY : maxY;
      } else {
        side = dx < 0 ? 'left' : 'right';
        edgeX = dx < 0 ? minX : maxX;
      }

      // Approximate distance from map center
      const centerLatLng = map.getCenter();
      const distMeters = centerLatLng.distanceTo(latLng);
      const distanceKm = Math.round((distMeters / 1000) * 10) / 10;

      rawItems.push({
        target,
        edgeX,
        edgeY,
        angleDeg,
        distanceKm,
        side,
      });
    });

    // Collision Resolution: separate markers on the same edge so they don't overlap
    const minSpacing = 48; // Minimum pixels between marker centers
    const sides: Array<'top' | 'bottom' | 'left' | 'right'> = ['top', 'bottom', 'left', 'right'];
    const resolvedItems: EdgeMarkerItem[] = [];

    sides.forEach((s) => {
      const sideItems = rawItems.filter((i) => i.side === s);
      if (sideItems.length <= 1) {
        resolvedItems.push(...sideItems);
        return;
      }

      // Sort items along the edge
      const isHorizontal = s === 'top' || s === 'bottom';
      sideItems.sort((a, b) => (isHorizontal ? a.edgeX - b.edgeX : a.edgeY - b.edgeY));

      // Iterative relaxation pass to resolve overlaps
      for (let pass = 0; pass < 3; pass++) {
        for (let i = 1; i < sideItems.length; i++) {
          const prev = sideItems[i - 1];
          const curr = sideItems[i];
          const dist = isHorizontal ? curr.edgeX - prev.edgeX : curr.edgeY - prev.edgeY;

          if (dist < minSpacing) {
            const shift = (minSpacing - dist) / 2;
            if (isHorizontal) {
              prev.edgeX = Math.max(minX, prev.edgeX - shift);
              curr.edgeX = Math.min(maxX, curr.edgeX + shift);
            } else {
              prev.edgeY = Math.max(minY, prev.edgeY - shift);
              curr.edgeY = Math.min(maxY, curr.edgeY + shift);
            }
          }
        }
      }

      resolvedItems.push(...sideItems);
    });

    setEdgeItems(resolvedItems);
  }, [map, targets]);

  useEffect(() => {
    if (!map) return;

    calculateEdgePositions();

    const onMapChange = () => {
      calculateEdgePositions();
    };

    map.on('move', onMapChange);
    map.on('zoom', onMapChange);
    map.on('resize', onMapChange);

    return () => {
      map.off('move', onMapChange);
      map.off('zoom', onMapChange);
      map.off('resize', onMapChange);
    };
  }, [map, calculateEdgePositions]);

  if (edgeItems.length === 0) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-[450] overflow-hidden">
      {edgeItems.map((item) => {
        const { target, edgeX, edgeY, angleDeg, distanceKm } = item;
        const isSelected = selectedId === target.id;
        const initials =
          target.name
            .split(' ')
            .map((n) => n[0])
            .slice(0, 2)
            .join('')
            .toUpperCase() || '?';

        // Calculate pointer offset vector (attached outside the badge directed toward target)
        const rad = (angleDeg * Math.PI) / 180;
        const pointerDist = 23;
        const pointerX = Math.cos(rad) * pointerDist;
        const pointerY = Math.sin(rad) * pointerDist;

        return (
          <div
            key={target.id}
            onClick={(e) => {
              e.stopPropagation();
              onSelectTarget(target.id, target.lat, target.lng);
            }}
            style={{
              transform: `translate3d(${edgeX}px, ${edgeY}px, 0) translate(-50%, -50%)`,
            }}
            className="pointer-events-auto absolute flex cursor-pointer items-center justify-center transition-transform duration-75 active:scale-95"
            title={`${target.name} (${distanceKm} km away) - Tap to locate`}
          >
            {/* Directional Pointer Arrow attached to the edge */}
            <div
              style={{
                transform: `translate(${pointerX}px, ${pointerY}px) rotate(${angleDeg}deg)`,
                color: target.color,
              }}
              className="absolute pointer-events-none drop-shadow-sm transition-transform"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                <path d="M13 7L3 1.5V12.5L13 7Z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Edge Marker Badge */}
            <div
              style={{
                borderColor: '#FFFFFF',
                boxShadow: isSelected
                  ? `0 0 0 3px ${target.color}, 0 6px 18px rgba(0,0,0,0.22)`
                  : '0 4px 14px rgba(0, 0, 0, 0.16)',
              }}
              className="relative flex h-10 w-10 items-center justify-center rounded-full border-2 bg-white transition-all hover:scale-110"
            >
              {/* Member Color Ring Fill */}
              <div
                style={{ backgroundColor: target.color }}
                className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full font-bold text-white shadow-inner"
              >
                {target.avatarUrl ? (
                  <img
                    src={target.avatarUrl}
                    alt={target.name}
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                ) : (
                  <span className="text-[11px] font-bold tracking-tight text-white drop-shadow-sm">
                    {initials}
                  </span>
                )}
              </div>

              {/* Distance label tag on hover/selected */}
              {distanceKm > 0 && (
                <div className="absolute -bottom-4.5 whitespace-nowrap rounded-md bg-slate-900/80 px-1.5 py-0.5 text-[9px] font-medium text-white shadow backdrop-blur-xs">
                  {distanceKm}km
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
