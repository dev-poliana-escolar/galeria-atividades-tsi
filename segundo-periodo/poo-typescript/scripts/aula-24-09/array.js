"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// declara constantes e associado a um numero
var Marca;
(function (Marca) {
    Marca[Marca["VW"] = 0] = "VW";
    Marca[Marca["Toyota"] = 1] = "Toyota";
    Marca[Marca["Ford"] = 2] = "Ford";
})(Marca || (Marca = {}));
// declara constantes e associado a um texto
var Curso;
(function (Curso) {
    Curso["TSI"] = "Tecnologia em Sistemas para Internet";
    Curso["INFO"] = "T\u00E9cnico em Inform\u00E1tica";
})(Curso || (Curso = {}));
let estudantes = ["Ana", Curso.TSI];
console.log(estudantes);
