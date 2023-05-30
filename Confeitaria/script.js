const leia = require('prompt-sync')()




class doces{

constructor(id, descrição,ativo, Estoque, preço, sabor, ){

this.id = id
this.ativo = ativo
this.descrição = descrição


this.Estoque = Estoque

this.preço = preço

this.sabor = sabor


}




ativar(){

    this.ativo=true

}






incluirEstoque(valor){

 if(this.ativo){

 if(valor<0){

console.log("Não foi possivel realizar, estoque insulficiente")




 }

 else if(valor==0){

console.log("Não foi possivel realizar, sem estoque")

 }

 else {
//teste
this.Estoque+=valor

 }

 }

 else{

 console.log("sem estoque")

 }

}

   

   

   

retirarEstoque(valor){

 if (this.ativo){

 if(valor<0){

console.log("Impossivel realizar, não há estoques deste produto")

 }

 else if(valor ==0){

console.log("Impossivel realizar, estoque zerado...")

 }

 else if( valor>=this.Estoque){

console.log("Impossivel realizar, estoque indisponivel..")

 }

 else {

this.Estoque -=valor

 }

 }

   

 else {

 console.log("Conta inativa.....")

 }

   

}

    }




    const leia = require('prompt-sync')

    let id= parseInt(leia("digite o id do produto"))

    let descrição= parseInt(leia("digite as descrição do produto desejado"))

    let preço= parseInt(leia("digite o preço do produto"))

    let modelo= parseInt(leia("digite o sabor do produto"))




let produto1 = new produtos(id, descrição, false, 10, preço, sabor)

produto1.ativar();

for(let i=0; i < 5; i++) {

    console.log("movimento"+ i)

    valor= parseInt(leia("digite a quantidade de produtos desejados"))

    produto1.retirarEstoque(valor);

    console.log("quantidade em estoque : " + produto1.Estoque)

}