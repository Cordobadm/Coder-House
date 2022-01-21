let nodoPrincipal = document.getElementById("textoId");


let cardNosotras = document.getElementById("cardNosotras");

const agregarCardNosotrasAlHtml = () => {
  personas.map((element) => {
    cardNosotras.innerHTML += `
    <div class=" mt-3 col-12 col-md-4">
    <div class="card" id="cardNosotras">
      <img
        src="${element.imagen}"
        class="card-img-top"
        alt="imagenDra"
      />
      
      <div class="card-body">
        <div class="badges">
          <span class="badge rounded-pill bg-warning text-dark"
            >${element.cargo}</span
          >
          <span class="badge rounded-pill bg-primary">${element.funcion}</span>
        </div>
        <h5 class="card-title p-2">${element.nombre} ${element.apellido}</h5>
        <p class="card-text">
          ${element.informacion}
        </p>
        <div id="redes" class="social text-center">
          <a
            href="${element.instagram}"
            target="_blank"
            ><img src="../img/imgNosotras/iconoig.png" alt="instagram"
          /></a>
          <a
            href="${element.facebook}"
            target="_blank"
          >
            <img src="../img/imgNosotras/iconoFace.png" alt="facebook"
          /></a>
          <a href="${element.twitter}" target="_blank">
            <img src="../img/imgNosotras/iconoTwitter.png" alt="twitter"
          /></a>
        </div>
      </div>
    </div>
  </div>`;
  });
};

agregarCardNosotrasAlHtml();
