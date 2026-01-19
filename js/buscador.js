// LISTA DE CONTENIDOS BUSCABLES
const contenidos = [
  { nombre: "Servicios de Marketing", url: "servicios.html" },
  { nombre: "Diseño Gráfico", url: "servicios.html" },
  { nombre: "Diseño de Interiores", url: "servicios.html" },
  { nombre: "Publicidad Digital", url: "servicios.html" },

  { nombre: "Tienda X", url: "tienda.html" },
  { nombre: "Producto A", url: "tienda.html" },
  { nombre: "Producto B", url: "tienda.html" },

  { nombre: "Ofertas Plus", url: "ofertas.html" },
  { nombre: "Logotipos", url: "ofertas.html" },
  { nombre: "Tarjetas de Presentación", url: "ofertas.html" },
  { nombre: "Manual de Identidad", url: "ofertas.html" },

  { nombre: "Quiénes Somos", url: "quienes.html" },
  { nombre: "Contactos", url: "contactos.html" }
];

const input = document.getElementById("buscador");
const lista = document.getElementById("sugerencias");
const botonBuscar = document.getElementById("btnBuscar");

// TEXTO PREDICTIVO
input.addEventListener("input", () => {
  const texto = input.value.toLowerCase();
  lista.innerHTML = "";

  if (texto === "") return;

  const resultados = contenidos.filter(item =>
    item.nombre.toLowerCase().includes(texto)
  );

  resultados.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.nombre;
    li.onclick = () => {
      window.location.href = item.url;
    };
    lista.appendChild(li);
  });
});

// BOTÓN BUSCAR
botonBuscar.addEventListener("click", () => {
  const texto = input.value.toLowerCase();
  const resultado = contenidos.find(item =>
    item.nombre.toLowerCase().includes(texto)
  );

  if (resultado) {
    window.location.href = resultado.url;
  }
});
