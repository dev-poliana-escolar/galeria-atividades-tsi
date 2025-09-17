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


