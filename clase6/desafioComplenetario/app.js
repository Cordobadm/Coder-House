//Declaracion de array

const productos = [
  { marca: "Laca", rubro: "Make-Up", nombre: "Brocha", precio: 1000 },
  { marca: "Mac", rubro: "Make-Up", nombre: "Labial", precio: 3700 },
  { marca: "Natura", rubro: "Peinado", nombre: "Fijador", precio: 2000 },
  { marca: "Fine", rubro: "Fitnes", nombre: "Proteina", precio: 7500 },
  { marca: "Fine", rubro: "Fitnes", nombre: "Colageno", precio: 8500 },
  { marca: "Gamma", rubro: "Peinado", nombre: "Secador", precio: 4000 },
];


//FUncion para ordenar el precio de menor a mayor
const ordenar = (prod1, prod2) => {
  if (prod1.precio > prod2.precio) {
    return 1;
  } else if (prod1.precio < prod2.precio) {
    return -1;
  } else {
    return 0;
  }
};

//propiedad + funcion
productos.sort(ordenar);


//Muestra en orden los productos de < a >
console.log(productos);
