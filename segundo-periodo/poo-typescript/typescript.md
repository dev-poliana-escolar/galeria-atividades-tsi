
# Anotações

Não roda normalmente. É preciso traduzir um código TS em um JS.

- Precisa do Node.js. 

Comandos:

```bash
npm -v  # ver versao
npm i -g npm # instalar globalmente/ atualizar npm
npm i -g typescript # instalar o typescript
tsc -v # verifique se você possui o compilador do ts

```

Adicione uma nova variavel global: `%USERPROFILE%\AppData\Roaming\npm`
> Normalmente, estão localizado os arquivos neste caminho

---

Para compilar um código : `tsc <nomedoarquivo>.tsc`
Para executar um codigo: `node <nomedoarquivo>.js`

Toda via, crie um arquivo `tsconfig.json` com o comando: `tsc -init`.
Depois, para compilar automaticamente: `tsc -w`

---

# Tipos em TypeScript  `data: (24/09)`
| Tipo | Declaração | Observação |
| :--  | :-- | :-- |
| number | `let numero : number = 0` |
| string | `let palavra : string = ''`|
| boolean: |`let logico : boolean = false`
| array |`let precos : number[] =  [23, 56]` ou `let lista : <Array><string> = ["palavra", "palavra-dois"]`| com JS: `let aprender = new Array();` |
|tupla |  `let aluno: [string, string, number];`| Inicialização deve ser na mesma ordem de tipos da declaração `aluno = ['José', 'Informática', 20129939292];` |

- **enum** 
    - são enumerações \
    Exemplo:

        ```ts
        // declara constantes e associado a um numero
            enum Marca {
                VW, Toyota, Ford
            }

            // declara constantes e associado a um texto
            enum Curso{
                TSI = 'Tecnologia em Sistemas para Internet',
                INFO = 'Técnico em Informática',
            }

            let estudantes : any [] = ["Ana", Curso.TSI]
            console.log(estudantes)
        ```

> Declaração de variável `let` torna a variável
local ao escopo do seu bloco (valor entre { }) ou módulo. O uso de `var` permite que a variável seja visível fora do seu escopo.
---

Exemplo de código:
```ts
let notas : number[] = [89, 89, 67];

let media = 0;

notas.forEach(n => {
    media = media+n;
});

console.log(`Média da turma: ${media/notas.length}`);
```

### Outras palavras para tipos

- any
    - Qualquer tipo. O mesmo que deixar sem tipar
    - Pode ser útil para declarar arrays como valores de diversos
    tipos
    - Pode ser usado para gradativamente adotar tipos
- undefined
    - Variável ou atributo sem valor definido
- void
    - Sem tipo. Geralmente usado para dizer que uma função ou método não retornam nada


## User input (terminal)

1. `npm i readline-sync @types/node`
```ts 
    //Modificar o tsconfig.json:
    "types": ["node"]

   // Usar a biblioteca:
    const read = require('readline-sync')
    const b1 = read.question('Bim1: ') 
    const b2 = read.question('Bim2: ')

```



