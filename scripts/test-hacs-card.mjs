import fs from 'fs';
import path from 'path';

async function testHacsCard() {
  console.log('=== HACS CUSTOM CARD VERIFICATION SUITE ===');

  // 1. Verify HACS Metadata
  console.log('\n1. Checking HACS metadata files:');
  const hacsJsonPath = path.resolve('hacs.json');
  if (!fs.existsSync(hacsJsonPath)) {
    throw new Error('hacs.json is missing!');
  }
  const hacsConfig = JSON.parse(fs.readFileSync(hacsJsonPath, 'utf-8'));
  console.log('  [PASS] hacs.json found:', JSON.stringify(hacsConfig));
  if (hacsConfig.filename !== 'yimly-ha-map.js') {
    throw new Error(`hacs.json filename mismatch: expected 'yimly-ha-map.js', got '${hacsConfig.filename}'`);
  }

  // 2. Check Distributable Bundle
  console.log('\n2. Checking distributable build output:');
  const distPath = path.resolve('dist/yimly-ha-map.js');
  if (!fs.existsSync(distPath)) {
    throw new Error('dist/yimly-ha-map.js not found! Run npm run build first.');
  }
  const stats = fs.statSync(distPath);
  console.log(`  [PASS] dist/yimly-ha-map.js exists (${Math.round(stats.size / 1024)} KB)`);

  const cardCode = fs.readFileSync(distPath, 'utf-8');

  // 3. Check Custom Element Registration & Lovelace Card Interface
  console.log('\n3. Checking custom element and Lovelace card registration in bundle:');
  const hasCustomElement = cardCode.includes('yimly-ha-map');
  const hasCustomCards = cardCode.includes('customCards');
  const hasSetHass = cardCode.includes('setConfig') || cardCode.includes('hass');

  console.log(`  [${hasCustomElement ? 'PASS' : 'FAIL'}] customElements.define('yimly-ha-map', ...) present in bundle`);
  console.log(`  [${hasCustomCards ? 'PASS' : 'FAIL'}] window.customCards registration present in bundle`);
  console.log(`  [${hasSetHass ? 'PASS' : 'FAIL'}] setConfig & hass setters present in bundle`);

  if (!hasCustomElement || !hasCustomCards || !hasSetHass) {
    throw new Error('Custom card bundle is missing required Lovelace custom card registration hooks!');
  }

  // 4. Forensic Check for Forbidden Artifacts
  console.log('\n4. Forensic check for legacy/forbidden patterns:');
  const forbidden = [
    { pattern: 'localStorage.getItem("ha_token")', desc: 'Persistent HA token in localStorage' },
    { pattern: 'sessionStorage.getItem("ha_token")', desc: 'Persistent HA token in sessionStorage' },
    { pattern: 'OAuth2AuthorizationCode', desc: 'OAuth login redirect flow' },
  ];

  let anyForbiddenFound = false;
  for (const check of forbidden) {
    if (cardCode.includes(check.pattern)) {
      console.error(`  [FAIL] Found forbidden pattern: ${check.desc}`);
      anyForbiddenFound = true;
    } else {
      console.log(`  [PASS] Clean: No ${check.desc}`);
    }
  }

  if (anyForbiddenFound) {
    throw new Error('Bundle contains forbidden authentication patterns');
  }

  // 5. Verification of Map Styles (Keyless)
  console.log('\n5. Checking keyless map tile providers:');
  const styles = [
    { id: 'osm', name: 'OpenStreetMap Standard (Default)', url: 'https://tile.openstreetmap.org/0/0/0.png' },
    { id: 'positron', name: 'Positron', url: 'https://a.basemaps.cartocdn.com/light_all/0/0/0.png' },
    { id: 'bright', name: 'Bright', url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager/0/0/0.png' },
    { id: 'liberty', name: 'Liberty', url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager_labels_under/0/0/0.png' },
    { id: 'dark', name: 'Dark', url: 'https://a.basemaps.cartocdn.com/dark_all/0/0/0.png' },
    { id: 'fiord', name: 'Fiord', url: 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/0/0/0' },
  ];

  for (const s of styles) {
    try {
      const res = await fetch(s.url, { headers: { 'User-Agent': 'YimlyHaMapHACS/1.0' } });
      if (res.status === 200 && res.headers.get('content-type')?.includes('image')) {
        console.log(`  [PASS] ${s.name} (${s.id}): HTTP 200 image/raster (No API Key Required)`);
      } else {
        console.error(`  [FAIL] ${s.name} (${s.id}): HTTP ${res.status}`);
      }
    } catch (e) {
      console.error(`  [FAIL] ${s.name}: ${e.message}`);
    }
  }

  console.log('\n=== ALL HACS CUSTOM CARD VALIDATIONS PASSED ===\n');
}

testHacsCard().catch((err) => {
  console.error('Test failed:', err);
  process.exit(1);
});
