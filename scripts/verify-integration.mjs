import { WebSocket } from 'ws';

async function verifyMapTiles() {
  console.log('=== 1. VERIFYING MAP TILES (NO API KEY REQUIRED) ===');
  const styles = [
    { id: 'osm', name: 'OSM Standard (Default)', url: 'https://tile.openstreetmap.org/0/0/0.png' },
    { id: 'positron', name: 'Positron', url: 'https://a.basemaps.cartocdn.com/light_all/0/0/0.png' },
    { id: 'bright', name: 'Bright', url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager/0/0/0.png' },
    { id: 'liberty', name: 'Liberty', url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager_labels_under/0/0/0.png' },
    { id: 'dark', name: 'Dark', url: 'https://a.basemaps.cartocdn.com/dark_all/0/0/0.png' },
    { id: 'fiord', name: 'Fiord', url: 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/0/0/0' },
  ];

  let allTilesOk = true;
  for (const s of styles) {
    try {
      const res = await fetch(s.url, { headers: { 'User-Agent': 'YimlyHaMap/1.0' } });
      const contentType = res.headers.get('content-type') || '';
      const isImage = contentType.startsWith('image/');
      if (res.status === 200 && isImage) {
        console.log(`  [PASS] ${s.name} (${s.id}): HTTP 200, Content-Type: ${contentType}`);
      } else {
        console.error(`  [FAIL] ${s.name} (${s.id}): HTTP ${res.status}, Content-Type: ${contentType}`);
        allTilesOk = false;
      }
    } catch (e) {
      console.error(`  [FAIL] ${s.name} (${s.id}): Error ${e.message}`);
      allTilesOk = false;
    }
  }

  return allTilesOk;
}

async function verifyHaConnection() {
  console.log('\n=== 2. VERIFYING HOME ASSISTANT CONNECTION ===');
  const haUrl = process.env.HA_URL || 'https://home.robinhort.link';
  const token = (process.env.HA_TOKEN || process.env.HOME_ASSISTANT_TOKEN || '').trim();

  // Test public reachability
  try {
    const res = await fetch(`${haUrl}/manifest.json`);
    console.log(`  [INFO] Home Assistant reachable: ${haUrl} (HTTP ${res.status})`);
  } catch (e) {
    console.error(`  [FAIL] Home Assistant unreachable: ${e.message}`);
    return false;
  }

  const wsUrl = haUrl.replace(/^http/, 'ws') + '/api/websocket';

  if (!token) {
    console.log('  [NOTICE] HA_TOKEN not set in environment during this test run.');
    console.log('  Testing unauthenticated WebSocket handshake...');
    return new Promise((resolve) => {
      const ws = new WebSocket(wsUrl);
      ws.on('open', () => {
        console.log('  [PASS] WebSocket connection opened to HA Core.');
      });
      ws.on('message', (data) => {
        const msg = JSON.parse(data.toString());
        if (msg.type === 'auth_required') {
          console.log(`  [PASS] WebSocket correctly returned auth_required (HA version: ${msg.ha_version})`);
          ws.close();
          resolve(true);
        }
      });
      ws.on('error', (err) => {
        console.error('  [FAIL] WebSocket error:', err.message);
        resolve(false);
      });
    });
  }

  console.log('  [INFO] HA_TOKEN detected. Testing authenticated WebSocket connection...');
  return new Promise((resolve) => {
    const ws = new WebSocket(wsUrl);
    let msgId = 1;

    ws.on('open', () => {
      console.log('  [PASS] WebSocket opened.');
    });

    ws.on('message', (data) => {
      const msg = JSON.parse(data.toString());

      if (msg.type === 'auth_required') {
        console.log(`  [INFO] Sending auth token to HA Core ${msg.ha_version}...`);
        ws.send(JSON.stringify({ type: 'auth', access_token: token }));
      } else if (msg.type === 'auth_ok') {
        console.log(`  [PASS] Authenticated successfully with HA (ha_version: ${msg.ha_version})`);

        // Fetch user
        const userReqId = msgId++;
        ws.send(JSON.stringify({ id: userReqId, type: 'auth/current_user' }));
      } else if (msg.type === 'auth_invalid') {
        console.error('  [FAIL] Authentication rejected: invalid token');
        ws.close();
        resolve(false);
      } else if (msg.type === 'result') {
        if (msg.result && typeof msg.result === 'object') {
          if ('id' in msg.result && 'name' in msg.result) {
            console.log(`  [PASS] Authenticated User: "${msg.result.name}" (ID: ${msg.result.id})`);
            // Fetch states
            const statesReqId = msgId++;
            ws.send(JSON.stringify({ id: statesReqId, type: 'get_states' }));
          } else if (Array.isArray(msg.result)) {
            const states = msg.result;
            const persons = states.filter((s) => s.entity_id.startsWith('person.'));
            const trackers = states.filter((s) => s.entity_id.startsWith('device_tracker.'));

            console.log(`  [PASS] States loaded: ${states.length} total entities`);
            console.log(`  [PASS] Discovered ${persons.length} person entities:`);
            persons.forEach((p) => {
              console.log(`    - ${p.entity_id} (${p.attributes.friendly_name}): lat=${p.attributes.latitude}, lon=${p.attributes.longitude}, state=${p.state}`);
            });

            console.log(`  [PASS] Discovered ${trackers.length} device tracker entities:`);
            trackers.forEach((t) => {
              console.log(`    - ${t.entity_id} (${t.attributes.friendly_name}): lat=${t.attributes.latitude}, lon=${t.attributes.longitude}, source=${t.attributes.source_type}`);
            });

            // Subscribe to state_changed
            const subReqId = msgId++;
            ws.send(JSON.stringify({ id: subReqId, type: 'subscribe_events', event_type: 'state_changed' }));
            console.log('  [PASS] Subscribed to live state_changed updates.');

            setTimeout(() => {
              ws.close();
              resolve(true);
            }, 1000);
          }
        }
      }
    });

    ws.on('error', (err) => {
      console.error('  [FAIL] WebSocket error:', err.message);
      resolve(false);
    });
  });
}

async function run() {
  const tilesOk = await verifyMapTiles();
  const haOk = await verifyHaConnection();

  console.log('\n=== VERIFICATION SUMMARY ===');
  console.log(`Map Tiles (Keyless OSM default): ${tilesOk ? 'PASSED' : 'FAILED'}`);
  console.log(`Home Assistant Handshake: ${haOk ? 'PASSED' : 'FAILED'}`);

  if (tilesOk && haOk) {
    console.log('\nALL VERIFICATIONS PASSED.');
    process.exit(0);
  } else {
    console.error('\nSOME CHECKS FAILED.');
    process.exit(1);
  }
}

run();
