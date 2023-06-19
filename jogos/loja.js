const leia = require("prompt-sync")()

let codigos =["P01","P02","P03","P04"]
let produtos =["Camisa","Calça","Saia","Short"]
let precos=[0,0,0,0]

console.log("Cod\tProduto\tPreços")
for(let i=0; i<codigos.length; i++){
    console.log(codigos[i]+'\t'+produtos[i]+'\t'+precos[i])
}
console.log("Digitação de valores")
for(let i=0; i<codigos.length; i++){
    console.log(codigos[i]+'\t'+produtos[i])
    precos[i] = leia("Digite o valor do produto : ")
}
console.log("Cod\tProduto\tPreços")
for(let i=0; i<codigos.length; i++){
    console.log(codigos[i]+'\t'+produtos[i]+'\t'+precos[i])
}
console.log("Cod\tProduto\tPreços")
for(let i=0; i<codigos.length; i++){
    console.log(codigos[i]+'\t'+produtos[i]+'\t'+precos[i])
}
console.log("Alteração de Dados")
let codigo = leia("Digite o codigo do produto que deseja troca o nome : ")
console.log("Cod\tProduto\tPreços")
for(let i=0; i<codigos.length; i++){
    if(codigo == codigos[i])
    console.log("nome atual do Produto"+produtos[1])
    produtos[i] = leia ("Digite o novo nome ")
}