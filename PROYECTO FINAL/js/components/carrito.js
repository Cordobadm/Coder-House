let sidebar = document.querySelector(".modal");
let clickCarritos = document.querySelector("#shoppingCart");

//MOSTRAR CARRITO
const clickCarrito = () => {
  clickCarritos.addEventListener("click", () => {
    $(sidebar).show();
  });
};

//MOSTRAMOS EL PRODUCTO EN EL CARRITO
const mostrarEnCarritoNuevo = () => {
  carritoNuevo.innerHTML = "";
  carrito.forEach((element) => {
    carritoNuevo.innerHTML += `
        <div id="productoAgregado">
        <div class="col">
          <img src="${element.imagen}" style="width: 19vh">
        </div>
        <div class="col">
          <h6>${element.nombre}</h6>
          <p>Cantidad: ${element.cantidad}<p>
          <p>Precio: $${element.precioPorUnidad}</p>
          <p>Total: $${element.precioTotal}</p>
          <div>
          <button class="btn-menos" data-id=${element.id}> Quitar </button>
          <button class="btn-vaciar" data-id=${element.id}> Vaciar </button>
          <hr>
          </div>
          </div>
        </div>
    `;
  });

  //BOTON CERRAR MODAL
  let botonCerrarModal = document.createElement("div");
  botonCerrarModal.innerHTML = `<div class="modal-close">
    <a href="#"> Carrito de Compras
      <img src="../img/cerrar.png" alt="cerrar" class="d-inline-block align-text-top">
  </div>
  `;

  sidebar.prepend(botonCerrarModal);

  //Mostrar Total del carrito $$
  let divTotal = document.createElement("div");
  let miTotal = totalCarrito();
  divTotal.innerHTML = `<p id="totalCarritoText">TOTAL CARRITO: $${miTotal}</p>
  <button class="btn-comprar">Comprar</button>
  `;

  sidebar.appendChild(divTotal);


  //MOSTRAR CARRITO
  const clickCerraModal = () => {
    botonCerrarModal.addEventListener("click", () => {
      $(sidebar).hide();
    });
  };
  clickCerraModal();
};

//RESTAR PRODUCTO
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

// VACIAR PRODUCTOS
const vaciarProductos = (event) => {
  let idProducto = event.target.getAttribute("data-id");
  carrito = carrito.filter((element) => element.id != idProducto);
  
  mostrarEnCarritoNuevo();
  localStorage.setItem("carrito", JSON.stringify(carrito));
};


//BOTONES QUITAR Y VACIAR
sidebar.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-menos")) {
    restarProducto(event);
    
  }
  if (event.target.classList.contains("btn-vaciar")) {
    vaciarProductos(event);
    
  }
});



//TOTAL CARRITO
const totalCarrito = () => {
  let total = carrito.reduce(
    (acumulador, iterador) => acumulador + iterador.precioTotal,
    0
  );

  return total;
};


clickCarrito();
mostrarEnCarritoNuevo();

