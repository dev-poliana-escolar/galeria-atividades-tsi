"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quarto = void 0;
class Quarto {
    #numero;
    #valor;
    constructor(numero, valor) {
        this.#numero = numero;
        this.#valor = valor;
    }
    get numero_quarto() { return this.#numero; }
    get valor_diaria() { return this.#valor; }
    set numeroQuarto(numero) {
        this.#numero = numero;
    }
    set valorDiaria(valor) {
        this.#valor = valor;
    }
}
exports.Quarto = Quarto;
