"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hospede = void 0;
class Hospede {
    #nome;
    #cpf;
    #telefone;
    constructor(nome, cpf, telefone) {
        this.#nome = nome;
        this.#cpf = cpf;
        this.#telefone = telefone;
    }
    set nomeHospede(nome) {
        this.#nome = nome;
    }
    set cpfHospede(cpf) {
        this.#cpf = cpf;
    }
    set telefoneHospede(telefone) {
        this.#telefone = telefone;
    }
    get nome_hospede() { return this.#nome; }
    get cpf_hospede() { return this.#cpf; }
    get tele_hospede() { return this.#telefone; }
}
exports.Hospede = Hospede;
