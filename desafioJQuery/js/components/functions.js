//TEXTO
$('#textoId').prepend('Productos Disponibles')
let carrito = [];
// const carritoNavBar = document.getElementById("cantidadCarrito");

const agregarCardAlHtml = () => {
  for (const producto of productos) {
    $("#row").append(`
      <div id="cardProd" class=" col-md-3"> 
        <img src="${producto.img}">
        <h4 class="card-title">${producto.nombre}</h4>
        <p class="card-text">Marca: ${producto.marca}</p>
        <h5>Precio: <span>$${producto.precio}</span></h5>
        <button id="btn-magnolia" data-id="${producto.id}"class="btn-agregar">Agregar</button>
      </div>

    `);
  }

  // $('#btn-magnolia').click((e) => {
  //   console.log(e.target.parentElement)
  //   enviarCardAlCarrito(e.target.parentElement)
  // })

  let btnAddCarrito = document.querySelectorAll(".btn-agregar");

  //Eventos en el boton agregar
  btnAddCarrito.forEach((element) => {
    element.addEventListener("click", (event) => {
      enviarCardAlCarrito(event.target.parentElement);
    });
  });
};

//enviamos la card del producto al carrito
const enviarCardAlCarrito = (datosProd) => {
  let productoAlCarrito = {
    imagen: datosProd.querySelector("img").src,
    nombre: datosProd.querySelector("h4").textContent,
    precio: datosProd.querySelector("h5 span").textContent,
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

  mostrarProductosEnCarrito();
};

const mostrarProductosEnCarrito = () => {
  
  carrito.forEach((element) => {
    $('#mostrarCarrito').append( `
      <div class="col" id="productoAgregado">
        <img src="${element.imagen}" style="width: 10%">
        <h3>${element.nombre}</h3>
        <h5>Cantidad: ${element.cantidad}<h5>
        <h5>${element.precio}</h5>
      </div>
      `);
  });
};

agregarCardAlHtml();