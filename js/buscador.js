// ===============================
// DATOS PARA EL BUSCADOR
// ===============================
const datosBusqueda = [
  {
    texto: "Diseño y Construcción",
    url: "servicios.html"
  },
  {
    texto: "Arquitectura",
    url: "servicios.html"
  },
  {
    texto: "Diseño de Logotipos",
    url: "ofertas.html"
  },
  {
    texto: "Tarjetas de Presentación",
    url: "ofertas.html"
  },
  {
    texto: "Agendas profesionales",
    url: "tienda.html"
  },
  {
    texto: "Materiales de oficina",
    url: "tienda.html"
  },
  {
    texto: "Constructora X",
    url: "servicios.html"
  },
  {
    texto: "Tienda AyB",
    url: "tienda.html"
  },
  {
    texto: "Ofertas Plus",
    url: "ofertas.html"
  },
  {
    texto: "Quiénes Somos",
    url: "quienes.html"
  },
  {
    texto: "Contactos",
    url: "contactos.html"
  }
];

// ===============================
// ELEMENTOS DEL DOM
// ===============================
const inputBuscador = document.getElementById("buscador");
const listaSugerencias = document.getElementById("sugerencias");
const botonBuscar = document.getElementById("btnBuscar");

// ===============================
// MOSTRAR SUGERENCIAS
// ===============================
inputBuscador.addEventListener("input", () => {
  const valor = inputBuscador.value.toLowerCase();
  listaSugerencias.innerHTML = "";

  if (valor.length === 0) {
    listaSugerencias.style.display = "none";
    return;
  }

  const resultados = datosBusqueda.filter(item =>
    item.texto.toLowerCase().includes(valor)
  );

  if (resultados.length === 0) {
    listaSugerencias.style.display = "none";
    return;
  }

  resultados.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.texto;
    li.addEventListener("click", () => {
      window.location.href = item.url;
    });
    listaSugerencias.appendChild(li);
  });

  listaSugerencias.style.display = "block";
});

// ===============================
// BOTÓN BUSCAR
// ===============================
botonBuscar.addEventListener("click", () => {
  const valor = inputBuscador.value.toLowerCase();

  const resultado = datosBusqueda.find(item =>
    item.texto.toLowerCase().includes(valor)
  );

  if (resultado) {
    window.location.href = resultado.url;
  }
});

// ===============================
// OCULTAR SUGERENCIAS AL HACER CLICK FUERA
// ===============================
document.addEventListener("click", (e) => {
  if (!e.target.closest(".buscador-container")) {
    listaSugerencias.style.display = "none";
  }
});
