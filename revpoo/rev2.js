// o usuario vai digitar 3 numeros
// 1 - mostrar o somatorio destes numeros
// 2 - mostrar qual foi o maior numero digitado
// 3 - colocar os numeros digitados em ordem decrescente
// 4 - o programa para de solicitar numeros quando
// o usuario digitar um numero negativo
// a soma dos numeros não dever considerar o numero negativo

const leia = require("prompt-sync")()

let total = 0 
let maiornum = 0 
let num = 0 
let contador = -1

do{
    
    total = total + num
    if(num>maiornum){
        maiornum = num
    }
    contador++
    num = parseInt(leia("Digite um numero   : "))
}while( num > 0 )
console.log("Total : "+total)
console.log("Maior numero : "+maiornum)
console.log("Quantidade de numeros :"+contador)