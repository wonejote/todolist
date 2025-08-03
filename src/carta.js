
export class carta{
    constructor(proyecto,fecha,prioridad){
        this.proyecto = proyecto;
        this.fecha = fecha;
        this.prioridad = prioridad;
    }

     hacerCarta(){
        const content = document.querySelector(".sidebar");
        const cart = document.createElement("div");
        cart.classList.add("carta")
        const cartaTitulo = document.createElement("h1");
        const cartaFecha = document.createElement("p");
        const cartaPrioridad = document.createElement("p");
        const cartaPrioridadSpan = document.createElement("span");
        const cartaBotonCrear = document.createElement("button");
        const cartaBotonBorrar = document.createElement("button");

        

        cart.appendChild(cartaTitulo);
        cart.appendChild(cartaFecha);
        cart.appendChild(cartaPrioridad);
        
        cart.appendChild(cartaBotonCrear);
        cart.appendChild(cartaBotonBorrar);

        cartaBotonCrear.innerText = "Agregar";
        cartaBotonBorrar.innerText = "Eliminar";

        cartaBotonBorrar.addEventListener("click", () => {
    cart.remove();
});


        cartaTitulo.innerText = this.proyecto;
        cartaFecha.innerText = this.fecha;
        cartaPrioridad.append("propiedad: ")
        cartaPrioridadSpan.innerText =  this.prioridad;
        cartaPrioridad.appendChild(cartaPrioridadSpan);

        switch(this.prioridad){
            case "baja" : {
                cartaPrioridadSpan.style.color = "green";
                break;
            }
            case "media" : {
                cartaPrioridadSpan.style.color = "orange";
                break;
            }
            case "alta" : {
                cartaPrioridadSpan.style.color = "red";
                break;
            }

        }

        content.appendChild(cart)
        
    }

     
}







