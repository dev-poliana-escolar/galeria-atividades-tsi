export class Quarto{
    #numero :number;
    #valor : number;


    constructor(numero : number, valor :number){
        this.#numero = numero;
        this.#valor = valor;
    }
    get numero_quarto (){ return this.#numero}
    get valor_diaria(){return this.#valor}

    set numeroQuarto(numero:number){
        this.#numero = numero;
    }

    set valorDiaria(valor:number){
        this.#valor = valor;
    }
}