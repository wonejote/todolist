
let formulario; // Ahora es global dentro del módulo
import { crearCarta } from "./carta";

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
    pregunta1.placeholder = "Pregunta 1";

    pregunta2.type = "text";
    pregunta2.placeholder = "Pregunta 2";

    botonFormulario.type = "submit";
    botonFormulario.textContent = "Enviar";

    formulario.appendChild(pregunta1);
    formulario.appendChild(pregunta2);
    formulario.appendChild(botonFormulario);


    document.body.appendChild(formulario);
    botonFormulario.addEventListener("click",crearCarta)
    formulario.addEventListener("submit", function(event) {
  event.preventDefault(); // ⛔ evita que recargue la página
  console.log("Formulario enviado sin recargar");
});

    // Esperar al siguiente tick para evitar que el clic en el botón dispare el cierre
    setTimeout(() => {
        document.addEventListener("click", handleOutsideClick);
    }, 0);
}

function handleOutsideClick(event) {
    if (formulario && !formulario.contains(event.target)) {
        formulario.remove();
        document.removeEventListener("click", handleOutsideClick);
        formulario = null; // Limpia la referencia
    }
}
