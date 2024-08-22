self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("my-cache-name").then((cache) =>
      cache.addAll([
        "/static/css/styles.css",
        "/static/js/main.js",
        "/", // Cache the homepage
      ])
    )
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  event.respondWith(
    caches.match(request).then((response) => {
      if (response) {
        return response;
      }

      return fetch(request)
        .then((networkResponse) => {
          if (networkResponse.status === 200) {
            caches
              .open("my-cache-name")
              .then((cache) => cache.put(request, networkResponse.clone()));
          }
          return networkResponse;
        })
        .catch((error) => {
          // Handle network errors
          return caches.match("/offline-fallback.html");
        });
    })
  );
});
