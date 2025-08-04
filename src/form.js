
let formulario; 
import { carta } from "./carta";

export function addFormulario() {
    // Si ya existe, no hacer nada
    if (formulario && document.body.contains(formulario)) return;

    // Crear elementos
    formulario = document.createElement("form");
    formulario.classList.add("formulario");
    const pregunta1 = document.createElement("input");
    const pregunta2 = document.createElement("input");

    const pregunta3  = document.createElement("select");
    const pregunta3Label = document.createElement("label");
    const pregunta3a = document.createElement("option");
    const pregunta3b = document.createElement("option");
    const pregunta3c = document.createElement("option");
    

    const botonFormulario = document.createElement("button");

    // Configurar
    pregunta1.type = "text";
    pregunta1.placeholder = "Nombre del proyecto";
    pregunta1.required = true;
    pregunta1.minLength = 1;

    pregunta2.type = "date";
    pregunta2.placeholder = "Pregunta 2";
    pregunta2.required = true;

    pregunta3.id = "prioridadID"; pregunta3.name = "prioridad";
    pregunta3Label.for = "prioridadID"; pregunta3Label.innerText = "prioridad";
    pregunta3a.value = "baja"; pregunta3a.innerText = "baja"; 
    pregunta3b.value = "media"; pregunta3b.innerText = "media";
    pregunta3c.value = "alta"; pregunta3c.innerText = "alta";

    pregunta3.appendChild(pregunta3a);
    pregunta3.appendChild(pregunta3b);
    pregunta3.appendChild(pregunta3c);

    botonFormulario.type = "submit";
    botonFormulario.textContent = "Enviar";

    formulario.appendChild(pregunta1);
    formulario.appendChild(pregunta2);
    formulario.appendChild(pregunta3Label);
    formulario.appendChild(pregunta3);
    formulario.appendChild(botonFormulario);


    document.body.appendChild(formulario);

    //_-----------------------------------------------------
    
    formulario.addEventListener("submit", function(event) {
    event.preventDefault(); 
    let newCarta = new carta(pregunta1.value,pregunta2.value,pregunta3.value);
    
    cerrarFormulario();})
;

    
    setTimeout(() => {
        document.addEventListener("click", handleOutsideClick);
    }, 0);
}

function handleOutsideClick(event) {
    if (formulario && !formulario.contains(event.target)) {
        cerrarFormulario();
    }
}

function cerrarFormulario() {
    if (formulario) {
        formulario.remove();
        document.removeEventListener("click", handleOutsideClick);
        formulario = null;
    }
}
