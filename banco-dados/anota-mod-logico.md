# modelo logico

É um sgbd relacional,e é composto por tabelas; Dependente de uma implementação sgbd.

- atonomo (um campo não pode ser fomado por outros campos)
- monovalorado (um campo possui apenas um valor)

---

## Chaves

Serve para estabelecer relacionamentos e para recuperar informações.
1. primary key:  a chave pode ser formada por **um campo** ou **combinação mínima**
2. foreign key: tem a mesma configuração da primary key, mas ela deve ser referencia de uma primary key
3. alternative key: mais de um campo pode servir para distinguir um registro

---

# Dominio de campo

são tipos de valores que podem ser inseridos em um campo da tabela
- alfanumerico, numerico, boolean, data, hora
Deve definir se ele **podera ou não receber** "valores vazios"

> Existem varios tipos de dominio, vou só anotar os que não possuo conhecimento aprofundados

### Alguns tipos

1. DECIMAL(p,s) ou NUMERIC (p,s): Armazena números com precisão e escala
exatas.exatas. p é a precisão (quantidade total de dígitos) e s é a escala (número de
dígitos após a vírgula). Ideal para valores financeiros.

2. BINARY LARGE OBJECT (ou BLOB): Armazena grandes quantidades de dados binários,
tais como imagens, PDF, arquivos de áudio, etc. 
