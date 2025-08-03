
export class carta{
    constructor(proyecto,fecha){
        this.proyecto = proyecto;
        this.fecha = fecha;
    }

     hacerCarta(){
        const content = document.querySelector(".sidebar");
        const cart = document.createElement("div");
        cart.classList.add("carta")
        const cartaTitulo = document.createElement("h1");
        const cartaFecha = document.createElement("p");
        const cartaPrioridad = document.createElement("span");
        const cartaBotonCrear = document.createElement("button");
        const cartaBotonBorrar = document.createElement("button");

        cart.appendChild(cartaTitulo);
        cart.appendChild(cartaFecha);
        cart.appendChild(cartaPrioridad);
        cart.appendChild(cartaBotonCrear);
        cart.appendChild(cartaBotonBorrar);

        cartaBotonCrear.innerText = "Agregar";
        cartaBotonBorrar.innerText = "Eliminar";

        cartaTitulo.innerText = this.proyecto;
        cartaFecha.innerText = this.fecha;
        cartaPrioridad.innerText = "cuando haiga tiempo"

        content.appendChild(cart)
        
    }
}

