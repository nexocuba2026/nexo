const CACHE_NAME = 'nexo-cache-v1';

const FILES_TO_CACHE = [
  '/nexo/',
  '/nexo/index.html',
  '/nexo/servicios.html',
  '/nexo/tienda.html',
  '/nexo/ofertas.html',
  '/nexo/quienes.html',
  '/nexo/contactos.html',
  '/nexo/css/estilos.css',
  '/nexo/manifest.json',
  '/nexo/imagenes/icon-192.png',
  '/nexo/imagenes/icon-512.png'
];

// INSTALACIÓN
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// ACTIVACIÓN
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

// FETCH
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
<script>
let deferredPrompt;
const btnInstall = document.getElementById('btnInstall');

// Detecta cuando la PWA puede ser instalada
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    btnInstall.style.display = 'block'; // muestra el botón
});

// Acción del botón
btnInstall.addEventListener('click', async () => {
    if (deferredPrompt) {
        deferredPrompt.prompt(); // Chrome / Edge mostrarán diálogo de instalación
        const choiceResult = await deferredPrompt.userChoice;
        console.log("Resultado instalación:", choiceResult.outcome);
        deferredPrompt = null;
        btnInstall.style.display = 'none';
    } else {
        // Para otros navegadores que no usan beforeinstallprompt
        alert("Tu navegador puede requerir instalar manualmente la app en la pantalla de inicio.");
    }
});
</script>
