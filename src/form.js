
let formulario; // Ahora es global dentro del módulo
import { carta } from "./carta";

export function addFormulario() {
    // Si ya existe, no hacer nada
    if (formulario && document.body.contains(formulario)) return;

    // Crear elementos
    formulario = document.createElement("form");
    formulario.classList.add("formulario");
    const pregunta1 = document.createElement("input");
    const pregunta2 = document.createElement("input");
    const botonFormulario = document.createElement("button");

    // Configurar
    pregunta1.type = "text";
    pregunta1.placeholder = "Nombre del proyecto";
    pregunta1.required = true;
    pregunta1.minLength = 1;

    pregunta2.type = "date";
    pregunta2.placeholder = "Pregunta 2";
    pregunta2.required = true;

    botonFormulario.type = "submit";
    botonFormulario.textContent = "Enviar";

    formulario.appendChild(pregunta1);
    formulario.appendChild(pregunta2);
    formulario.appendChild(botonFormulario);


    document.body.appendChild(formulario);

    //_-----------------------------------------------------
    botonFormulario.addEventListener("click",function(){
    formulario.addEventListener("submit", function(event) {
    event.preventDefault(); 
    let newCarta = new carta(pregunta1.value,pregunta2.value);
    newCarta.hacerCarta();
    cerrarFormulario();})
});

    // Esperar al siguiente tick para evitar que el clic en el botón dispare el cierre
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
