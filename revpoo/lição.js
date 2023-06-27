const leia = require("prompt-sync")()

let codigos = ["GRP0X-01","GRP0X-02","GRP0X-03","GRP0X-04","GRP0X-05","GRP0X-06","GRP0X-07","GRP0X-08","GRP0X-09","GRP0X-10"]
let produtos = ["BONÉ","CALÇA","BERMUDA AFRO","BATA","CAMISA AFRO","SAIA RODADA","SAIA STYLE","MACACÃO","CAMISETA TEMATICA","CALÇA SOCIAL AFRO"]
let valor = ["100.00","150.00","100.00","150.00","100.00","150.00","100.00","150.00","100.00","150.00"]
let carinho = [0,0,0,0,0,0,0,0,0,0]
let estoque = ["5","1","10","10","10","10","10","10","10","10"]
let situacao

do{
    console.log("COD\tPRODUTOS\tVALOR\tQTDE\n")
    let auxCod = leoa ("Digite o cogido do produto para compra :")
    for(let x=0; x<produtos.length; x++){
        if(auxCod==codigos[x]){
            console.log("produtos selecionados : ") 
        }
        
        console.log(codigos[x]+"\t"+produtos[x]+"\t"+valor[x]+"\t"+estoque[x]+"\t")
        carinho[x] = leia("Digite a quantidade que deseja comprar :")
        console.log("Sub-Total : "+(valor[x]*carrinho[x]))
    }
console.log("Carrinho de Compras")
console.log("COD\tPRODUTOS\tVALOR\tQTDE\n")
for(let x=0; x<produtos.length; x++){
    if(carinho[x]>0){
        console.log(codigos[x]+"\t"+produtos[x]+"\t"+valor[x]+"\t"+estoque[x]+"\t"+carinho+"\t") 
    }
    
}

    continua = leia("Continue Sim ou Não [S/N] ?")
}while(continua !="N" )
console.log("Fim de programa, até breve !!!")
