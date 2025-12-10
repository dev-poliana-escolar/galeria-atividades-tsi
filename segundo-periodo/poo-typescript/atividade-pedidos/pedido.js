"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Produto {
    #codigo;
    #valor;
    #descricao;
    constructor(codigo, valor, descricao) {
        this.#codigo = codigo;
        this.#valor = valor;
        this.#descricao = descricao;
    }
    get valor() { return this.#valor; }
    get descricao() { return this.#descricao; }
}
class ItemPedido {
    #id;
    #produto;
    #quantidade;
    constructor(id, produto, quantidade) {
        this.#id = id;
        this.#produto = produto;
        this.#quantidade = quantidade;
    }
    get id() {
        return this.#id;
    }
    get produto() {
        return this.#produto.descricao;
    }
    get quantidade() {
        return this.#quantidade;
    }
    set novoproduto(novo_produto) {
        this.#produto = novo_produto;
    }
    set novaquantidade(novaQuantidade) {
        this.#quantidade = novaQuantidade;
    }
    obterSubtotal() {
        let subtotal = this.#produto.valor * this.quantidade;
        return subtotal;
    }
}
class Pedido {
    #itens;
    #valor_total;
    constructor() {
        this.#itens = [];
        this.#valor_total = 0;
    }
    get itens() {
        return this.#itens;
    }
    set novo_valorTotal(novo_vt) {
        this.#valor_total = novo_vt;
    }
    set novoitem(novo_item) {
        this.#itens.push(novo_item);
    }
    obterItens() {
        return this.#itens.map(item => ({
            id: item.id,
            descricao: item.produto,
            quantidade: item.quantidade,
        }));
    }
    adicionarItem(item) {
        if (item) {
            this.#itens.push(item);
            this.#valor_total += item.obterSubtotal();
        }
        else {
            return false;
        }
        return true;
    }
    obterTotal() {
        return {
            valor: this.#itens.reduce((soma, item) => soma + item.obterSubtotal(), 0) // reduce para iterar, começa com o valor 0
        };
    }
}
class Carrinho {
    #pedido;
    #cupom;
    constructor(pedido, cupom) {
        this.#pedido = pedido;
        this.#cupom = cupom;
    }
    set cupom(valor_cupom) {
        this.#cupom = valor_cupom;
    }
    obterCarrinho() {
        return this.#pedido.obterItens();
    }
    // - adicionar um item ao carrinho
    adicionarItem(item) {
        if (item) {
            this.#pedido.adicionarItem(item);
            return true;
        }
        else {
            return false;
        }
    }
    ;
    // - aumentar ou diminuir a quantidade de um item
    alterarQtd(id, nova_qtd) {
        let item = this.#pedido.itens.find(produto => produto.id === id);
        if (item) {
            let subtotal = item.obterSubtotal();
            item.novaquantidade = nova_qtd;
            let novo_subtotal = item.obterSubtotal();
            this.#pedido.novo_valorTotal += (subtotal - novo_subtotal);
        }
    }
    // - remover um item
    removerItem(id) {
        let id_item = this.#pedido.itens.findIndex(produto => produto.id === id); // findIndex retorna o numero ao inves do objeto (caso do find)
        if (id_item !== -1) {
            this.#pedido.itens.splice(id_item, 1); // splice para remover apenas 1 item a partir do indice
            return true;
        }
        return false;
    }
    // - aplicar um cupom de desconto que deve diminuir o valor a ser pago
    aplicarCupom(valor_cupom) {
    }
}
// Produtos
let sushi = new Produto(1, 10, 'Sushi clássico: Arroz japones, alga, salmão');
let temaki = new Produto(2, 22, 'Temaki clássico: Alga, arroz japones, pedaços de salmão');
let yakisoba = new Produto(3, 25, 'Yakisoba clássico: Macarrão, legumes');
// ItemPedido
let itemp1 = new ItemPedido(1, sushi, 2);
let itemp2 = new ItemPedido(2, temaki, 1);
// Pedido
let ped1 = new Pedido();
ped1.adicionarItem(itemp1);
// console.log(ped1.itens);
let car1 = new Carrinho(ped1, undefined);
console.log(car1.adicionarItem(itemp2));
car1.alterarQtd(2, 3);
console.log(car1.removerItem(1));
console.log(ped1.obterTotal());
console.log(car1.obterCarrinho());
