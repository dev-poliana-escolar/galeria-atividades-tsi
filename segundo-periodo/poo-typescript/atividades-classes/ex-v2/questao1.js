"use strict";
/*
Faça uma classe Estudante com os atributos matricula, nome,  curso e, ira (índice de rendimento acadêmico) e periodo (1 a 9).
Faça dois objetos Estudante e imprima os seus valores.


Crie uma classe Exemplar que representa exemplar(res) de livros registrados em uma biblioteca com os atributos isbn (código que identifica o livro de forma única), título (o título do livro, para simplificar), cdd (código que identifica o lugar onde está o exemplar na biblioteca) e a quantidade de exemplares.

(extra. Tentem fazer!) Crie uma classe Biblioteca e cadastre 5 (cinco) exemplares (questão 2) de 2 (dois) livros. A biblioteca deve ter métodos para
adicionar um exemplar à biblioteca;
obter todos os exemplares cadastrados;
obter um exemplar cadastrado dado o seu cdd.

*/
Object.defineProperty(exports, "__esModule", { value: true });
class Estudante {
    matricula;
    nome;
    curso;
    ira;
    periodo;
    constructor(matriculaEst, nomeEst, cursoEst, iraEst, periodoEst) {
        this.matricula = matriculaEst;
        this.nome = nomeEst;
        this.curso = cursoEst;
        this.ira = iraEst;
        this.periodo = periodoEst;
    }
    obterDados() {
        return `Nome: ${this.nome}\nMatrícula: ${this.matricula}\nCurso: ${this.curso}\nIRA: ${this.ira}\nPeríodo: ${this.periodo}`;
    }
}
let estudante = new Estudante('2025000232', 'Ana', 'TSI', 79.9, 2);
let estudante_dois = new Estudante('2025000235', 'Pedro', 'TSI', 85.3, 4);
console.log(estudante.obterDados());
console.log("------------");
console.log(estudante_dois.obterDados());
