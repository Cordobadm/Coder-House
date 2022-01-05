// -------------- BOOKLET -----------------
//EL EQUIPO
// Declarar un array de cadenas, compuesto por  los cuatro (4) nombres pertenecientes a los integrantes de un equipo. Luego recorrer el array, e informar por alerta el nombre de cada jugador, así como la posición  que ocupa en la colección.

// let equipo = [
//   { nombre: "Jorge", apellido: "Perez", posicion: 1 },
//   { nombre: "Juan", apellido: "Gonzalez", posicion: 2 },
//   { nombre: "Mabel", apellido: "Pdernera", posicion: 3 },
//   { nombre: "Lourdes", apellido: "Canto", posicion: 4 },
// ];

// for (const nombre of equipo) {
//   alert(`Nombre del integrante: ${nombre.nombre}, posición ${nombre.posicion}`);
// }

// const equipo = ['HOMERO', 'APU', 'MOE', 'MR. BURNS'];
// for (let index = 0; index < equipo.length; index++) {
//     alert("POSICION " + index + " JUGADOR " + equipo[index]);
// }

// ---------------------------- CARGA EL EQUIPO --------------------------------
// Declarar un array vacío, y cargarlo de forma dinámica solicitando al usuario nombres de forma consecutiva,  hasta que se ingrese “ESC”. Luego recorrer el array, e informar por alerta el nombre de cada jugador, así como la posición  que ocupa en la colección.

// let equipo = [];
// let entrada = prompt("Ingrese el nombre del jugador o 'ESC' para salir").toUpperCase();

// while (entrada != "ESC") {

//   equipo.push(entrada);
//   entrada = prompt("Ingrese el nombre del jugador o 'ESC' para salir").toUpperCase();
// }

// for (let i = 0; i < equipo.length; i++) {
//   alert(`Posicion: ${i}, Integrante: ${equipo[i]}`);
// }

// ----------------- JUGADORES -------------------------------------
// Declarar una clase Jugador que permita registrar nombre, número de camiseta, edad, y si está lesionado. Luego instanciar al menos cinco (5) objetos usando esta clase, y asociarlos a un array.

class Jugador {
  constructor(nombre, numeroCamiseta, edad, lesionado) {
    (this.nombre = nombre),
      (this.numeroCamiseta = numeroCamiseta),
      (this.edad = edad),
      (this.lesionado = lesionado);
  }
}

const jugadores = [];
jugadores.push(new Jugador("JUAN", 20, 18, true));
jugadores.push(new Jugador("JOSE", 00, 13, false));
jugadores.push(new Jugador("LUCIA", 09, 22, true));
jugadores.push(new Jugador("SOFIA", 21, 20, false));
jugadores.push(new Jugador("MARCOS", 22, 20, false));

// // console.log(equipo);

// // --------------------- BUSCAR JUGADORES ------------------
// // Codificar una función con la siguiente cabecera: buscarJugador(equipo, jugador). En ella, se recibe por parámetro un array de jugadores (objetos instanciados empleando la clase de la actividad 3), y el nombre de un jugador. La función retorna el jugador que coincide con el nombre.
// // Realizar al menos tres (3) búsquedas solicitando el nombre al usuario, e informar sobre el resultado de cada búsqueda.

// function buscarJugador(equipo,jugador) {
//     return equipo.find(objeto => objeto.nombre === jugador.toUpperCase());
// }

// for (let index = 0; index < 3; index++) {
//     let busqueda = buscarJugador(jugadores, prompt('INGRESAR NOMBRE DE JUGADOR'));
//     if(busqueda != undefined){
//         alert(` Jugador: ${busqueda.nombre} \n Camiseta: ${busqueda.numeroCamiseta}\n Edad: ${busqueda.edad}`);
//     }else{
//         alert('NO EXISTE JUGADOR CON ESE NOMBRE');
//     }
// }

// ---------------- FILTRAR JUGADORES -----------------
// Codificar una función con la siguiente cabecera: filtroJugadores(equipo, edad). En ella, se recibe un array de jugadores (objetos instanciados empleando la clase de la actividad 3), y una edad. La función retorna los jugadores cuya edad coincide con el segundo parámetro.
// Realizar al menos cinco (5) filtros solicitando la edad al usuario, e informar sobre el resultado de los jugadores filtrados.

function filtroJugadores(equipo, edad) {
  return equipo.filter((item) => item.edad == edad);
}
function listaJugadores(jugadores) {
  let lista = "";
  for (const jugador of jugadores) {
    lista += `Jugador: ${jugador.nombre}\n Numero de Camiseta: ${jugador.numeroCamiseta}\n Edad: ${jugador.edad} \n`;
  }
  return lista;
}
for (let index = 0; index < 5; index++) {
  let filtro = filtroJugadores(
    jugadores,
    parseInt(prompt("INGRESAR EDAD DEL JUGADOR"))
  );
  if (filtro.length > 0) {
    alert(listaJugadores(filtro));
  } else {
    alert("NO EXISTEN JUGADORES CON ESA EDAD");
  }
}
