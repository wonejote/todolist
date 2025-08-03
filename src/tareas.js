export class Tarea{
    static tareasContador = 0;
    static aumentar(){ Tarea.tareasContador++;}
    constructor(){
     Tarea.aumentar();
    }
    
    
}

export class CartaTarea {
    static tareasPorProyecto = {};

    constructor(titulo, proyecto) {
        this.titulo = titulo;
        this.proyecto = proyecto;
        if (!CartaTarea.tareasPorProyecto[proyecto] && this.proyecto !== "") {
            CartaTarea.tareasPorProyecto[proyecto] = [];
        }
        this.agregarTarea();
    }
    agregarTarea() {
        CartaTarea.tareasPorProyecto[this.proyecto].push(this.titulo);
        console.log(CartaTarea.tareasPorProyecto[this.proyecto]);
    }
    crearCartaTarea() {
        const content = document.querySelector(".content");
        const cartaDiv = document.createElement("div");
        cartaDiv.classList.add(".carta");
        const cartah1 = document.createElement("h1");
        const cartaLabel = document.createElement("label");
        const cartaCheck = document.createElement("input");
        cartaCheck.type = "checkbox";

        cartaDiv.appendChild(cartah1);
        cartaDiv.appendChild(cartaLabel);
        cartaDiv.appendChild(cartaCheck);
        cartah1.innerText = this.titulo;
        cartaLabel.innerText = "terminado";

        content.appendChild(cartaDiv);
    }
    static tareasRecuperar(proyecto) {
        const content = document.querySelector(".content");
        content.innerHTML = ""; // Borra todo el contenido
        const tareas = CartaTarea.tareasPorProyecto[proyecto] || [];
        for (const elemento of tareas) {
            if (elemento != ""){
            CartaTarea.recuperarCartaTarea(elemento);}
        }
    }
    static recuperarCartaTarea(elementoTitulo) {
        const content = document.querySelector(".content");
        const cartaDiv = document.createElement("div");
        cartaDiv.classList.add("carta");
        const cartah1 = document.createElement("h1");
        const cartaLabel = document.createElement("label");
        const cartaCheck = document.createElement("input");
        cartaCheck.type = "checkbox";

        cartaDiv.appendChild(cartah1);
        cartaDiv.appendChild(cartaLabel);
        cartaDiv.appendChild(cartaCheck);
        cartah1.innerText = elementoTitulo;
        cartaLabel.innerText = "terminado";

        content.appendChild(cartaDiv);
    }
}