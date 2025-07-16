# Manipulação de arquivo de texto e tratamento de exceções

O Python oferece funções integradas para manipulação de texto.
- Lembre de fechar depois de abrir um arquivo: `close()`
- Existem uma serie de parametros
    - Função open()
        -Parametros: `<nome do arquivo>`,`<modo de abertura>`, `<codificação do texto>` (opcional)
        - Modos de abertura: r, w, a, x (cria novo arquivo; se existe, vai dar erro)

    ```python
    arquivo = open("meu_arquivo.txt","w", encoding="utf-8")

    arquivo.write("Texto inserido") # sobrescreve o conteúdo, caso exista
    arquivo.close() # sempre feche o arquivo após o encerramento do uso

    ```
### Lendo um arquivo "r"
    1. .read()
    2. .readlines()
    3. .readlines()

### Escrevendo em um arquivo "w"

    1. .writeline(): string unica
    2. .writelines(): uma lista de strings

### Adicionando em um arquivo "a"
- Caso o arquivo não exista, ele será criado
- Permite adicionar novos dados ao final do arquivo, sem apagar o conteúdo existente.

### Adicionando em um arquivo “x”
- Caso o arquivo exista, será gerado um erro
- Permite adicionar novos dados ao final do arquivo, sem apagar o
conteúdo existente.

***

## Método `with()` para gerenciar arquivos

- Garante fechamento automático do arquivo, mesmo em caso de erro.

```python
with open("dados.txt", "x", encoding="utf-8") as arquivo:

    print(arquivo.read())
```
    

### Boas práticas com arquivos

1. Especifique com o `enconding` para evitar problemas
2. Use o gerenciador de contexto `with`, ao invés de `open()`e `close()`

