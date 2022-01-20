const nodoPrincipal = document.getElementById('formulario')

const userFields = [
    {
        id: 'name',
        label: 'Nombre de usuario'
    }
]

const form = new Form(formFields)
// const header = new Header('Admin')

// nodoPrincipal.appendChild(header.nodo)
nodoPrincipal.appendChild(form.nodo)

