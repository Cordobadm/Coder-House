$("#header").prepend(`
  <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <li id="logoMagnolia" class="nav-item">
      <a class="navbar-brand" href="./index.html">
        <img src="../img/mas.png" alt="logo" />
      </a>
    </li>
    <div
      class="collapse navbar-collapse justify-content-center"
      id="navbarSupportedContent"
    >
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="./index.html">Inicio</a>
        </li>
        <li class="nav-item" id="nosotras">
          <a class="nav-link" href="./nosotras.html">Nosotras</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toogle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
           aria-expanded="false"
          >
            Productos
          </a>
          <ul
            id="tamanio-letra"
            class="dropdown-menu"
            aria-labelledby="navbarDropdown"
          >
            <li>
              <a class="dropdown-item" id="navMake" href="#">MakeUp</a>
            </li>

            <li>
              <a class="dropdown-item" href="#">Fine</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Salud y Belleza</a>
            </li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Servicios
          </a>
          <ul
            id="tamanio-letra"
            class="dropdown-menu"
            aria-labelledby="navbarDropdown"
          >
            <li>
              <a class="dropdown-item" href="#">Depilacion Definitiva</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Lifting de Pestañas</a>
            </li>
            <li>
              <a class="dropdown-item" href="#"
                >Perfilado y Laminado de Cejas</a
              >
            </li>
            <li>
              <a class="dropdown-item" href="#"
                >Semipermanente de Manos y Pies</a
              >
            </li>
          </ul>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="./formulario.html">Contactános</a>
        </li>
      </ul>
        <li id="shoppingCart" class="nav-item">
          <a class="navbar-brand" href="./carrito.html">
          <img src="../img/carrito.png" alt="carrito" class="d-inline-block align-text-top">
        </li>
    </div>
  </div>
  </nav>
`);

