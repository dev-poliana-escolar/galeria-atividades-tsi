

class Elevador{
    #andar :number;
    #total_andares:number = 0;
    #qtd_max : number;
    #qtd_pessoas : number;
    #porta: boolean;

    constructor(){
        this.#qtd_max = 0
        this.#porta = false
        this.#qtd_pessoas = 0
        this.#andar = 0; // terreo
    }

    get andar_atual(){ return this.#andar }
    get total_de_andares(){ return this.#total_andares}
    get qtd_maxima_elevador (){ return this.#qtd_max }
    get estado_porta(){ return this.#porta }
    get pessoas(){return this.#qtd_pessoas}

    set novo_total_andar(total_andares:number){
        this.#total_andares = total_andares
    }

    set novo_andar_atual(andar:number){
        this.#andar = andar;
    }

    set capacidade_elevador(capacidade : number){
        this.#qtd_max = capacidade;
    }

    set porta_estado (estado:boolean){
        this.#porta = estado;
    }

    set num_pessoas(num_pessoas:number){
        this.#qtd_pessoas = num_pessoas;
    }

    inicializar(capacidade_elevador :number, total_andares:number){
        this.capacidade_elevador = capacidade_elevador;
        this.novo_total_andar = total_andares;

        return { 
            andar : this.andar_atual,
            porta : this.estado_porta,
            capacidade_max : this.qtd_maxima_elevador, 
            total_de_andares : this.total_de_andares,
        }

    }

    abrirPorta(){
        this.porta_estado = true
    }

    entrar(qtd_pessoas:number){
        if (!this.#porta){
            return `Não é possível entrar: A porta está fechada!`
        }

        let n_pessoas = this.#qtd_pessoas + qtd_pessoas;

        if (n_pessoas>this.qtd_maxima_elevador){
            return `A capacidade do elevador foi ultrapassada!`
        } 

        this.num_pessoas = n_pessoas;
        this.porta_estado = false

        return `${qtd_pessoas} pessoa(s) entraram no elevador. Total: ${this.pessoas}`;
    }

    sair(){
        if(!this.#porta){
            return `Ninguém pode sair: A porta está fechada`
        }

        if(this.#qtd_pessoas){
            this.num_pessoas = 0
            return `Todos sairam do elevador`
        }else{
            return `Não é possível remover: O elevador está vazio.`
        }

    }

    descer(descer_andar:number){
        let andar_final = this.andar_atual - descer_andar;
        if (this.andar_atual==0){
            return `Não é possível descer: O elevador está no térreo`
        }

        this.novo_andar_atual = andar_final;
        return `O elevador desceu para o andar: ${this.andar_atual}`
    }

    subir(subir_andar:number){
        let andar_final = this.andar_atual + subir_andar;

        if (andar_final>this.total_de_andares){
            return `Não é possível subir: O elevador já está no ultimo andar`
        }

        this.novo_andar_atual = andar_final;
        return `O elevador está no andar: ${this.andar_atual}`

    }
   
    

}

let el1 = new Elevador()
console.log(el1.inicializar(5,8))
el1.abrirPorta()
console.log(el1.entrar(3))
el1.abrirPorta()
console.log(el1.entrar(2))
el1.abrirPorta()
console.log(el1.sair())
console.log(el1.subir(1))
console.log(el1.subir(5))
console.log(el1.subir(1))
console.log(el1.subir(1))
// console.log(el1.subir(1)) // vai dar erro, pois nao existe andar 9
console.log(el1.descer(8))
console.log(el1.descer(1))
