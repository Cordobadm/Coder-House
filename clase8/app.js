class Producto {
  constructor(marca, rubro, nombre, precio) {
    (this.marca = marca),
      (this.rubro = rubro),
      (this.nombre = nombre),
      (this.precio = precio);
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

let nombreIngresado = prompt("Ingrese su nombre: ").toUpperCase()
const saludoBienvenida = document.createElement('h1')
saludoBienvenida.innerHTML = `Bienvenido/a ${nombreIngresado} a: <p> 'MAGNOLIA SPA'`
document.body.appendChild(saludoBienvenida)

const textoProductos = document.createElement('h2')
textoProductos.innerHTML = 'Productos disponibles'
document.body.appendChild(textoProductos)


for (const producto of productos) {
     
}