function escreverNoConsole(){
    console.log("Escrevendo na tela usando função!!!")
}

escreverNoConsole();

const textoNoConsole = function(){
    console.log("Segundo exemplo, escrevendo no console")
}
textoNoConsole();

const textoPorParametro = function(texto){
    console.log(texto)
}
textoPorParametro("Terceiro exemplo, este texto é o parametro!!!");



textoNoConsole();

const textoUsandoArrow = (texto) => console.log(texto)

textoUsandoArrow("Quarto exemplo usando arrow function");

const mostrarParImpar = (numero) =>{
    if(numero < 0 ){
        console.log(numero,"o numero digitado é negativo")
   }
   else if(numero== 0){
    console.log(numero,"o numero digitado é neutro")
 }
 else if((numero%2)== 0){
    console.log(numero,"o numero digitado é par")
 }
 else 
 {
    console.log(numero,"o numero digitado é impar")
 }
}
mostrarParImpar(13)
