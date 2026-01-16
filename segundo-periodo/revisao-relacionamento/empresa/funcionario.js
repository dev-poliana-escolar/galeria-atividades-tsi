"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Funcionario {
    #nome;
    #matricula;
    #escolaridade;
    #remuneracao_base;
    #remuneracao_total;
    constructor(nome, matricula, escolaridade) {
        this.#nome = nome;
        this.#matricula = matricula;
        this.#escolaridade = escolaridade;
        this.#remuneracao_base = 3000;
        this.#remuneracao_total = 0;
    }
    get remuneracao_baseFunc() { return this.#remuneracao_base; }
    get escolaridadeFunc() { return this.#escolaridade; }
    get remuneracao_totalFunc() { return this.#remuneracao_total; }
    set remuneracaoBase(valor_remuneracaoBase) {
        this.#remuneracao_base = valor_remuneracaoBase;
        this.obterSalarioTotal(); // vai atualizar a remuneracao total, caso mudar a base
    }
    set remuneracaoTotal(valor_remuneracaoTotal) {
        this.#remuneracao_total = valor_remuneracaoTotal;
    }
    obterSalarioTotal() {
        let salario = this.remuneracao_baseFunc;
        if (this.escolaridadeFunc == "Curso Superior") {
            salario += salario * (20 / 100);
        }
        else if (this.escolaridadeFunc == "Doutorado") {
            salario += salario * (45 / 100);
        }
        else if (this.escolaridadeFunc == "Mestrado") {
            salario += salario * (35 / 100);
        }
        else if (this.escolaridadeFunc == "Especialização") {
            salario += salario * (25 / 100);
        }
        else if (this.escolaridadeFunc == "Ensino Básico") {
            salario += salario * (5 / 100);
        }
        else if (this.escolaridadeFunc == "Ensino Médio") {
            salario += salario * (10 / 100);
        }
        this.remuneracaoTotal = salario;
        return salario;
    }
}
let f1 = new Funcionario("Joana", "1234", "Curso Superior");
let f2 = new Funcionario("Daniel", "4566", "Mestrado");
console.log(f1.remuneracao_baseFunc);
console.log(f1.obterSalarioTotal());
console.log(f2.remuneracao_baseFunc);
console.log(f2.obterSalarioTotal());
// console.log(f1.remuneracaoBase = 4000)
// console.log(f1.remuneracao_totalFunc)
