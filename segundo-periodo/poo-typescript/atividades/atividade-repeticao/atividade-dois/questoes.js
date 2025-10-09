"use strict";
// escrever um programa que, dado o gabarito e as respostas de um candidato,
// determina o número de acertos daquele candidato.
Object.defineProperty(exports, "__esModule", { value: true });
const read = require("readline-sync");
let num_questoes = Number(read.question("Quantidade de questões: "));
let entradaGab_aluno = read.question("Gabarito do aluno: ");
let entradaGab_prova = read.question("Gabarito da prova: ");
let gab_prova = entradaGab_prova.split("");
let gab_aluno = entradaGab_aluno.split("");
// gab_aluno.forEach(resposta => {
//     console.log(resposta)
// })
