# O que é o arquivo CSV?

Comma-Separated Values (Valores sepados por vírgulas)
- Armazena dados (Tabulas --> linhas e colunas)
- Para sistemas de exportação/importação de dados.
- Manipulado pelo módulo csv do Python.

Exemplo:
- Considere `alunos.csv`
```python
id, nome, idade,curso, media
1, Ana Souza, 21,Engenharia,8.5
2, Bruno Lima, 22,Direito,7.8
3, Carla Mendes, 20,Medicina,9.2

```
Formato:
1. Cabeçalho
2. Registros
3. Campos separados por vírgula

### 1. Lendo um `csv`: reader

```python
import csv

with open("alunos.csv", newline='',encoding='utf-8') as file:

    # Lendo arquivo texto com o método reader
    leitor = csv.reader(file) # cada linha será uma lista de string
    for linha in leitor:
    print(linha) # imprime cada linha como uma lista de string
```

- `newline=`: usado para evitar problemas com quebra de linha.


### 2. Lendo um `csv`: DictReader

```python
import csv

# Lendo arquivo texto com o método DictReader
with open("alunos.csv", newline='', encoding='utf-8') as file:

    leitor = csv.DictReader(file)

    for linha in leitor:
        print(f"{linha['nome']} está cursando {linha['curso']} " + f"com média {linha['media']}")
```

- Cada linha é transformada em um dict, com **chaves** (nomes das colunas) e os **valores**

- Em campos com valores numericos devem ser convertidos, pois tudo é uma string

### 3. Escrita com listas: `csv.writer`

- Escreve linha por linha: 
    1. writerow(lista): Escreve uma única linha no CSV (uma lista).
    2. writerows(listas) Escreve várias linhas de uma vez no CSV (uma lista de listas).

```python
dados = [
["id", "nome", "idade"],
[1, "Ana", 21],
[2, "Bruno", 22]
]

# Escrita em arquivo CSV com o método writer
with open("saida.csv"
,
"w"
, newline=
''
, encoding='utf-8') as file:

escritor = csv.writer(file)
escritor.writerows(dados)
```

### 4. Escrita com dicionarios: `csv.DictWriter`

Cada linha como um dicionário, onde as chaves
correspondem às colunas.

1. writeheader(): Escreve a linha de cabeçalho (nomes das colunas).
2. writerow(dicionario): Escreve uma linha, usando as chaves do dicionário como colunas.
3. writerows(lista_dicts): Escreve várias linhas de uma vez, recebendo uma lista de dicionários.


```python
dados = [
{"id": 1, "nome": "Ana", "idade": 21},
{"id": 2, "nome": "Bruno", "idade": 22}
]

# Escrita em arquivo CSV com o método DictWriter
with open("saida.csv"
,
"w"
, newline=
''
, encoding='utf-8') as f:

campos = ["id", "nome", "idade"] # Define os campos do CSV – cabeçalho ou campos = dados[0].keys
escritor = csv.DictWriter(f, fieldnames=campos)
escritor.writeheader() # Escreve o cabeçalho no arquivo
escritor.writerows(dados) # Escreve as linhas de dados no arquivo
```

