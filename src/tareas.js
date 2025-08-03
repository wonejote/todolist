export class Tarea{
    static tareasContador = 0;
    static aumentar(){ Tarea.tareasContador++;}
    constructor(){
     Tarea.aumentar();
    }
    
    
}