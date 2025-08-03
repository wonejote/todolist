
import { CartaTarea } from "./tareas";
let formularioTarea; 

export function addFormularioTarea(proyecto) {
    // Si ya existe, no hacer nada
    if (formularioTarea && document.body.contains(formularioTarea)) return;

    // Crear elementos
    formularioTarea = document.createElement("form");
    formularioTarea.classList.add("formulario");
    formularioTarea.classList.add("formularioTarea");
    const pregunta1 = document.createElement("input");
    const pregunta2 = document.createElement("input");

    const botonformularioTarea = document.createElement("button");

    // Configurar
    pregunta1.type = "text";
    pregunta1.placeholder = "Tarea";
    pregunta1.required = true;
    pregunta1.minLength = 1;


    botonformularioTarea.type = "submit";
    botonformularioTarea.textContent = "Enviar";

    formularioTarea.appendChild(pregunta1);
    formularioTarea.appendChild(botonformularioTarea);


    document.body.appendChild(formularioTarea);

    //_-----------------------------------------------------
    
    formularioTarea.addEventListener("submit", function(event) {
    event.preventDefault(); 
    let newCarta = new CartaTarea(pregunta1.value,proyecto);
    newCarta.crearCartaTarea();
    
    cerrarformularioTarea();}) 

    
    setTimeout(() => {
        document.addEventListener("click", handleOutsideClick);
    }, 0);
}

function handleOutsideClick(event) {
    if (formularioTarea && !formularioTarea.contains(event.target)) {
        cerrarformularioTarea();
    }
}

function cerrarformularioTarea() {
    if (formularioTarea) {
        formularioTarea.remove();
        document.removeEventListener("click", handleOutsideClick);
        formularioTarea = null;
    }
}
