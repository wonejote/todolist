import "./styles.css";
import { addFormulario } from "./form";
import { carta } from "./carta";

const botonCrear = document.querySelector("#crear");

botonCrear.addEventListener("click", function(){
    addFormulario();
})

