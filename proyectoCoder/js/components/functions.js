//Inyectar la card al html
let card = document.getElementById("row");

const agregarCardAlHtml = () => {
  productos.map((element) => {
    card.innerHTML += `
          <div id="cardProd" class=" col-md-3"> 
            <img src="${element.img}">
            <h4 class="card-title">${element.nombre}</h4>
            <p class="card-text">Marca: ${element.marca}</p>
            <h5>Precio: <span>$${element.precio}</span></h5>
            <button id="btn-magnolia"class="btn-agregar" data-id="${element.id}">Agregar</button>
          </div>
        `;
  });

  let btnAddCarrito = document.querySelectorAll(".btn-agregar");

  //Eventos en el boton agregar
  btnAddCarrito.forEach((element) => {
    element.addEventListener("click", (event) => {
      enviarCardAlCarrito(event.target.parentElement);
    });
  });

  btnAddCarrito.forEach((element) => {
    element.addEventListener("click", (event) => {
      alert("Producto Agregado Correctamente");
    });
  });
};

let carrito = [];
let carritoNavBar = document.getElementById("cantidadCarrito");
let carritoNuevo = document.getElementById("mostrarCarrito");

//enviamos la card del producto al carrito
const enviarCardAlCarrito = (datosProd) => {
  let productoAlCarrito = {
    imagen: datosProd.querySelector("img").src,
    nombre: datosProd.querySelector("h4").textContent,
    marca: datosProd.querySelector("p").textContent,
    precio: datosProd.querySelector("h5 span").textContent,
    precioTotal: datosProd.querySelector("h5 span").textContent,
    cantidad: 1,
    id: datosProd.querySelector("button").getAttribute("data-id"),
  };

  let existeProductoEnCarrito = carrito.some(
    (element) => element.id === productoAlCarrito.id
  );

  if (existeProductoEnCarrito) {
    carrito = carrito.map((element) => {
      if (element.id === productoAlCarrito.id) {
        element.cantidad++;
        return element;
      } else {
        return element;
      }
    });
  } else {
    carrito.push(productoAlCarrito);
  }

  mostrarEnCarritoNuevo();
};

const mostrarEnCarritoNuevo = () => {
  carritoNuevo.innerHTML = "";
  carrito.forEach((element) => {
    carritoNuevo.innerHTML += `
      <div class="col" id="productoAgregado">
        <img src="${element.imagen}" style="width: 10%">
        <h3>${element.nombre}</h3>
        <h5>Cantidad: ${element.cantidad}<h5>
        <h5>${element.precio}</h5>
      </div>
      <p>
      `;
  });
};


