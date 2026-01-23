// LISTA DE CONTENIDOS BUSCABLES
const contenidos = [
  { nombre: "Construcción", url: "servicios.html" },
  { nombre: "Diseño y construcción", url: "servicios.html" },
  { nombre: "Transporte de carga y personal", url: "servicios.html" },
  { nombre: "Publicidad Digital", url: "servicios.html" },
{ nombre: "Arquitectura Moderna", url: "servicios.html" },
{ nombre: "Servicios Gastronómicos", url: "servicios.html" },
{ nombre: "Comida Mexicana", url: "servicios.html" },
{ nombre: "Restaurante Come 2", url: "servicios.html" },
 { nombre: "Transporte Fast", url: "servicios.html" }, 
{ nombre: "Fast", url: "servicios.html" },
{ nombre: "Come 2", url: "servicios.html" },
  { nombre: "X", url: "servicios.html" },

  { nombre: "Tienda A y B", url: "tienda.html" },
  { nombre: "Cemento Portland", url: "tienda.html" },
  { nombre: "Ladrillo rojo", url: "tienda.html" },
{ nombre: "Olla", url: "tienda.html" },
{ nombre: "Fogón Infrarrojo", url: "tienda.html" },
{ nombre: "Productos", url: "tienda.html" },
  { nombre: "Tiendas Disponibles", url: "tienda.html" },
{ nombre: "Materiales de Construcción", url: "tienda.html" },
  { nombre: "Tienda M", url: "tienda.html" },
  { nombre: "Equipos electrodómesticos", url: "tienda.html" },

  
  
  { nombre: "Ofertas Plus", url: "ofertas.html" },
  { nombre: "Logotipos", url: "ofertas.html" },
  { nombre: "Tarjetas de Presentación", url: "ofertas.html" },
  { nombre: "Manual de Identidad", url: "ofertas.html" },
  { nombre: "Flayers", url: "ofertas.html" },
  { nombre: "Diseño de Interiores", url: "ofertas.html" },
  { nombre: "Diseño Gráfico", url: "ofertas.html" },
  { nombre: "Souvenirs", url: "ofertas.html" },
  

  { nombre: "Quiénes Somos", url: "quienes.html" },
    { nombre: "Nexo", url: "quienes.html" },
  { nombre: "Contactos", url: "contactos.html" }
   { nombre: "whatsapp", url: "contactos.html" }
 { nombre: "Correo", url: "contactos.html" }
 { nombre: "Instagram", url: "contactos.html" }
 { nombre: "Facebook", url: "contactos.html" }
 { nombre: "Youtube", url: "contactos.html" }
 { nombre: "Redes Sociales", url: "contactos.html" }
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
