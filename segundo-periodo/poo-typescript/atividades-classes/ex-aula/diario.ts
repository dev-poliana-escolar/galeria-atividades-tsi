
enum Turno{
    matutino = "Matutino",
    vespertino = "Vespertino",
    noturno = "Noturno"
}

enum Situacao{
    cursando = "Cursando",
    trancado = "Trancado(a)",
    cancelado = "Cancelado",
    aprovado = "Aprovado(a)",
    prova_final = "Prova Final",
    reprovado = "Reprovado(a)"

}

class RegistroNotas{
    #nome_estudante : string;
    #matricula : string;
    #situacao_estudante : Situacao = Situacao.cursando;
    #primeira_nota : number;
    #segunda_nota: number;
    #nota_avaliacao_final : number | undefined;
    #media_parcial: number | undefined = undefined;
    #media_final: number | undefined = undefined;


    constructor(nome_est:string, matricula:string, notaUm:number, notaDois:number,){
        this.#nome_estudante=nome_est;
        this.#matricula=matricula;
        this.#primeira_nota= notaUm;
        this.#segunda_nota = notaDois; 
    }

    set nomeEstudante(novo_estudante:string){
        this.#nome_estudante= novo_estudante;
    }

    set matricula (nova_matricula:string){
        this.#matricula = nova_matricula;
    }

    set  primeira_nota(nova_nota_um :number){
        this.#primeira_nota= nova_nota_um;
    }

    set segunda_nota(nova_nota_dois:number){
        this.#segunda_nota = nova_nota_dois;
    }

    setSituacao(nova_situacao : Situacao.trancado | Situacao.cancelado){
        this.#situacao_estudante = nova_situacao
        return `Situação alterada para: ${this.#situacao_estudante}`;
    }


    getMediaParcial(){
        if(this.#primeira_nota != 0 && this.#segunda_nota != 0){
            this.#media_parcial = ((this.#primeira_nota *2) + (this.#segunda_nota*3))/5

            let situacao_final = this.#situacao_estudante;
            if (this.#media_parcial>=60){
                situacao_final = Situacao.aprovado

            }else if(this.#media_parcial>=10){
                situacao_final = Situacao.prova_final
            }else{
                situacao_final = Situacao.reprovado;
            }
            
            return {
                media_parcial: this.#media_parcial,
                situacao : situacao_final
            }
        }else{
            return undefined
        }
    }

    getMediaFinal(nota_final?: number) {
        this.getMediaParcial()

        if (this.#media_parcial === undefined) {
            return "Não tem média parcial";
        }

        let situacao_final: Situacao;
        let mf: number;

        if (this.#media_parcial >= 60) {
            this.#media_final = this.#media_parcial;
            situacao_final = Situacao.aprovado;

        } else if (this.#media_parcial >= 10) {
            if (nota_final === undefined) {
                this.#media_final = undefined;
                situacao_final = Situacao.prova_final;

            } else {
                mf = (nota_final + this.#media_parcial) / 2;
                this.#media_final = mf;

                if (mf >= 60) {
                    situacao_final = Situacao.aprovado;
                } else {
                    situacao_final = Situacao.reprovado;
                }
            }
        } else {
            this.#media_final = this.#media_parcial;
            situacao_final = Situacao.reprovado;
        }

        this.#situacao_estudante = situacao_final;
        this.#nota_avaliacao_final = nota_final

        return {
            media_final: this.#media_final,
            situacao: situacao_final,
            nota_prova_final : this.#nota_avaliacao_final
        };
    }


    getRegistros() {
        this.getMediaParcial()
        this.getMediaFinal(this.#nota_avaliacao_final)
        

        return{
        nome: this.#nome_estudante,
        matricula: this.#matricula,
        primeira_nota: this.#primeira_nota,
        segunda_nota: this.#segunda_nota,
        nota_prova_final : this.#nota_avaliacao_final ? this.#nota_avaliacao_final : '-',
        media_parcial: this.#media_parcial,
        media_final: this.#media_final ? this.#media_final : "-",
        situacao: this.#situacao_estudante
        }
    }


}

let reg_um = new RegistroNotas("Ana", '202546777', 70,70);
let reg_dois = new RegistroNotas("Alisson", '202546888', 80,2);
let reg_tres = new RegistroNotas("Tamires", '202546999', 20, 60);
let reg_quatro = new RegistroNotas("Pedro", '202546101', 65.8, 89);
let reg_cinco = new RegistroNotas("Hellen", '202546555', 80,76);

reg_um.getRegistros()
reg_tres.getMediaFinal(60)
reg_tres.getRegistros()


class Diario{
   #nome_disciplina : string;
   #docente: string;
   #turno : Turno;
   #curso : string;
   #codigo_turma : string;
   #qtd_aula : number;
   #registro_notas : RegistroNotas[]

   constructor(nomedisciplina:string, docente:string, turno:Turno, curso: string, cod_turma: string, qtd_aula:number, dados: RegistroNotas[]=[]){
    this.#nome_disciplina= nomedisciplina;
    this.#codigo_turma= cod_turma;
    this.#docente= docente;
    this.#curso=curso;
    this.#turno = turno;
    this.#qtd_aula= qtd_aula;
    this.#registro_notas = dados;
   }

   set nomeDisciplina(nomedisciplina:string){
    this.#nome_disciplina = nomedisciplina;
   }

   set docente(novoDocente:string){
    this.#docente = novoDocente;
   }

   set turno(novoTurno:Turno){
    this.#turno= novoTurno;
   }

   set curso(novoCurso:string){
    this.#curso= novoCurso;
   }  

   adicionarRegistros(novo_registro : RegistroNotas){
    this.#registro_notas.push(novo_registro);
   }

   obterRegistros(){
    return this.#registro_notas.map((registro) => registro.getRegistros());
}

   exibirDiario(){
    const registros = this.#registro_notas
    .map(r => { //.map() serve para transformar cada item de um array em algo novo, sem alterar o original
      const dados = r.getRegistros();
      return `${dados.nome} (${dados.matricula}) - Média: ${dados.media_final ?? '-'} | Situação: ${dados.situacao}`;
    })
    .join('\n');
    return`------------\nDisciplina: ${this.#nome_disciplina}\n------------\nCódigo da Turma: ${this.#codigo_turma}\nTurno: ${this.#turno}\nCurso: ${this.#curso}\n------\nQuantidade de aulas: ${this.#qtd_aula} - Docente: ${this.#docente}\n--------------------\nREGISTROS DE NOTAS\n----\n${registros}`
   }

}

let diarioUm = new Diario("Programação Orientada a Objetos", "Bruno",Turno.vespertino, "TSI", "2025", 120)
diarioUm.adicionarRegistros(reg_um);
diarioUm.adicionarRegistros(reg_dois);
diarioUm.adicionarRegistros(reg_tres);
diarioUm.adicionarRegistros(reg_quatro);
diarioUm.adicionarRegistros(reg_cinco);

console.log(diarioUm.exibirDiario())



