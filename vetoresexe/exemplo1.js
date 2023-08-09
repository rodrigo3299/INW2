const leia = require ("prompt-sync")()

let matriculas = ["mat01","mat02","mat03","mat04"]

let nome = ["Marcos","Pedro","Maria","Paulo"]

let notas = [0,0,0,0]

console.log("MAT\tNOME\tNOTAS")

for(let i=0;i<matriculas.length;i++){

    console.log(matriculas[i]+'\t'+nome[i]+'\t'+notas[i]+'\t')

}

auxmat = leia("Digite a matricula aqui : ").toUpperCase()
console.log(auxmat)
console.log("Digitação de notas")

for(let i=0; i<matriculas.length; i++){

    console.log(matriculas[i]+'\t'+nome[i]+'\t')

    notas[i] = leia("Digite a nota dos alunos: ")

}