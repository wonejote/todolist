import "./styles.css";
import { addFormulario } from "./form";

const botonCrear = document.querySelector("#crear");

botonCrear.addEventListener("click", function(){
    addFormulario();
})

