
import { carta } from "./carta";


window.addEventListener("load",function(){
    const lista = carta.proyectosRecuperar()
    carta.proyectos = [];
    for (const elemento of lista)
    {
        let newCarta = new carta(elemento.proyecto, elemento.fecha, elemento.prioridad);
        newCarta.hacerCarta();
    }
})




