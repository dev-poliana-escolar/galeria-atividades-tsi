/*

Crie uma classe Exemplar que representa exemplar(res) de livros registrados em uma biblioteca 
com os atributos :

isbn (código que identifica o livro de forma única), 
título (o título do livro, para simplificar), 
cdd (código que identifica o lugar onde está o exemplar na biblioteca) e a 
quantidade de exemplares. 


3. (extra. Tentem fazer!) Crie uma classe Biblioteca e cadastre 5 (cinco) exemplares (questão 2) de 2 (dois) livros. 
A biblioteca deve ter métodos para 
adicionar um exemplar à biblioteca;
obter todos os exemplares cadastrados;
obter um exemplar cadastrado dado o seu cdd.


*/


class Biblioteca{
   
    livros: Exemplar[]  //cada livro é um objeto do tipo Exemplar q é um array

    // começa sem nenhum exemplar
    constructor(exemplares : Exemplar[] = []){
        this.livros = exemplares;
    }

    // cada novo livro é um exemplar
    adicionarExemplar(novoLivro : Exemplar){
        this.livros.push(novoLivro); 
    }

    obterExemplares(){
        return this.livros
    }

    obterExemplarCdd(cdd : number){
        return this.livros.find(exemplar => exemplar.cdd === cdd ); // da lista livros procure( retorne exemplar se exemplar.cdd === cdd)
    }

}



class Exemplar{
    isbn: number;
    cdd:number;
    titulo: string;
    qtd: number;
   

    constructor(isbnExemplar:number, cddExemplar:number,tituloExemplar:string,qtdExemplar:number){
        this.isbn=isbnExemplar;
        this.cdd= cddExemplar;
        this.titulo = tituloExemplar;
        this.qtd = qtdExemplar;
    }

}

// Criar biblioteca

let nisiafloresta = new Biblioteca();


// Criar livros
let livro1 = new Exemplar(12, 3,'Mulheres que correm com os lobos', 4);
let livro2 = new Exemplar(123, 128,'Vidas Secas', 10);
let livro3 = new Exemplar(23, 8,'Noites Brancas', 6);
let livro4 = new Exemplar(54, 23,'Harry Potter', 12);
let livro5= new Exemplar(899, 32, 'Frankeinstein', 5);

// Adiciona-los a biblioteca

nisiafloresta.adicionarExemplar(livro1);
nisiafloresta.adicionarExemplar(livro2);
nisiafloresta.adicionarExemplar(livro3);
nisiafloresta.adicionarExemplar(livro4);
nisiafloresta.adicionarExemplar(livro5);


// Imprimir

console.log('Livros:')
console.log(nisiafloresta.obterExemplares())
console.log("------")
console.log(nisiafloresta.obterExemplarCdd(3));
