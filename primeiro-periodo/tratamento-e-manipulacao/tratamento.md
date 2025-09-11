# Tratamento de Exceções

Lidar com possíveis erros durante a execução.

```python
try:
    arquivo = open("dados.txt")
    print(arquivo.read())
except FileNotFoundError:
    print("Arquivo não encontrado.")
```

- `try`: Força a execução.
- `except <nome do erro>`: Exibe a mensagem de erro.

- Outras alternativas:
```python
try:
    x = int(input("Digite um número: "))
    y = 10 / x
except ValueError: # Captura erro de conversão de tipo
    print("Erro: valor inválido.")
except ZeroDivisionError: # Captura erro de divisão por zero
    print("Erro: divisão por zero.")
except Exception as erro: # Captura qualquer outro erro
# erro é uma variável que contém a mensagem de erro
    print(f"Erro inesperado: {erro}")
```

1. Blocos `else` e `finally`

```python

try:
    f = open("dados.txt")
except FileNotFoundError:
    print("Arquivo não existe.")
else:
    print(f.read())
    f.close()
finally:
    print("Finalizando operação.")
```

- Os blocos else e finally são opcionais:
    - else: sempre deve vir abaixo de todos os excepts
    - finally: último blobo a ser inserido
