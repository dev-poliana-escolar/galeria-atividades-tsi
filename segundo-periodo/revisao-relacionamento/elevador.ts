

class Elevador{
    #andar :number;
    #total_andares:number = 0;
    #qtd_max : number;
    #porta: boolean;

    constructor(){
        this.#qtd_max = 0
        this.#porta = false
        this.#andar = 0; // terreo
    }

    get andar(){ return this.#andar }
    get total_de_andares(){ return this.#total_andares}
    get qtd_maxima_elevador (){ return this.#qtd_max }
    get estado_porta(){ return this.#porta }

    set andares(total_andares:number){
        this.#total_andares = total_andares
    }
    set qtd_maxima(capacidade : number){
        this.#qtd_max = capacidade;
    }

    inicializar(capacidade_elevador :number, total_andares:number){
        let cap_elevador = this.qtd_maxima = capacidade_elevador;
        let totalAndares = this.andares = total_andares;

        return { 
            andar : this.andar,
            porta : this.estado_porta,
            capacidade_max : cap_elevador, 
            total_de_andares : totalAndares,
        }

    }

    entrar(qtd_pessoas:number){
        if (qtd_pessoas>this.qtd_maxima_elevador && this.estado_porta === false){
            return `O elevador está com a porta fechada ou a capacidade do elevador foi ultrapassada!`
        } else{
            return 
        }
    }


}

let el1 = new Elevador()
console.log(el1.inicializar(5,8))
console.log(el1.entrar(10))
