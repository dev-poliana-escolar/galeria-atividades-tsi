export class Hospede{
    #nome : string;
    #cpf: string;
    #telefone:string;

    constructor(nome:string, cpf : string, telefone:string){
        this.#nome = nome;
        this.#cpf = cpf;
        this.#telefone = telefone;
    }

    set nomeHospede (nome:string){
        this.#nome = nome;
    }

    set cpfHospede (cpf:string){
        this.#cpf = cpf;
    }

    set telefoneHospede (telefone:string){
        this.#telefone = telefone;
    }

    get nome_hospede(){ return this.#nome}
    get cpf_hospede(){return this.#cpf}
    get tele_hospede(){return this.#telefone}
}

