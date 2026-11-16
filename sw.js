// Offline-Cache für GrünRaum Vor-Ort. Bei Änderungen VERSION erhöhen.
const VERSION='gr-v2';
const FILES=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png','lib/jszip.min.js',
 'vorlagen/Kurzgutachten_NEU.dotx','vorlagen/Kurzgutachten.dotx','vorlagen/EU_Extern.dotx','vorlagen/BBB_Protokoll_Extern.dotx','vorlagen/BBB_Protokoll.dotx',
 'vorlagen/BBB_Aufnahme_Massnahmeempfehlungen.docx','vorlagen/Gefahrenbaum.dotx','vorlagen/Tabelle_Baumerfassung.xltx','vorlagen/Tabelle_Eingriffe_Schutzmassnahmen.xltx'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;
  // Netz zuerst (für Updates), bei Offline aus dem Cache
  e.respondWith(fetch(e.request).then(r=>{if(r.ok){const c=r.clone();caches.open(VERSION).then(ca=>ca.put(e.request,c))}return r}).catch(()=>caches.match(e.request,{ignoreSearch:true}).then(r=>r||caches.match('index.html'))))});
