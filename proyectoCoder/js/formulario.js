const nodoPrincipal = document.getElementById('formulario')

const userFields = [
    {
        id: 'name',
        label: 'Nombre de usuario'
    }
]

const form = new Form(formFields)

nodoPrincipal.appendChild(form.nodo)

