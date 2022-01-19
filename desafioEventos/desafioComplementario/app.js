class Producto {
  constructor(id, marca, rubro, nombre, precio, img) {
    this.id = id,
    this.marca = marca,
    this.rubro = rubro,
    this.nombre = nombre,
    this.precio = precio,
    this.img = img
  }
}

const productos = [
  (producto1 = new Producto(
    0,
    "LACA",
    "MAKEUP",
    "BROCHA",
    1000,
    "./img/brocha.jpg"
    
  )),
  (producto2 = new Producto(
    1,
    "MAC",
    "MAKEUP",
    "LABIAL",
    2111,
    "./img/labial.jpg"
    
  )),
  (producto3 = new Producto(
    2,
    "GAMMA",
    "PEINADO",
    "SECADOR",
    4000,
    "./img/secador.jpg"
  )),
  (producto4 = new Producto(
    3,
    "FINE",
    "FITNES",
    "PROTEINA",
    7500,
    "./img/proteina.jpg"
  )),
];

let card = document.getElementById("row");

const agregarCardAlHtml = () => {
  productos.map((element) => {
    card.innerHTML += `
      <div class=" col-md-4"> 
        <img src="${element.img}" style="width: 40%">
        
          <h5 class="card-title">${element.nombre}</h5>
          <p class="card-text">Marca: ${element.marca}</p>
          <p class="card-text">Precio: $${element.precio}</p>
          <p class="card-text">${element.descripcion}</p>
          <button id="btncambiarColor" class="btn">Cambiar Color</button>
       
      </div>
    `;
  });
};



agregarCardAlHtml();
