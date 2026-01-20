const CACHE_NAME = "nexo-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/css/estilos.css",
  "/js/script.js",
  "/imagenes/logo-nexo.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
