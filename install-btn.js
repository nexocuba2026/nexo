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
