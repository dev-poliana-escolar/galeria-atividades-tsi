// escrever um programa que, dado o gabarito e as respostas de um candidato,
// determina o número de acertos daquele candidato.



const read = require("readline-sync");

let op: number = read.question("op: ")
if (op ==1){
    let num_questoes: number = Number(read.question("Quantidade de questões: "));
    let gabarito: string = read.question("Gabarito da prova: ");
    let respostas: string = read.question("Respostas do aluno: ");

    let acertos: number = 0;

    for (let i = 0; i < num_questoes; i++) {
    if (gabarito[i] === respostas[i]) {
        acertos++;
    }
    }

    console.log(acertos);
}else{
    let cpf: number[];
    let entrada = read.question("Digite os 9 primeiros digitos do CPF: ");
    cpf = entrada.split("").map(Number); // map converte o texto (split) para number

    // --- Cálculo de d1 ---
    let soma1 = 0;
    for (let i = 0, peso = 10; i < 9; i++, peso--) {
    soma1 += cpf[i] * peso;
    }

    let resto1 = soma1 % 11;
    let d1 = (resto1 == 0 || resto1 == 1) ? 0 : (11 - resto1);

    // --- Cálculo de d2 ---
    let soma2 = 0;
    for (let i = 0, peso = 11; i < 9; i++, peso--) {
    soma2 += cpf[i] * peso;
    }
    soma2 += d1 * 2; 

    let resto2 = soma2 % 11;
    let d2 = (resto2 == 0 || resto2 == 1) ? 0 : (11 - resto2);

    console.log(`Dígitos verificadores: ${d1}${d2}`);

}