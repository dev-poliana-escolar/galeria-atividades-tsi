# AULA SOBRE TUPLAS, DICIONARIO 01/07

## Tuplas

São imutáveis, seus valores são acessados como listas.
Exemplo:

```python
nome = ("poliana", "burra")
print(nome[1])
```

- Desempacotamento:
    ```py
    tuplas = (1,2,3)
    a,b,c = tuplas # a = 1, b = 2, c= 3

    ```
    - Parcial
    ```py
    v1, *resto = (1,2,3,4) # v1 = 1 , resto =[2,3,4]
    ```

    - Looping:
    ```py
    lista_tuplas = [(1,2), (3,4)]
    for x,y in lista_tuplas:
        print(f"x:{x}, y:{y}")
    ```

    - **Dicionarios**
    Tem duas formas, com os itens e chaves e só com as chaves


## Dicionário

Armazena valores em pares de **chave-valor**, cada chave é **única**. São mutáveis (podem ser alterados, removidos e adicionados).
Sintaxe:

```py
meudicionario= {
    chave1: valor1,
    chave2: valor2,
    chave3: valor3

}

```

- Manipulação de dicionários acontecem por meio da chave 
    - É possível criar e alterar chaves de forma direta no dic.

        ```py
        meu_dicionario["casa"] = "bonita
        ```
    - Para remover uma chave:
        ```py
        del meu_dicionario["casa"]
        ```
        Remove a chave "_casa_" e seu valor do dicionário 

## Conjuntos

Coleção não ordenada, possui valores distintos. É mutável

```py
meu_conjunto{item1,item2}
```

- Para remover:
    ```py
    meu_conjunto.remove(item1)
    ```


## Desempacotamento em troca de variaveis

```py
a = 10
b = 20

print(f"Antes: a={a} e b={b}") #Saída:Antes: a=10 e b=20
a, b = b, a # Troca os valores
print(f"Depois: a={a} e b={b}")
```

## 



