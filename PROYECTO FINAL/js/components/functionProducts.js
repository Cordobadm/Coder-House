let card = document.getElementById("row");
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let carritoNuevo = document.getElementById("modalCarrito");

const agregarProductosAlhtml = () => {
  const URLGET = "../js/costants/productos.json";

  $.getJSON(URLGET, (data) => {
    data.map((element) => {
      card.innerHTML += `
            <div id="cardProd" class= "${element.rubro} col-md-3"> 
              <img src="${element.img}">
              <h4 class="card-title">${element.nombre}</h4>
              <h6>Rubro: ${element.rubro}</h6>
              <h6>Marca: ${element.marca}</h6>
              <h6>Precio: $<span>${element.precio}</span></h6>
              <button class="btn btn-magnolia" data-id="${element.id}" data-toggle="modal">Agregar</button>
            </div>
          `;
    });

    let btnAddCarrito = document.querySelectorAll(".btn");

    //Eventos en el boton agregar
    btnAddCarrito.forEach((element) => {
      element.addEventListener("click", (event) => {
        enviarCardAlCarrito(event.target.parentElement);
        productoAgregado();
        
      });
    });

    localStorage.setItem("carrito", JSON.stringify(carrito));
  });
};

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



//-------------Pop UP-------------------
const modal = document.getElementById("modalPopUp");
const span = document.getElementsByClassName("close")[0];

const productoAgregado = () => {
  $(modal).show();
};

span.onclick = function () {
  $(modal).hide();
};

window.onclick = function (event) {
  if (event.target == modal) {
    $(modal).hide();
  }
};
agregarProductosAlhtml();
