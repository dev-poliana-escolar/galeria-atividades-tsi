// declara constantes e associado a um numero
enum Marca {
    VW, Toyota, Ford
}

// declara constantes e associado a um texto
enum Curso{
    TSI = 'Tecnologia em Sistemas para Internet',
    INFO = 'Técnico em Informática',
}

let estudantes : any [] = ["Ana", Curso.TSI]
console.log(estudantes)