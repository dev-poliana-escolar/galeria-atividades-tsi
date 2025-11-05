"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Turno;
(function (Turno) {
    Turno["matutino"] = "Matutino";
    Turno["vespertino"] = "Vespertino";
    Turno["noturno"] = "Noturno";
})(Turno || (Turno = {}));
var Situacao;
(function (Situacao) {
    Situacao["cursando"] = "Cursando";
    Situacao["trancado"] = "Trancado(a)";
    Situacao["cancelado"] = "Cancelado";
    Situacao["aprovado"] = "Aprovado(a)";
    Situacao["prova_final"] = "Prova Final";
    Situacao["reprovado"] = "Reprovado(a)";
})(Situacao || (Situacao = {}));
class RegistroNotas {
    #nome_estudante;
    #matricula;
    #situacao_estudante = Situacao.cursando;
    #primeira_nota;
    #segunda_nota;
    #media_parcial = undefined;
    #media_final = undefined;
    constructor(nome_est, matricula, notaUm, notaDois) {
        this.#nome_estudante = nome_est;
        this.#matricula = matricula;
        this.#primeira_nota = notaUm;
        this.#segunda_nota = notaDois;
    }
    set nomeEstudante(novo_estudante) {
        this.#nome_estudante = novo_estudante;
    }
    set matricula(nova_matricula) {
        this.#matricula = nova_matricula;
    }
    set primeira_nota(nova_nota_um) {
        this.#primeira_nota = nova_nota_um;
    }
    set segunda_nota(nova_nota_dois) {
        this.#segunda_nota = nova_nota_dois;
    }
    getMediaParcial() {
        if (this.#primeira_nota && this.#segunda_nota != 0) {
            this.#media_parcial = ((this.#primeira_nota * 2) + (this.#segunda_nota * 3)) / 5;
            return this.#media_parcial;
        }
        else {
            return undefined;
        }
    }
    getMediaFinal() {
        if (this.#media_parcial) {
            if (this.#media_parcial >= 60) {
                let situacao_final = this.#situacao_estudante = Situacao.aprovado;
                return situacao_final;
            }
            else if (this.#media_parcial >= 10) {
                let situacao_final = this.#situacao_estudante = Situacao.prova_final;
                return situacao_final;
            }
            return this.#media_final = this.#media_final;
        }
        else {
            return "nao tem parcial";
        }
    }
}
let reg_um = new RegistroNotas("Poliana", '202546777', 70, 2);
console.log(reg_um.getMediaParcial());
console.log(reg_um.getMediaFinal());
class Diario {
    #nome_disciplina;
    #docente;
    #turno;
    #curso;
    #codigo_turma;
    #qtd_aula;
    #registro_notas;
    constructor(nomedisciplina, docente, turno, curso, cod_turma, qtd_aula, registro_notas) {
        this.#nome_disciplina = nomedisciplina;
        this.#codigo_turma = cod_turma;
        this.#docente = docente;
        this.#curso = curso;
        this.#turno = turno;
        this.#qtd_aula = qtd_aula;
        this.#registro_notas = registro_notas;
    }
    set nomeDisciplina(nomedisciplina) {
        this.#nome_disciplina = nomedisciplina;
    }
    set docente(novoDocente) {
        this.#docente = novoDocente;
    }
    set turno(novoTurno) {
        this.#turno = novoTurno;
    }
    set curso(novoCurso) {
        this.#curso = novoCurso;
    }
}
