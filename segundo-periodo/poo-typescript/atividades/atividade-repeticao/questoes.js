"use strict";
/*Responda às questões abaixo na linguagem Javascript (individual ou em duplas). Compartilhe a resolução na tarefa correspondente no Google sala de aula.

1 - Faça um programa que leia o login e a sua senha de uma pessoa e não aceite a senha igual ao nome.
    Peça novamente a digitação caso os valores de login e senha sejam iguais. Sugestão: use a estrutura de repetição do-while.
    Exemplo
    Observação: O exemplo usa prompt (no navegador Web), mas você pode fazer com leitura em linha de comando (readline-sync)

2 - Implemente em Typescript o algoritmo abaixo que verifica se um número inteiro (maior que 1) é ou não primo.


algoritmo "primo"
início
      //O num. é divisível por algum outro que não seja ele e 1?
    num: inteiro
      escreva("Número inteiro positivo (>1): ")


      repita
        leia(num)
      enquanto num <= 1
     
      primo: lógico     = true
      divisor: número   = num - 1
     
      enquanto (primo .e. divisor > 1) faça
          se (num % divisor == 0) então
              primo = false
          senão
              divisor = divisor - 1
          fimse
      fimenquanto
     
      se (primo) então
         escreva("O número ", num, " é primo")
      senão
         escreva("O número ", num, " não é primo")
      fimse
fim


3 - Faça um programa que receba um intervalo numérico inteiro e positivo (ex. 2-10; 30-800)
e retorne a quantidade de números primos existentes nesse intervalo (incluindo o início e o final).
Aproveite o programa desenvolvido no exercício anterior.

    */
Object.defineProperty(exports, "__esModule", { value: true });
const read = require('readline-sync');
let executanto = true;
while (executanto) {
    let op = read.question("Informe qual questão deseja ver: ");
    if (op == 1) {
        let nome_login;
        let senha_login;
        do {
            nome_login = read.question("Informe seu nome de usuário: ");
            senha_login = read.question("Informe a senha do usuário: ");
            if (nome_login === senha_login) {
                console.log("Login e senha devem ser diferentes");
            }
            else {
                console.log("OK");
            }
        } while (nome_login == senha_login);
    }
    else if (op == 2) {
        let numero;
        do {
            numero = read.question("Digite um numero (>1): ");
            if (numero <= 1) {
                console.log("O numero tem que ser maior que um");
            }
        } while (numero <= 1);
        let primo = true;
        let divisor = numero - 1;
        while (primo && divisor > 1) {
            if (numero % divisor == 0) {
                primo = false;
            }
            else {
                divisor = divisor - 1;
            }
        }
        if (primo === true) {
            console.log(`O número ${numero} é primo`);
        }
        else {
            console.log(`O número ${numero} não é primo`);
        }
    }
    else if (op == 3) {
        let primeiro_num;
        let segundo_num;
        let lista_num;
        primeiro_num = read.question("Digite o primeiro numero: ");
        segundo_num = read.question("Digite o segundo numero: ");
        // for(let intervalo = primeiro_num,  intervalo<, intervalo++){
        //     lista_num.push(intervalo);
        // }
    }
    let op2 = read.question("Ver outra questão? (s/n):  ");
    if (op2 == 's') {
        continue;
    }
    else if (op2 == 'n') {
        executanto = false;
    }
    else {
        console.log("Opção invalida. O programa vai continuar");
        continue;
    }
}
