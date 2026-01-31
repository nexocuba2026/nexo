// ====== BUSCADOR GLOBAL NEXO ======

// Contenedor de todos los ítems de búsqueda
const indexBusqueda = [
  // ===== Tienda =====
  {
    titulo: "Cemento Portland",
    descripcion: "Cemento de alta resistencia para obras civiles y residenciales.",
    pagina: "tienda.html",
    tipo: "producto"
  },
  {
    titulo: "Ladrillo Rojo",
    descripcion: "Ladrillo resistente ideal para construcción de viviendas y muros.",
    pagina: "tienda.html",
    tipo: "producto"
  },
  {
    titulo: "Fogón Infrarrojo",
    descripcion: "Fogones infrarrojos con tecnología de punta, son económicos y fáciles de usar.",
    pagina: "tienda.html",
    tipo: "producto"
  },
  {
    titulo: "Olla Reina",
    descripcion: "Rápida cocción de alimentos y seguridad al cocinar.",
    pagina: "tienda.html",
    tipo: "producto"
  },

  // ===== Servicios =====
  {
    titulo: "Diseño y construcción de obras de Arquitectura Moderna",
    descripcion: "Empresa Constructora X — Construcción de viviendas, edificios multifamiliares y locales multifuncionales.",
    pagina: "servicios.html",
    tipo: "servicio"
  },
  {
    titulo: "Comida Mexicana",
    descripcion: "Restaurante Come 2 — Comida mexicana para disfrutar en familia, amplia variedad de platos y servicio a la carta.",
    pagina: "servicios.html",
    tipo: "servicio"
  },
  {
    titulo: "Transporte de Cargas y Pasajeros",
    descripcion: "Transporte Fast — Servicios interprovinciales y locales. Transportación rápida y segura, confort y confianza garantizados.",
    pagina: "servicios.html",
    tipo: "servicio"
  },

  // ===== Ofertas =====
  {
    titulo: "Diseño de Logotipos",
    descripcion: "Identidad visual profesional alineada con la esencia y objetivos de tu marca.",
    pagina: "ofertas.html",
    tipo: "oferta"
  },
  {
    titulo: "Tarjetas de Presentación",
    descripcion: "Diseño elegante y funcional que refuerza tu imagen corporativa.",
    pagina: "ofertas.html",
    tipo: "oferta"
  },
  {
    titulo: "Manual de Identidad",
    descripcion: "Lineamientos visuales claros para el uso coherente de tu marca.",
    pagina: "ofertas.html",
    tipo: "oferta"
  },
  {
    titulo: "Flyers Publicitarios",
    descripcion: "Material gráfico atractivo para campañas promocionales efectivas.",
    pagina: "ofertas.html",
    tipo: "oferta"
  },
  {
    titulo: "Plegables",
    descripcion: "Comunicación visual clara para presentar servicios y productos.",
    pagina: "ofertas.html",
    tipo: "oferta"
  },
  {
    titulo: "Diseño de Interiores",
    descripcion: "Soluciones espaciales que optimizan funcionalidad, estética y experiencia.",
    pagina: "ofertas.html",
    tipo: "oferta"
  },

  // ===== Quiénes Somos =====
  {
    titulo: "Nuestra Misión",
    descripcion: "Ayudar a los negocios cubanos a destacarse, aumentar su alcance, fortalecer su imagen y convertir la publicidad en resultados reales.",
    pagina: "quienes.html",
    tipo: "informacion"
  },
  {
    titulo: "Nuestra Visión",
    descripcion: "Ser el aliado estratégico preferido de los negocios en Cuba, ofreciendo soluciones digitales y comerciales que permitan crecer de manera profesional y efectiva.",
    pagina: "quienes.html",
    tipo: "informacion"
  },

  // ===== Contactos =====
  {
    titulo: "WhatsApp",
    descripcion: "Escríbenos directamente por WhatsApp para cualquier consulta.",
    pagina: "contactos.html",
    tipo: "contacto"
  },
  {
    titulo: "Correo",
    descripcion: "Envíanos un email con tus dudas, solicitudes o propuestas.",
    pagina: "contactos.html",
    tipo: "contacto"
  },
  {
    titulo: "Instagram",
    descripcion: "Síguenos y conoce nuestras novedades en redes sociales.",
    pagina: "contactos.html",
    tipo: "contacto"
  },
  {
    titulo: "Facebook",
    descripcion: "Mantente informado con nuestras actualizaciones en Facebook.",
    pagina: "contactos.html",
    tipo: "contacto"
  },
  {
    titulo: "YouTube",
    descripcion: "Mira nuestros tutoriales, presentaciones y más en nuestro canal.",
    pagina: "contactos.html",
    tipo: "contacto"
  }
];

// ===== Función para mostrar resultados =====
function buscarItems(query) {
  const resultados = indexBusqueda.filter(item => 
    item.titulo.toLowerCase().includes(query.toLowerCase()) ||
    item.descripcion.toLowerCase().includes(query.toLowerCase())
  );
  return resultados;
}

// ===== Mostrar resultados en HTML =====
function mostrarResultados(resultados, contenedor) {
  contenedor.innerHTML = ""; // limpiar
  if(resultados.length === 0){
    contenedor.innerHTML = `<p class="no-result">No se encontraron resultados.</p>`;
    return;
  }

  resultados.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("resultado-item");
    div.innerHTML = `
      <h4>${item.titulo} <span class="tipo">[${item.tipo}]</span></h4>
      <p>${item.descripcion}</p>
      <a href="${item.pagina}" class="btn">Ir a página</a>
    `;
    contenedor.appendChild(div);
  });
}

// ===== Evento de input =====
document.addEventListener("DOMContentLoaded", () => {
  const inputBuscador = document.getElementById("input-buscador");
  const contenedorResultados = document.getElementById("resultados-busqueda");

  if(inputBuscador){
    inputBuscador.addEventListener("input", () => {
      const query = inputBuscador.value.trim();
      const resultados = buscarItems(query);
      mostrarResultados(resultados, contenedorResultados);
    });
  }
});