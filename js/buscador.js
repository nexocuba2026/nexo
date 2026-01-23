// ===============================
// DATOS PARA EL BUSCADOR
// ===============================
const datosBusqueda = [
  {
    texto: "Diseño y Construcción",
    url: "servicios.html"
  },
  {
    texto: "X",
    url: "servicios.html"
  },
  {
    texto: "Arquitectura moderna",
    url: "servicios.html"
  },{
    texto: "Restaurant",
    url: "servicios.html"
  },{
    texto: "comida mexiacana",
    url: "servicios.html"
  },{
    texto: "Transporte",
    url: "servicios.html"
  },
  {
    texto: "Carga y Pasajeros",
    url: "servicios.html"
  },
  {
    texto: "Pasajeros y Carga",
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
    texto: "Viajes",
    url: "servicios.html"
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
    texto: "Cemento Portland",
    url: "tienda.html"
  },
   {
    texto: "Ladrillo ",
    url: "tienda.html"
  },
   {
    texto: "Fogón",
    url: "tienda.html"
  },
   {
    texto: "Olla reina",
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
    texto: "Cocina",
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
    texto: "Nexo",
    url: "quienes.html"
  },
   {
    texto: "Electrodomésticos",
    url: "tienda.html"
  },
  {
    texto: "Contactos",
    url: "contactos.html"
  },
  {
    texto: "Diseño",
    url: "ofertas.html"
  },
{
    texto: "Diseño de logotipos",
    url: "ofertas.html"
  },
  {
    texto: "Logos",
    url: "ofertas.html"
  },
  {
    texto: "Diseño Tarjetas de Presentación",
    url: "ofertas.html"
  },
  {
    texto: "Diseño de Manuales de Identidad Visual",
    url: "ofertas.html"
  },
  {
    texto: "Diseño de Plegables Publicitarios",
    url: "ofertas.html"
  },
  {
    texto: "Diseño de Flyers Publicitarios",
    url: "ofertas.html"
  },
  {
    texto: "Diseño de Interiores",
    url: "ofertas.html"
  },
  {
    texto: "Plegables",
    url: "ofertas.html"
  },
  {
    texto: "Flyers",
    url: "ofertas.html"
  },
  {
    texto: "Manual de Identidad",
    url: "ofertas.html"
  },
  {
    texto: "Logos",
    url: "ofertas.html"
  },
  {
    texto: "Tarjetas",
    url: "ofertas.html"
  },
  {
    texto: "Ofertas",
    url: "ofertas.html"
  },
  {
    texto: "Diseño Gráfico",
    url: "ofertas.html"
  },
  {
    texto: "Publicidad",
    url: "ofertas.html"
  },
  {
    texto: "Marketing",
    url: "ofertas.html"
  },
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
