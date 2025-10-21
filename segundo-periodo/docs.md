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

