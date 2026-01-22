// Nombre de la cache
const CACHE_NAME = 'nexo-cache-v1';

// Archivos que queremos cachear
const urlsToCache = [
  '/nexo/',
  '/nexo/index.html',
  '/nexo/servicios.html',
  '/nexo/tienda.html',
  '/nexo/ofertas.html',
  '/nexo/quienes.html',
  '/nexo/contactos.html',
  '/nexo/css/estilos.css',
  '/nexo/js/main.js', // si tienes JS aparte
  '/nexo/imagenes/logo-nexo.png',
  '/nexo/imagenes/icon-192.png',
  '/nexo/imagenes/icon-512.png'
  // Agrega aquí otras imágenes o archivos necesarios
];

// Instalación del service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache abierto');
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting(); // Forzar que este SW se active inmediatamente
});

// Activación del service worker y limpieza de cache antigua
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('Borrando cache antigua', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim(); // Tomar control inmediato de las pestañas abiertas
});

// Interceptar peticiones y responder desde cache o red
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Devuelve del cache si existe, si no va a la red
        return response || fetch(event.request);
      })
  );
});
