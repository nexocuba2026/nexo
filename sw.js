const CACHE_NAME = "nexo-cache-v1";

const urlsToCache = [
  "./",
  "./index.html",
  "./servicios.html",
  "./tienda.html",
  "./ofertas.html",
  "./quienes.html",
  "./contacto.html"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});