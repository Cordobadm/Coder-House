// // Pedir al usuario que ingrese un producto, con su valor, y guardar el producto con su valor y su valor con el iva agregado
// while (true) {
//   const nombreProducto = prompt("Ingrese nombre del producto o ESC para salir");

//   if (nombreProducto === "ESC") {
//     break;
//   }
//   const valorProdcuto = parseFloat(prompt("Ingrese el valor del producto: "));

//   localStorage.setItem(nombreProducto + ".nombre", nombreProducto);
//   localStorage.setItem(nombreProducto + ".valor", valorProdcuto);
//   localStorage.setItem(nombreProducto + ".valorVenta", valorProdcuto * 1.21);
// }

const productos = [
  { id: 1, producto: "Arroz", precio: 125 },
  { id: 2, producto: "Fideo", precio: 70 },
  { id: 3, producto: "Pan", precio: 50 },
  { id: 4, producto: "Flan", precio: 100 },
];

const guardarLocal = (clave, valor) => {
  localStorage.setItem(clave, valor);
};

//Almacenar producto por producto
for (const producto of productos) {
  guardarLocal(producto.id, JSON.stringify(producto));
}
// o almacenar array completo
guardarLocal("listaProductos", JSON.stringify(productos));

class Producto {
  constructor(obj) {
    this.nombre = obj.producto.toUpperCase();
    this.precio = parseFloat(obj.precio);
  }
  sumaIva() {
    this.precio = this.precio * 1.21;
  }
}
//Obtenemos el listado de productos almacenado
const almacenados = JSON.parse(localStorage.getItem("listaProductos"));
const productosArray = [];
//Iteramos almacenados con for...of para transformar todos sus objetos a tipo producto.
for (const objeto of almacenados) {
  productos.push(new Producto(objeto));
}
//Ahora tenemos objetos productos y podemos usar sus métodos
for (const producto of productos) {
  producto.sumaIva();
}

console.log(almacenados)