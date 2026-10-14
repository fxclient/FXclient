const cacheName = "buildTimestamp"; // this gets replaced by the build script
const isLocalDevelopment = ['localhost', '127.0.0.1', '[::1]'].includes(self.location.hostname);

self.addEventListener("install", (e) => {
  console.log("[Service Worker] Install", cacheName);
  if (isLocalDevelopment) e.waitUntil(self.skipWaiting());
});
self.addEventListener('message', function (e) {
  if (e.data.update) {
    self.skipWaiting();
  }
});

self.addEventListener("fetch", (e) => {
  // Local rebuilds must not leave the browser running a cached client bundle.
  if (isLocalDevelopment) return;
  const url = e.request.url;
  // Cache http and https only, skip unsupported chrome-extension:// and file://...
  if (!(url.startsWith('http:') || url.startsWith('https:'))) {
    return;
  }
  e.respondWith(
    (async () => {
      const cache = await caches.open(cacheName);
      const r = await cache.match(e.request);
      console.log(`[Service Worker] Fetching resource: ${url}`);
      if (r) {
        return r;
      }
      const response = await fetch(e.request);
      console.log(`[Service Worker] Caching new resource: ${url}`);
      cache.put(e.request, response.clone());
      return response;
    })(),
  );
  self.clients.matchAll().then(clients => {
    clients.forEach(client => client.postMessage({ event: "activate", version: cacheName }));
  });
});

self.addEventListener("activate", (e) => {
  console.log("[Service Worker] Activated", cacheName);
  if (isLocalDevelopment) e.waitUntil(self.clients.claim());
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key === cacheName) {
            return;
          }
          return caches.delete(key);
        }),
      );
    }),
  );
});
