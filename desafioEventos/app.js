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

const producto1 = new Producto(
  0,
  "LACA",
  "MAKEUP",
  "BROCHA",
  1000,
  "./img/brocha.jpg"
);

let card = document.getElementById("row");

const agregarCardAlHtml = () => {
  card.innerHTML = `
      <div class=" col-md-4"> 
        <img src="${producto1.img}" style="width: 10%">
        
          <h5 class="card-title">${producto1.nombre}</h5>
          <p class="card-text">Marca: ${producto1.marca}</p>
          <p class="card-text">Precio: $${producto1.precio}</p>
          
          <button id="btncambiarColor" class="btn">Cambiar Color</button>
       
      </div>
    `;
};

function cambiarColor() {
  let btnCambiarColor = document.getElementById("btncambiarColor");
  btnCambiarColor.addEventListener("click", myf1);
  btnCambiarColor.addEventListener("mouseover", function () {
    btnCambiarColor.textContent = "Cambiar Color";
  });
  btnCambiarColor.addEventListener("mouseout", function () {
    btnCambiarColor.textContent = "No te vayas";
  });

  let contador = 0;

  function myf1() {
    if (contador % 2 == 0) {
      btnCambiarColor.style.backgroundColor = "red";
    } else {
      btnCambiarColor.style.backgroundColor = "blue";
    }
    contador += 1;
  }
}

agregarCardAlHtml()
cambiarColor()
