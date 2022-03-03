
const botonMake = document.getElementById("btn-makeUp")
const botonPeinado = document.getElementById("btn-peinado")
const botonSalud = document.getElementById("btn-salud")
const botonTodos = document.getElementById("btn-todos")


$(botonMake).on("click", () =>{
    $(".MAKEUP").show()
    $(".PEINADO").hide()
    $(".SALUD").hide()
})


$(botonPeinado).on("click", () =>{
    $(".PEINADO").show()
    $(".MAKEUP").hide()
    $(".SALUD").hide()
})


$(botonSalud).on("click", () =>{
    $(".SALUD").show()
    $(".PEINADO").hide()
    $(".MAKEUP").hide()
})

$(botonTodos).on("click", () =>{
    $(".SALUD").show()
    $(".PEINADO").show()
    $(".MAKEUP").show()
})