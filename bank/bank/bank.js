class Conta{               
constructor(numero,cpf,saldo,ativo){                
this.numero = numero;               
this.cpf = cpf;             
this.saldo = saldo;             
this.ativo = ativo              
}               
                    
ativar(){               
this.ativo = true;              
}               
                    
credito(valor){             
if (this.ativo){                
if(valor<0){                
console.log("Impossivel realizar, valor negativo")              
}               
else if(valor==0){              
 console.log("Impossivel realizar, valor zerado...")             
}               
else {              
this.saldo = this.saldo + valor            
}               
}               
else {              
console.log("Conta inativa....")                
}               
}               
                    
debito(valor){              
if (this.ativo){                
if(valor<0){                
console.log("Impossivel realizar, valor negativo...")               
}               
else if(valor ==0 ){                
console.log("Impossivel realizar, valor zerado...")             
}               
else if (this.saldo<valor){             
console.log("Impossivel realizar, saldo indisponivel...")               
}               
else {              
this.saldo = this.saldo - valor           
}               
}               
else {              
console.log("Conta inativa...")             
}               
}               
                    
}   
    
class Poupança extends Conta {
constructor(numero,cpf,saldo,ativo,diaAniversarioConta){
super(numero,cpf,saldo,ativo);
this.diaAniversarioConta = diaAniversarioConta
}
correcao(dia){
if(dia == this.diaAniversarioPoupanca){
this.credito(this.saldo*0.05)
}
 console.log("Saldo atual conta R$ ; "+this.saldo)
}
}
const leia = require("prompt-sync")()
let op=""
let opcao = ""
let valor = 0
do{
    console.log("1 - CONTA POUPANCA")
    console.log("2 - CONTA CORRENTE")
    console.log("3 - CONTA ESPECIAL")
    console.log("4 - SAIR")
    op = leia("Digite o numero da sua opção : ")


if(opcao == "1"){
 console.log("CONTA POUPANCA")
let numero = leia("Digite o numero da conta :")
let cpf = leia("Digite o cpf da conta : ")
let diaAniversarioConta= leia ("Digite o dia do aniversario da conta")
let cp1 = new Poupanca(numero,cpf,0,false,diaAniversarioConta)
let op=""
let valor = 0 
for (let x =1; x<=10; x++){
valor = leia("Digite o valor :")
op = leia ("Digite D Debito ou C Credito : ")
if(op=="D"){
cp1.debito(valor)
} else if (op=="C"){
cp1.credito(valor)
}
console.log("Saldo atual R$ ; "+cp1.saldo)
}
valor =parseInt(leia("usar limite ? Valor : "))
cp1.usarPoupanca(valor)
console.log("Saldo Final : " +cp1.saldo)


}
else if(opcao == "2"){
console.log("Testando conta corrente")
}
else if(opcao == "3"){
console.log("Testando conta corrente")
}
else if(opcao == "4"){
console.log("Testando conta corrente")
}
else if(opcao == "5"){
console.log("Saindo do programa....")
}
else {
console.log("Digitaçao invalidada")
}
} while(opcao != "5"){
console.log("Fim do programa volte sempre")
}

//let numero = parseInt(leia("Digite o numero da conta : "))              
//let cpf = leia("Digite o cpf da conta : ")              
//let c1 = new Conta(numero,cpf,0,false)              
//let op=""               
//let valor = 0               
//c1.ativar()             
//for (let x=1; x<=10; x++){              
//console.log("Movimento : "+x)               
//console.log("Saldo atual conta : "+c1.saldo)                
//op = leia("Digite D - debito ou C para credito : ")             
//if(op=="D"){                
//valor = parseInt(leia("Digite o valor para debito : "))             
//c1.debito(valor)                
//}               
//else if(op=="C"){               
//valor = parseInt(leia("Digite o valor para crédito : "))                
//c1.credito(valor)               
//}               
//}               
//console.log("Saldo final da conta "+c1.saldo)  		
				
				
				
