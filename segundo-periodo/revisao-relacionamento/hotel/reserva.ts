import { Hospede } from "./hospede";
import { Quarto } from "./quarto";

export class Reserva{
    #hospede: Hospede[];
    #quarto: Quarto;
    #qtd_diaria: number;
    #total: number;

    constructor(quarto:Quarto, qtd_diaria:number){
        this.#hospede = [];
        this.#quarto = quarto;
        this.#qtd_diaria = qtd_diaria;
        this.#total = 0
    }

    get hospedes(){
        return this.#hospede.map(h => h.nome_hospede);
    }


    adicionarHospede(hospede: Hospede): boolean{
        if(hospede){
            if (this.#hospede.length >= 3){
                return false
            }
            this.#hospede.push(hospede);
            return true;
            
        }else{
            return false;
        }
    }

    calcularTotal(){
        let numero_diaria =  this.#qtd_diaria;
        let valor_diaria = this.#quarto.valor_diaria;

        let total = numero_diaria * valor_diaria;
        this.#total = total;
        return total;
    }
    
}

// Quartos
let q1 = new Quarto(1, 20);
let q2 = new Quarto(2, 15);

// Hospedes
let h1 = new Hospede("Maria Paula", "23345567899", "988778833");
let h2 = new Hospede("Poliana", "82388333456", "97666444");
let h3 = new Hospede("Alessandro", "23444477789", "845768769");
let h4 = new Hospede("Fernando", "22233344456", "84987564398");

let re1 = new Reserva(q1, 2);
re1.adicionarHospede(h1);
re1.adicionarHospede(h2);
re1.adicionarHospede(h3);
// re1.adicionarHospede(h4); dará erro pois na modelagem só limita ate 3 hospedes
console.log(re1.calcularTotal())
console.log(re1.hospedes)
