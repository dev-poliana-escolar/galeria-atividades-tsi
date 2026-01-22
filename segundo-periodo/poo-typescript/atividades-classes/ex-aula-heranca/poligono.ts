export abstract class Poligono{
    protected __numLados : number;
    protected lados :number[] | undefined;
    constructor(){
        this.__numLados = 0
        this.lados = undefined;
    }

    get numLados(): number{
        return this.__numLados;
    }

    informarMedidasLados(...lados:number[]){
        if (lados.length == this.__numLados){
            this.lados = lados;
            return true
        }

        return false
    }
    abstract calcularArea(): number|undefined;

}

class Triangulo extends Poligono{
    constructor(){
        super()
        this.__numLados = 3
        this.informarMedidasLados(...lados)
    }

    calcularArea(): number | undefined {
       if (this.lados && this.lados.length){
            
       }
    }
}

let tri1: Triangulo = new Triangulo();
console.log(tri1.numLados)
