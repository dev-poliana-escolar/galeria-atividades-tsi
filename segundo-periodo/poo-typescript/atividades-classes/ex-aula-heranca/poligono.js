"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Poligono = void 0;
class Poligono {
    __numLados;
    constructor() {
        this.__numLados = 0;
    }
    get numLados() {
        return this.__numLados;
    }
}
exports.Poligono = Poligono;
class Triangulo extends Poligono {
    constructor() {
        super();
        this.__numLados = 3;
    }
}
let tri1 = new Triangulo();
console.log(tri1.numLados);
