class Persona {
  constructor(
    nombre,
    apellido,
    cargo,
    funcion,
    imagen,
    instagram,
    facebook,
    twitter,
    informacion
  ) {
    (this.nombre = nombre),
      (this.apellido = apellido),
      (this.cargo = cargo),
      (this.funcion = funcion);
    this.imagen = imagen;
    (this.instagram = instagram),
      (this.facebook = facebook),
      (this.twitter = twitter);
    this.informacion = informacion;
  }
}

class Producto {
  constructor(
    id,
    marca,
    rubro,
    nombre,
    precio,
    precioPorUnidad,
    img
  ) {
    (this.id = id),
      (this.marca = marca),
      (this.rubro = rubro),
      (this.nombre = nombre),
      (this.precio = precio),
      (this.precioPorUnidad = precioPorUnidad),
      (this.img = img)
  }
}
