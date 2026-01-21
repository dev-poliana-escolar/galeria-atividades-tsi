export class Poligono{
    protected __numLados : number;
    constructor(){
        this.__numLados = 0
    }

    get numLados(): number{
        return this.__numLados;
    }
}

class Triangulo extends Poligono{
    constructor(){
        super()
        this.__numLados = 3
    }
}

let tri1: Triangulo = new Triangulo();
console.log(tri1.numLados)