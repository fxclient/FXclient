const cacheName = "1742966120636"; // this gets replaced by the build script

self.addEventListener("install", (e) => {
  console.log("[Service Worker] Install");
  self.skipWaiting();
});

self.addEventListener("fetch", (e) => {
  const url = e.request.url;
  // Cache http and https only, skip unsupported chrome-extension:// and file://...
  if (!(url.startsWith('http:') || url.startsWith('https:'))) {
    return;
  }
  e.respondWith(
    (async () => {
      const r = await caches.match(e.request);
      console.log(`[Service Worker] Fetching resource: ${url}`);
      if (r) {
        return r;
      }
      const response = await fetch(e.request);
      const cache = await caches.open(cacheName);
      console.log(`[Service Worker] Caching new resource: ${url}`);
      cache.put(e.request, response.clone());
      return response;
    })(),
  );
});

self.addEventListener("activate", (e) => {
  console.log("[Service Worker] Activated", cacheName);
  self.clients.matchAll().then(clients => {
    clients.forEach(client => client.postMessage({ event: "activate", version: cacheName }));
  });
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
