const CACHE='mijn-ai-v1';const ASSETS=['/','/index.html','/style.css','/app.js','/avatar.jpg','/manifest.webmanifest','/icons/icon-192.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).pathname.startsWith('/api'))return;e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)))});
