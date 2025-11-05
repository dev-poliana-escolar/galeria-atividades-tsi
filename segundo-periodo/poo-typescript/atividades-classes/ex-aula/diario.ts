
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

    getMediaParcial(){
        if(this.#primeira_nota && this.#segunda_nota != 0){
            this.#media_parcial = ((this.#primeira_nota *2) + (this.#segunda_nota*3))/5
            
            return this.#media_parcial
        }else{
            return undefined
        }
    }

    getMediaFinal(){
        if (this.#media_parcial){
            if (this.#media_parcial>=60){
                let situacao_final = this.#situacao_estudante = Situacao.aprovado

                return situacao_final

            }else if(this.#media_parcial>=10){
                let situacao_final = this.#situacao_estudante = Situacao.prova_final

                return situacao_final

            }

            return this.#media_final = this.#media_final
        }else{
            return "nao tem parcial"
        }
    }

}

let reg_um = new RegistroNotas("Poliana", '202546777', 70,2)
console.log(reg_um.getMediaParcial())
console.log(reg_um.getMediaFinal())



class Diario{
   #nome_disciplina : string;
   #docente: string;
   #turno : Turno;
   #curso : string;
   #codigo_turma : string;
   #qtd_aula : number;
   #registro_notas : RegistroNotas[]

   constructor(nomedisciplina:string, docente:string, turno:Turno, curso: string, cod_turma: string, qtd_aula:number, registro_notas : RegistroNotas[]){
    this.#nome_disciplina= nomedisciplina;
    this.#codigo_turma= cod_turma;
    this.#docente= docente;
    this.#curso=curso;
    this.#turno = turno;
    this.#qtd_aula= qtd_aula;
    this.#registro_notas= registro_notas;
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

}