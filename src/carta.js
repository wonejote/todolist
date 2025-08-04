
import { Tarea } from "./tareas";
import { CartaTarea } from "./tareas";
import { addFormularioTarea } from "./formTareas";
export class carta{

     static proyectos = [];
    constructor(proyecto,fecha,prioridad){
        this.proyecto = proyecto;
        this.fecha = fecha;
        this.prioridad = prioridad;
        this.contar = 0;
        carta.proyectos.push(this);
        localStorage.setItem("proyectos", JSON.stringify(carta.proyectos));
    }

     hacerCarta(){
        const content = document.querySelector(".sidebar");
        const contenido  = document.querySelector(".content");
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
        cart.addEventListener("click", () => {
            console.log(this.proyecto);
            
            CartaTarea.tareasRecuperar(this.proyecto);
           
            carta.proyectosRecuperar();
        });

        cartaBotonCrear.addEventListener("click", () =>
        {
            const newTarea = new Tarea;
            this.contar = Tarea.tareasContador;
            addFormularioTarea(this.proyecto);

        })

        cartaBotonBorrar.addEventListener("click", () => {
    
    carta.proyectos = carta.proyectos.filter(item => item != this);
        localStorage.setItem("proyectos", JSON.stringify(carta.proyectos));
    cart.remove();
    contenido.innerText = "";
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
    
     static proyectosRecuperar(){
        const listaProyectos = JSON.parse(localStorage.getItem("proyectos"));
        console.log(listaProyectos);
        return listaProyectos;
     }
}







