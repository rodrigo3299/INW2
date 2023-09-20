function somaDois(numero1, numero2){
    return(numero1+numero2);
}
//console.log("O resultado da soma é "+somaDois(5,7))
//console.log("O resultado da soma é "+somaDois(5,7))

const ParImpar = (numero) =>{
    if(numero < 0){
        return 'Negativo'
    }
    else if (numero ==0){
        return 'Neutro'
    }
    else if((numero%2)==0){
        return 'Par'
    }
    else{
        return 'Impar'
    }
}
console.log(ParImpar(0))
console.log(ParImpar(2))
console.log(ParImpar(5))
console.log(ParImpar(-1))