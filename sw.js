// Nombre de la cache
const CACHE_NAME = 'nexo-cache-v1';

// Archivos que queremos cachear
const urlsToCache = [
  '/',
  '/index.html',
  '/servicios.html',
  '/tienda.html',
  '/ofertas.html',
  '/quienes.html',
  '/contactos.html',
  '/css/estilos.css',
  '/js/main.js',  // Si tienes JS aparte
  '/imagenes/logo-nexo.png',
  '/imagenes/icon-192.png',
  '/imagenes/icon-512.png'
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
