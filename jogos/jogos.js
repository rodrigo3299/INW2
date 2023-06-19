const leia = require("promt-sync")()




let aluno1, aluno2

let nota1, nota2




aluno1 = leia("Digite o nome do aluno 1: ")

aluno2 = leia("Digite o nome do aluno 2: ")

nota1 = parseInt(leia("Digite a nota do aluno 1:"))

nota2 = parseInt(leia("Digite a nota do aluno 2:"))




    if(nota1 < 5){

        console.log(aluno1+"está reprovado com nota"+nota1)    

}

    else{

        console.log(aluno1+"está aprovado com nota"+nota1)

}




    if(nota2 < 5){

        console.log(aluno2+"está reprovado com nota"+nota2)    

    }

    else{

        console.log(aluno2+"está aprovado com nota"+nota2)

    }

