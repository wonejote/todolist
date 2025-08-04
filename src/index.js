import "./styles.css";
import { addFormulario } from "./form";

const botonCrear = document.querySelector("#crear");

botonCrear.addEventListener("click", function(){
    addFormulario();
})


import { carta } from "./carta";


window.addEventListener("load",function(){
    const lista = carta.proyectosRecuperar()
    carta.proyectos = [];
    for (const elemento of lista)
    {
        let newCarta = new carta(elemento.proyecto, elemento.fecha, elemento.prioridad, elemento.tareas);
        
    }
})
