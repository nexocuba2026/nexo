const CACHE_NAME = 'nexo-cache-v2';

const FILES_TO_CACHE = [
  '/nexo/?v=2',
  '/nexo/index.html?v=2',
  '/nexo/servicios.html?v=2',
  '/nexo/tienda.html?v=2',
  '/nexo/ofertas.html?v=2',
  '/nexo/quienes.html?v=2',
  '/nexo/contactos.html?v=2',
  '/nexo/css/estilos.css?v=2',
  '/nexo/manifest.json?v=2',
  '/nexo/imagenes/icon-192.png?v=2',
  '/nexo/imagenes/icon-512.png?v=2'
];

// ==========================
// INSTALACIÓN
// ==========================
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// ==========================
// ACTIVACIÓN
// ==========================
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

// ==========================
// FETCH
// ==========================
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
