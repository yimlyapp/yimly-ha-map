# Yimly HA Map 📍

[![HACS Custom Card](https://img.shields.io/badge/HACS-Custom%20Card-orange.svg)](https://github.com/hacs/integration)
[![GitHub Release](https://img.shields.io/badge/release-v1.0.0-blue.svg)](https://github.com/yimlyapp/yimly-ha-map/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Yimly HA Map** is a beautiful, modern family location map card for [Home Assistant](https://www.home-assistant.io/) Lovelace dashboards. It provides real-time live member tracking, smooth live-follow, hanging directional off-screen edge markers, device telemetry, and selectable keyless map styles—powered 100% natively by your Home Assistant `hass` object.

---

## ✨ Features

- **🏠 Native Home Assistant Integration**: Runs directly in your Lovelace dashboard via `type: custom:yimly-ha-map`. Uses the live `hass` object for real-time updates.
- **🔒 Zero Extra Logins & Zero Tokens**: No secondary login, no passwords, and no tokens required for card operation.
- **🗺️ Keyless OpenStreetMap Basemaps**: 6 built-in map styles (OSM Standard, Positron, Bright, Liberty, Dark, Fiord). No Google Maps or Mapbox API keys needed!
- **🎯 Directional Edge Markers**: When family members are outside the current map view, clean hanging pills indicate their direction and distance. Tap to fly directly to them.
- **📍 Dynamic HA Discovery**: Automatically discovers `person.*`, `device_tracker.*`, and `zone.*` entities.
- **🔄 Smooth Live Follow**: Real-time position updates automatically follow the selected family member. Manual map gestures pause follow mode with a simple "Resume Follow" button.
- **🎨 Pastel Member Color Palette**: Customizable pastel rainbow colors for family members with avatar and battery badges.
- **📱 Responsive**: Looks great in standard Lovelace columns, Sections dashboards, Masonry views, and mobile Home Assistant apps.

---

## 📦 Installation

### Option 1: HACS (Recommended)

1. Open **HACS** in your Home Assistant sidebar.
2. Click on **Frontend** (Dashboards).
3. Click the three dots in the top right corner and select **Custom repositories**.
4. Enter the repository URL: `https://github.com/yimlyapp/yimly-ha-map`
5. Select **Dashboard** (or **Lovelace**) as the Category, then click **Add**.
6. Find **Yimly HA Map** in the HACS list and click **Download**.
7. Reload your browser or Lovelace resources when prompted.

### Option 2: Manual Installation

1. Download the latest `yimly-ha-map.js` release from [Releases](https://github.com/yimlyapp/yimly-ha-map/releases).
2. Copy `yimly-ha-map.js` into your Home Assistant directory under `<config>/www/yimly-ha-map.js`.
3. In Home Assistant, go to **Settings** → **Dashboards** → **Resources** (top-right three dots) → **Add Resource**.
4. Set URL to `/local/yimly-ha-map.js` and Resource Type to **JavaScript Module**.
5. Save and refresh your browser.

---

## 🛠️ Usage & Dashboard Configuration

Add a card to any Lovelace dashboard in Home Assistant:

```yaml
type: custom:yimly-ha-map
```

### Full Configuration Example

```yaml
type: custom:yimly-ha-map
height: 550px
map_style: osm
show_zones: true
show_devices: true
show_accuracy: true
```

### Configuration Options

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `type` | `string` | **Required** | Must be `custom:yimly-ha-map` |
| `height` | `string` / `number` | `500px` | Height of the card (e.g. `500px`, `650px`, or `calc(100vh - 120px)` for panel views) |
| `map_style` | `string` | `osm` | Default map style: `osm`, `positron`, `bright`, `liberty`, `dark`, or `fiord` |
| `show_zones` | `boolean` | `true` | Show Home Assistant registered zones on the map |
| `show_devices` | `boolean` | `true` | Show standalone device trackers on the map |
| `show_accuracy` | `boolean` | `true` | Show GPS accuracy circles around active markers |

---

## 🎨 Map Styles (All Keyless)

All built-in map styles use legitimate, keyless OpenStreetMap-compatible raster tiles:

1. **OSM Standard (`osm`)**: OpenStreetMap standard style *(Default)*
2. **Positron (`positron`)**: Light minimalist Carto basemap
3. **Bright (`bright`)**: Colorful vibrant Carto Voyager basemap
4. **Liberty (`liberty`)**: Balanced label-under basemap
5. **Dark (`dark`)**: Dark mode Carto basemap
6. **Fiord (`fiord`)**: Deep slate canvas basemap

---

## 🔒 Security & Privacy Architecture

- **No Yimly account required.**
- **No Home Assistant username or password required.**
- **No Long-Lived Access Token required for normal card operation.**
- **No tokens or credentials stored in `localStorage` or `sessionStorage`.**
- **No external server, proxy, or backend needed.**
- Authentication and entity state are provided strictly and securely by Home Assistant through the native `hass` object.

---

## ❓ Troubleshooting

### The card shows "Loading Home Assistant Map..."
Ensure the card is placed inside a Home Assistant Lovelace dashboard where Home Assistant provides the `hass` object.

### No family member markers appear on the map
Ensure you have `person.*` entities created in Home Assistant with linked `device_tracker.*` entities reporting valid GPS latitude and longitude.

### Edge markers are visible
Edge markers appear along the perimeter of the map whenever a member's real GPS position is outside your current map view. Tap the edge marker to center and fly directly to their location.

---

## 📄 License

MIT © [Yimly](https://github.com/yimlyapp)
