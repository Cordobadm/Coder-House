class Form {
    constructor(fields) {
        this.fields = fields
        this.nodo = document.createElement('form')
        this.agregarInputs()
    }

    agregarInputs() {
        for (let field of this.fields) {
            const input = new Input(field.id, field.label)
            this.nodo.appendChild(input.nodo)
        }
    }
}