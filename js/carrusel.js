let slides = document.querySelectorAll('.carrusel .slide');
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if(i === index) slide.classList.add('active');
  });
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

// Mostrar primera imagen
showSlide(current);

// Cambiar cada 4 segundos
setInterval(nextSlide, 4000);
