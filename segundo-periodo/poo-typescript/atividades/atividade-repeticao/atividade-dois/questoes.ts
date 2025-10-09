// escrever um programa que, dado o gabarito e as respostas de um candidato,
// determina o número de acertos daquele candidato.

const read =require("readline-sync");



let num_questoes : number = Number(read.question("Quantidade de questões: "));
let entradaGab_aluno : string = read.question("Gabarito do aluno: ");
let  entradaGab_prova : string = read.question("Gabarito da prova: ");

let gab_prova : string[] = entradaGab_prova.split("");
let gab_aluno : string[] = entradaGab_aluno.split("");

// gab_aluno.forEach(resposta => {
//     console.log(resposta)

// })




