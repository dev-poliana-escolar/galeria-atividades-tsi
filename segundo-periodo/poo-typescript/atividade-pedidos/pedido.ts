class Produto{
    #codigo:number;
    #valor:number;
    #descricao:string;

    constructor(codigo: number, valor: number, descricao: string) {
        this.#codigo = codigo;
        this.#valor = valor;
        this.#descricao = descricao;
    }

    get valor(){return this.#valor}
}

class ItemPedido{
    #produto: Produto;     
    #quantidade: number;

    constructor(produto: Produto, quantidade: number) {
        this.#produto = produto;
        this.#quantidade = quantidade;
    }

    get produto() {
        return this.#produto;
    }
    get quantidade() { 
        return this.#quantidade; 
    }

    obterSubtotal(): number{
        let subtotal = this.produto.valor * this.quantidade;
        return subtotal
    }
}

class Pedido{
    #itens: ItemPedido[];
    #valor_total:number;

    constructor(){
       this.#itens = [];
       this.#valor_total = 0
    }

    get itens(){return this.#itens}

    adicionarItem(item:ItemPedido): boolean{
        if (item){
            this.#itens.push(item);
            this.#valor_total += item.obterSubtotal()
        }else{
            return false
        }
        
        return true
          
    }

    obterTotal(){
        this.#valor_total
        return {valor: this.#valor_total}
    }
}

// Produtos
let sushi = new Produto(1,10,'Arroz japones, alga, salmão')
let temaki = new Produto(2,22,'Alga, arroz japones, pedaços de salmão');
let yakisoba = new Produto(3,25,'Macarrão, legumes')


// ItemPedido

let itemp1= new ItemPedido(sushi,2);

// Pedido

let ped1= new Pedido()
console.log(ped1.adicionarItem(itemp1));
console.log(ped1.obterTotal())