"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reserva = void 0;
const hospede_1 = require("./hospede");
const quarto_1 = require("./quarto");
class Reserva {
    #hospede;
    #quarto;
    #qtd_diaria;
    #total;
    constructor(quarto, qtd_diaria) {
        this.#hospede = [];
        this.#quarto = quarto;
        this.#qtd_diaria = qtd_diaria;
        this.#total = 0;
    }
    get hospedes() {
        return this.#hospede.map(h => h.nome_hospede);
    }
    adicionarHospede(hospede) {
        if (hospede) {
            if (this.#hospede.length >= 3) {
                return false;
            }
            this.#hospede.push(hospede);
            return true;
        }
        else {
            return false;
        }
    }
    calcularTotal() {
        let numero_diaria = this.#qtd_diaria;
        let valor_diaria = this.#quarto.valor_diaria;
        let total = numero_diaria * valor_diaria;
        this.#total = total;
        return total;
    }
}
exports.Reserva = Reserva;
// Quartos
let q1 = new quarto_1.Quarto(1, 20);
let q2 = new quarto_1.Quarto(2, 15);
// Hospedes
let h1 = new hospede_1.Hospede("Maria Paula", "23345567899", "988778833");
let h2 = new hospede_1.Hospede("Poliana", "82388333456", "97666444");
let h3 = new hospede_1.Hospede("Alessandro", "23444477789", "845768769");
let h4 = new hospede_1.Hospede("Fernando", "22233344456", "84987564398");
let re1 = new Reserva(q1, 2);
re1.adicionarHospede(h1);
re1.adicionarHospede(h2);
re1.adicionarHospede(h3);
// re1.adicionarHospede(h4); dará erro pois na modelagem só limita ate 3 hospedes
console.log(re1.calcularTotal());
console.log(re1.hospedes);
