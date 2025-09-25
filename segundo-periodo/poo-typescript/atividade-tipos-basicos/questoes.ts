/* 
Faça os exercícios a seguir na linguagem Javascript. Crie um projeto e compartilhe o código de cada questão na tarefa correspondente no Google sala de aula. 

1. Calcule o volume de um cilindro dada a sua altura (h) e o seu raio (r) pela fórmula:
v =  r2h 

2. Calcule quanto um estudante precisa tirar na avaliação final para ser aprovado em uma disciplina do IFRN dada a sua média parcial.

3. Dada uma data no formato dd/mm/aaaa (menor ou igual a data de hoje), imprima quantos dias se passaram do início do ano (01/01/2025)  até esta data. 
Exemplo: Para o dia '11/04/2025' o resultado é 100. 

4. Faça um programa que defina uma constante objeto no formato JSON contendo o 
seu nome, matrícula, curso e IRA (Índice de Rendimento Acadêmico). 
Usando o formato template string, imprima uma frase contendo essas informações. 
Exemplo: “Maria é aluna de Informática com matrícula 202092923222 e possui IRA 83.2”. 


*/


const read = require('readline-sync');

let executanto = true;

while (executanto){
    let op : number = read.question("Informe qual questão deseja ver: ")

    if (op ==1) {
        const altura : number = 10;
        const raio : number = 24;
        const volume = 3.14 * (raio**2) * altura;
        console.log(volume)

      
    }else if (op ==2) {
        let bimestre_um : number = read.question("Nota do primeiro bimestre: ");
        let bimestre_dois : number = read.question("Nota do segundo bimestre: ");

        const media = ((bimestre_um * 2) + (bimestre_dois * 3)) / 5;


        if (media>=50 && media<60){
            console.log(`Sua média é de: ${media}. Você está de recuperação `);
            const nota_final : number = (bimestre_dois + media)/2;
            console.log(`Para recuperar: ${nota_final}`);
        }
        else{
            console.log(`Sua média é de: ${media}. Você está reprovado `);
        };
    
    }else if(op == 3){    
        let date = new Date;
        let data_user = read.question("Digite uma data no formato (dd/mm/aaaa): ");
        console.log(date)

    

    }else if (op ==4){

    }
   
    let op2 = read.question("Ver outra questão? (s/n):  ") 

    if (op2 =='s'){
        continue
    }else if (op2 =='n'){
        executanto= false
    }
}
  


 

