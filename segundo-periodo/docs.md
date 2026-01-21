---
marp: true


---

# Paradigmas de programação
- Imperativo ou estruturada
- **Orientada a Objetos**

---

### O que é um objeto? 
É uma representação de algum conceito da vida real. Possuem características em comum 

- Abstração de objetos reais 

> São compostos por estados e comportamentos (atributos e métodos) \
> Objeto --> dados --> métodos

---

# Programação orientada a objeto

- Abstração: pensar o programa em termos classe e objetos
    - Quais são os problemas importantes e quais podem ser ignorados?

## Classes

É um molde para se criar objetos, que são representação concretas (instância) de uma classe

---
Exemplo: 

```ts
class nomeClase{
    atributo1: tipo;
    atributo2: tipo;

    constructor(p1 : tipo, p2 :tipo){
        this.atributo1 =p1
        this.atributo1 =p2

    }

    metodo(p1,p2) : tipo {
        return valor
    }
}
```

- Construtor: responsável por fornecer um valor inicial aos atributos do objeto
    - Pode ter ou não parametros
    - Não tem retorno
> Deixar o objeto em um estado inicial válido/consistente
   
---

## Relacionamentos

Todo programa é compostos por objetos que se relacionam entre em si.

### Tipos de relacionamentos
1. Associação
2. Agregação
3. Composição
4. Herança

#### Associação
Indica algum relacionamento de utilicação de um objeto. A não depende de B.
Exemplo: Trem existe sem a Estrada de ferro, mas utiliza os trilhos

- Multiplicidade de associações (Cardinalidade)

#### Agregação

Indica que uma classe é parte de outra classe.
> Representado por um losango vazio, junto a classe do lado do todo
Exemplo: Farol faz parte da locomotiva (Locomotiva <>---> Farol)

---

#### Composição
É uma agregação mais forte. Um objeto é **parte** essencial de outra classe
> Representado por um losango preenchido de preto
Exemplo: O trem não existe sem os vagões (Trem <.>---> Vagões)

#### Herança 
Um objeto é um (sub)tipo de outro.
1. Aproveitamento de atributos e métodos.
Exemplo:
```
Animal
|--> Mamifero
    |--> Humano
    |--> Baleia

```

- Para herdar de uma classe para outra
```ts
class NomeSubclasse extends NomeSuperclasse
```
```ts
class Poligono{
    protected numLados : number;
    constructor(){
        this.numLados = 0
    }

    obterNumeroLados(){
        return this.numLados
    }

classs Triangulo extends Poligono{
    constructor(){
        super()
        this.numLados = 3
    }
}

let tri1: Triangulo = new Triangulo();
```

- Conceito de **polimorfismo**.

---

# Abstração em POO

## Interface 
Versão mais simples de uma classe. Não há necessidade de ter um construtor.
É apenas para especificar propriedades e métodos sem fornecer a implementação.

---

Exemplo:

```ts
interface Animal {
  nome: string;
  emitirSom(): void; // Método que as classes devem implementar
}

// Classe que implementa a Interface
class Passaro implements Voador, Animal {
  nome: string;
  constructor(nome: string) {
        this.nome = nome; 
    }
  emitirSom() { console.log("Piu Piu"); }
  voar() { console.log("Voando alto!"); }
}

```
--- 
## Explicando conceitos gerais

1. `Classe`: Define um tipo de dados. Possui atributos e metodos. Base para a criação dos 
2. `Interface`: Define um contrato que deve ser seguido para a implementação de uma classe
3. `Type`: Quando se quer apenas definir uma estrutura para receber informações externas ou uma lista de constantes (como um enum)

Exemplo de `type`:
```ts
export type Curso = 'TSI' | 'REDES' | 'MECA' 

```






