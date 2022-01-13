class Producto {
  constructor(marca, rubro, nombre, precio) {
    this.marca = marca,
    this.rubro = rubro,
    this.nombre = nombre,
    this.precio = precio;
  }
}

const productos = [
  (producto1 = new Producto("LACA", "MAKEUP", "BROCHA", 1000)),
  (producto2 = new Producto("MAC", "MAKEUP", "LABIAL", 2111)),
  (producto3 = new Producto("NATURA", "PEINADO", "FIJADOR", 2000)),
  (producto4 = new Producto("FINE", "FITNES", "PROTEINA", 7500)),
  (producto5 = new Producto("FINE", "FITNES", "COLAGENO", 8500)),
  (producto6 = new Producto("GAMMA", "PEINADO", "SECADOR", 4000)),
];

function mensajeBienvenida() {
  const saludoBienvenida = document.createElement("h1");
  saludoBienvenida.innerHTML = `Bienvenid@ ${nombreIngresado} a: <p> 'MAGNOLIA SPA'`;
  document.body.appendChild(saludoBienvenida);
}

function productosDisponibes() {
  const textoProductos = document.createElement("h2");
  textoProductos.innerHTML = "Productos disponibles";
  document.body.appendChild(textoProductos);
}

function mensajeDespedida() {
  const saludoDespedida = document.createElement("h1");
  saludoDespedida.innerHTML = `Gracias ${nombreIngresado} por visitarnos. Te esperamos pronto`;
  document.body.appendChild(saludoDespedida);
}
let nombreIngresado = prompt("Ingrese su nombre: ").toUpperCase();

let entrada = prompt(
  "¿Desea ver los productos disponibles? Si/No"
).toUpperCase();

if (entrada === "SI") {
  mensajeBienvenida();
  productosDisponibes();

  for (const producto of productos) {
    let listaProductos = document.createElement("div");
    listaProductos.innerHTML += `Nombre: ${producto.nombre} - Marca: ${producto.marca} - Precio: $${producto.precio} - Rubro: ${producto.rubro} <hr> `;

    document.body.appendChild(listaProductos);
  }
} else {
  mensajeDespedida();
}
