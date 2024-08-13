self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("offline-first-todo").then((cache) => {
      return cache.addAll([
        "/",
        "/favicon.ico",
        "/manifest.json",
        "/static/js/bundle.js",
        "/static/js/main.chunk.js",
        "/static/js/0.chunk.js",
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
