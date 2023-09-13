function falarDepoisDE(segundos, frase){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(frase)
        },segundos * 1000);
    });
}
falarDepoisDE(4, "Teste da promisse no 2mib")
.then(frase => frase.concat(' programando em vscode!!!'))
.then(novaFrase => console.log(novaFrase))