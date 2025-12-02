"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test = require("node:test");
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
}
class ItemPedido {
    #produto;
    #quantidade;
    constructor(produto, quantidade) {
        this.#produto = produto;
        this.#quantidade = quantidade;
    }
    get produto() {
        return this.#produto;
    }
    get quantidade() {
        return this.#quantidade;
    }
    obterSubtotal() {
        let subtotal = this.produto.valor * this.quantidade;
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
    get itens() { return this.#itens; }
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
        this.#valor_total;
        return { valor: this.#valor_total };
    }
}
// Produtos
let sushi = new Produto(1, 10, 'Arroz japones, alga, salmão');
let temaki = new Produto(2, 22, 'Alga, arroz japones, pedaços de salmão');
let yakisoba = new Produto(3, 25, 'Macarrão, legumes');
// ItemPedido
let itemp1 = new ItemPedido(sushi, 2);
// Pedido
let ped1 = new Pedido();
console.log(ped1.adicionarItem(itemp1));
console.log(ped1.obterTotal());
