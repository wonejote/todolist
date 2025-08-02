

class carta{
    constructor(){
        this.texto = "soy un div melo"
    }

     hacerCarta(){
        const content = document.querySelector(".content");
        const cart = document.createElement("div");
        cart.innerText = this.texto;
        content.appendChild(cart)
        
    }
}

export function crearCarta(){
    let NewCart = new carta;
    NewCart.hacerCarta();
    
}
