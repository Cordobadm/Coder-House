const productos = [
  { marca: "Laca", rubro: "Make-Up", nombre: "Brocha", precio: 1000 },
  { marca: "Mac", rubro: "Make-Up", nombre: "Labial", precio: 3700 },
  { marca: "Natura", rubro: "Peinado", nombre: "Fijador", precio: 2000 },
  { marca: "Fine", rubro: "Fitnes", nombre: "Proteina", precio: 7500 },
];

alert("Buscar producto por rubro");

let entrada = prompt(
  "Ingrese uno de los siguientes rubros (Make-Up)-(Peiando)-(Fitnes): "
);

entrada = productos.filter(function (item) {
  return item.rubro.includes(entrada);
});
console.log(entrada)

alert("Buscar productos por precio");

let entrada1 = prompt("Ingrese el precio: $ ");

entrada1 = productos.filter(function (item) {
  return item.precio <= entrada1;
});
console.log(entrada1)

