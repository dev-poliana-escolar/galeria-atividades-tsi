# AULA SOBRE TUPLAS, DICIONARIO 01/07

## Tuplas

São imutáveis, seus valores são acessados como listas.
Exemplo:

```python
nome = ("poliana", "burra")
print(nome[1])
```

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




