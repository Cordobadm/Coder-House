// //Declaracion de variables
// let entradaConocerFundadoras = "";
// let agregarProductosNew = "";
// let marcaIngresado;
// let rubroIngresado;
// let nombreIngresado;
// let precioIngresado;
// let buscarProd = "";
// let entradaBuscarProductos = "";


// //Declaracion de OBJETOS (PERSONA)
// const persona1 = new Persona("ALEXIA", "PONCE DE LEON", "FUNDADORA");
// const persona2 = new Persona("LUCIA", "PONCE DE LEON", "FUNDADORA");
// const persona3 = new Persona("ELIZABETH", "HERRERA", "FUNDADORA");

// //Declaracion array OBJETOS (productos,personas)
// const productos = [
//   (producto1 = new Producto("LACA", "MAKEUP", "BROCHA", 1000)),
//   (producto2 = new Producto("MAC", "MAKEUP", "LABIAL", 2111)),
//   (producto3 = new Producto("NATURA", "PEINADO", "FIJADOR", 2000)),
//   (producto4 = new Producto("FINE", "FITNES", "PROTEINA", 7500)),
//   (producto5 = new Producto("FINE", "FITNES", "COLAGENO", 8500)),
//   (producto6 = new Producto("GAMMA", "PEINADO", "SECADOR", 4000)),
// ];

// const personas = [persona1, persona2, persona3];

// //DECLARACION DE FUNCIONES

// function conocerFundadoras() {
//   entradaConocerFundadoras = prompt(
//     "¿Desea conocer a las Fundadoras de Magnolia? Si/No"
//   ).toUpperCase();
//   switch (entradaConocerFundadoras) {
//     case "SI":
//       alert("Conócenos ...");
//       personas.forEach((p) => {
//         alert(p.informacionCompleta());
//       });
//       break;

//     default:
//       break;
//   }
// }

// //FUNCION PARA PREGUNTAR AL USUARIO SI DESEA INGRESAR PRODUCTOS NUEVOS
// function preguntarIngresoProductos() {
//   agregarProductosNew = prompt(
//     "Desea ingresar productos nuevos? Si/No"
//   ).toUpperCase();
//   switch (agregarProductosNew) {
//     case "SI":
//       return agregarProductos();

//     default:
//       break;
//   }
// }


// function agregarProductos() {
//   do {
//     marcaIngresado = prompt("Ingrese la marca del prodcuto: ").toUpperCase();
//     rubroIngresado = prompt("Ingrese el rubro del prodcuto: ").toUpperCase();
//     nombreIngresado = prompt("Ingrese el nombre del prodcuto: ").toUpperCase();
//     precioIngresado = parseFloat(prompt("Ingrese el precio del prodcuto: "));

//     salir = prompt("Desea ingresar otro producto?Si/No").toUpperCase();
//     let prodcutoIngresado = new Producto(
//       marcaIngresado,
//       rubroIngresado,
//       nombreIngresado,
//       precioIngresado
//     );

//     productos.push(prodcutoIngresado);
//   } while (salir != "NO");
// }

// function listaProductos(productos) {
//   let listapProd = "";
//   for (const producto of productos) {
//     listapProd += `Rubro: ${producto.rubro}, Nombre: ${producto.nombre}, Precio: $${producto.precio}, Marca: ${producto.marca} \n `;
//   }
//   return listapProd;
// }

// //FUNCION FILTRAR PRODUCTOS
// function buscarProductos() {
//   buscarProd = prompt("¿Desea buscar productos por rubro? Si/No").toUpperCase();
//   switch (buscarProd) {
//     case "SI":
//       entradaBuscarProductos = prompt(
//         `Ingrese uno de los siguientes rubros (${mostrarRubros()}): `
//       ).toUpperCase();
//       alert(
//         `PRODUCTOS ENCONTRADOS (${entradaBuscarProductos}) \n ${listaProductos(
//           filtrarProductos(entradaBuscarProductos)
//         )}`
//       );
//     default:
//       break;
//   }

//   filtrarProductos(entradaBuscarProductos);
// }

// function filtrarProductos(rubro) {
//   return productos.filter((item) => item.rubro == rubro);
// }

// function listaPrecio(productos) {
//   let listaPrec = "";
//   for (const productoPrec of productos) {
//     listaPrec += `Precio: $${productoPrec.precio}, Nombre: ${productoPrec.nombre}, Marca: ${productoPrec.marca}\n`;
//   }
//   return listaPrec;
// }


// const ordenarPrecio = (prod1, prod2) => {
//   if (prod1.precio > prod2.precio) {
//     return 1;
//   } else if (prod1.precio < prod2.precio) {
//     return -1;
//   } else {
//     return 0;
//   }
// };

// //FUNCION EXPERIMENTAL
// function mostrarRubros() {
//   let mostrarRubro = "";
//   for (const mostrar of productos) {
//     mostrarRubro += `${mostrar.rubro} -`;
//   }
//   return mostrarRubro;
// }

// alert("MAGNOLIA SPA");

// //Informacion completa de las personas
// conocerFundadoras();

// //Agregar productos nuevos
// alert("PRODUCTOS NUEVOS");
// preguntarIngresoProductos();
// alert(`LISTADO DE PRODUCTOS \n ${listaProductos(productos)}`);

// //Pregunta si se quiere buscar por rubro y muestra los resultados
// buscarProductos();


// alert(
//   `Productos ordenados por $ (De MENOR A MAYOR) \n ${listaPrecio(
//     productos.sort(ordenarPrecio)
//   )}`
// );
