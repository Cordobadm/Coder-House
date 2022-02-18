
let card = document.getElementById("row");
let sidebar = document.querySelector(".sidebar");

const agregarCardAlHtml = () => {
  productos.map((element) => {
    card.innerHTML += `
          <div class= "cardProd col-md-3"> 
            <img src="${element.img}">
            <h4 class="card-title">${element.nombre}</h4>
            <h6>Marca: ${element.marca}</h6>
            <h6>Precio: $<span>${element.precio}</span></h6>
            <button id="btn-magnolia"class="btn" data-id="${element.id}">Agregar</button>
          </div>
        `;
  });

  let btnAddCarrito = document.querySelectorAll(".btn");

  //Eventos en el boton agregar
  btnAddCarrito.forEach((element) => {
    element.addEventListener("click", (event) => {
      enviarCardAlCarrito(event.target.parentElement);
    });
  });

  btnAddCarrito.forEach((element) => {
    element.addEventListener("click", () => {});
  });
};

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let carritoNavBar = document.getElementById("cantidadCarrito");
let carritoNuevo = document.getElementById("mostrarCarrito");

//enviamos la card del producto al carrito
const enviarCardAlCarrito = (datos) => {
  let productoAlCarrito = {
    imagen: datos.querySelector("img").src,
    nombre: datos.querySelector("h4").textContent,
    marca: datos.querySelector("h6").textContent,
    precioPorUnidad: Number(datos.querySelector("h6 span").textContent),
    precioTotal: Number(datos.querySelector("h6 span").textContent),
    cantidad: 1,
    id: datos.querySelector("button").getAttribute("data-id"),
  };
  
  let existeProductoEnCarrito = carrito.some(
    (element) => element.id === productoAlCarrito.id
  );

  if (existeProductoEnCarrito) {
    carrito = carrito.map((element) => {
      if (element.id === productoAlCarrito.id) {
        element.cantidad++;
        element.precioTotal = element.precioPorUnidad * element.cantidad;
        return element;
      } else {
        return element;
      }
    });
  } else {
    carrito.push(productoAlCarrito);
  }
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarEnCarritoNuevo();
};

const mostrarEnCarritoNuevo = () => {
  carritoNuevo.innerHTML = "";
  carrito.forEach((element) => {
    carritoNuevo.innerHTML += `
      <div class="col" id="productoAgregado">
        <img src="${element.imagen}" style="width: 12vh">
        <h6>${element.nombre}</h6>
        <p>Cantidad: ${element.cantidad}<p>
        <p>Precio: $${element.precioPorUnidad}</p>
        <p>Total: $${element.precioTotal}</p>
        <button class="btn-menos" data-id=${element.id}> Quitar </button>
        <button class="btn-borrar" data-id=${element.id}> Vaciar </button>
        
      </div>
      
      <p>
      <hr>
      `;
  });
  let divTotal = document.createElement("div");
  let miTotal = totalCarrito();
  divTotal.innerHTML = `<p id="totalCarritoText">TOTAL CARRITO: $${miTotal}</p>
  <button class="btn-comprar">Comprar</button>
  `;
  sidebar.appendChild(divTotal);
};

const restarProducto = (event) => {
  let idProducto = event.target.getAttribute("data-id");

  carrito = carrito.map((element) => {
    if (element.id == idProducto) {
      element.cantidad--;
      element.precioTotal = element.precioTotal - element.precioPorUnidad;

      if (element.cantidad === 0 && element.precioTotal === 0) {
        element.cantidad = 1;
        element.precioTotal = element.precioPorUnidad;
      }
      return element;
    } else {
      return element;
    }
  });

  localStorage.setItem("carrito", JSON.stringify(carrito));

  mostrarEnCarritoNuevo();
};

const vaciarCarrito = (event) => {
  let idProducto = event.target.getAttribute("data-id");
  carrito = carrito.filter((element) => element.id != idProducto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarEnCarritoNuevo();
};

//BOTONES BORRAR Y VACIAR
sidebar.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-menos")) {
    restarProducto(event);
  }
  if (event.target.classList.contains("btn-borrar")) {
    vaciarCarrito(event);
  }
});

const totalCarrito = () => {
  let total = carrito.reduce(
    (acumulador, iterador) => acumulador + iterador.precioTotal,
    0
  );

  return total;
};

agregarCardAlHtml();
mostrarEnCarritoNuevo();
