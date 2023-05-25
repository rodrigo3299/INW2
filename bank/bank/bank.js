//Rodrigo fez a conta poupança
//Henrique fez a conta corrente
//Victor fez a conta especial
//classes
 class Contas{
    constructor(numero,cpf,saldo,ativo){
    this.numero = numero;
    this.cpf = cpf;
    this.saldo = saldo;
    this.ativo = ativo
         } 
    ativar(){
    this.ativo= true; 
    } 
    credito(valor){
         if(this.ativo){
        if(valor<0){
        console.log("Impossivel realizar, valor negativo") 
            } 
             else if(valor==0){
           console.log("Impossivel realizar, valor zerado...")
                 } 
    else {
        this.saldo+=valor 
        }
     } 
     else{ console.log("Conta inativa") }
     }
      Debito(valor){
         if (this.ativo){ 
            if(valor<0){
                 console.log("Impossivel realizar, valor negativo...") 
                }
                 else if(valor ==0){
                     console.log("Impossivel realizar, valor zerado...") 
                    } 
                    else if( valor>=this.saldo){
                         console.log("Impossivel realizar, saldo indisponivel..") 
                        } 
                        else { this.saldo -=valor }
                     } 
                     else { 
                        console.log("Conta inativa.....") 
                    } 
                } 
            } 
         // sub class poupança/Rodrigo Farias Lima 2mib
         class Poupanca extends Contas{
            constructor(numero,cpf,saldo,ativo,AniversarioPoupanca){
                    super(numero,cpf,saldo,ativo)
                    this.AniversarioPoupanca = AniversarioPoupanca 
                }
                 correcao(dia){
                     if(this.AniversarioPoupanca == dia){
                         this.saldo = (this.saldo * 0.05) + this.saldo
                         console.log("Parabéns!! aniversario da sua conta você recebeu uma correção na sua conta") 
                        } 
                        else{ console.log("Poxaaa! Hoje não é aniversário da sua conta, portanto você não teve nenhuma correção")
                     } 
                    } 
                }     
        // sub class corrente/Henrique Farah 2mib
    class Corrente extends Contas{
        onstructor(numero,cpf,saldo,ativo, ContadorTalao){ 
        super(numero,cpf,saldo,ativo);
        this.ContadorTalao = ContadorTalao; 
        this.ContadorTalao=0;
                } 
        solicitarCheque(){
            if (this.ContadorTalao < 3){
                 if(this.saldo >=30){
                 this.saldo -=30;
          this.ContadorTalao++; 
              console.log("Cheque solicitado ");
               }
           else{
                console.log("Limite de cheques atingidos");
                 }
             } 
        }
     }
       
        // sub class Especial/Victor Lauria 2mib 
            class Especial extends Contas{
                 constructor(numero,cpf,saldo,ativo,limite){
                 super(numero,cpf,saldo,ativo)
                      this.limite = limite 
                    } 
            sarLimite(valor){ 
                if(valor > this.limite){
                   console.log("impossível realizar, sem limite...")
                      } 
                   else{ this.limite = this.limite - valor 
                this.credito(valor)
                  } 
                 console.log("Limite atual : "+this.limite)
                console.log("Saldo atual da conta : "+this.saldo) 
                        }

                     } 
        // programa principal 
                     const leia = require("prompt-sync")()
                      let opcao = "" 
        // montando o menu 
                      do{ console.log("") 
                      console.log("1 - conta poupança") 
                      console.log("2 - conta corrente") 
                      console.log("3 - conta Especial") 
                      console.log("4 - conta Estudantil") 
                      console.log("5- sair ") 
                      opcao=leia("Digite o número da sua opção : ")
                      if (opcao == "1"){ 
                    console.log("Conta Poupança") 
                    let numero = parseInt(leia("digite o número da conta : "))
                     let cpf = leia("Digite o cpf : ")
        let AniversarioPoupanca = leia("Digite o aniversario da sua conta : ")
        let dia = leia("Digite a data de hoje : ") 
let Poupanca1 = new Poupanca(numero,cpf,0,false,AniversarioPoupanca) 
        Poupanca1.ativar() 
            for(let i=1; i<=10; i++){
                console.log("Movimento "+i)
                console.log("Saldo da conta : R$ "+Poupanca1.saldo+" ") 
            valor = parseInt(leia("Digite o valor :"))
             op = leia("Digite D - débito ou C - crédito : ").toUpperCase()
            if (op=="D"){
            Poupanca1.Debito(valor)
            }else if(op =="C"){ 
            Poupanca1.credito(valor) 
                            } 
                        } 
    Poupanca1.correcao(dia) 
     console.log("Saldo final da conta : R$ "+Poupanca1.saldo+"") 
                    } 
                    else if (opcao == "2"){
             console.log("Conta corrente")
             let numero = leia("Digite o numero da conta : ")
            let cpf = leia("Digite o cpf : ") 
                   0 , false , 30
           const corrente1 = new Corrente(numero, cpf, 0 , false, 3);
             let op="";
                    let valor = 0;
                    corrente1.ativar()
                    for (let x=1; x<=10; x++){
                    valor = parseInt(leia("Digite o valor : "))
            op =leia ("Digite D para Debito ou C para Credito : ") 
                if (op=="D"){
                corrente1.Debito(valor)
                    }else if(op =="C"){
            corrente1.credito(valor)
                             } 
    onsole.log ("Saldo atual R$ : " +corrente1.saldo)
        } 
        const continuar = leia("\nContinuar?(S/N) : ");
        if(continuar =="S"){
    const solicitarCheque = leia("Deseja solicitar um cheque ? (S/N) :");
            if(solicitarCheque == "S"){
                    corrente1.solicitarCheque();
                } else if(solicitarCheque == "N"){
                console.log("Programa finalizado")
             }else if(continuar == "N"){
                 console.log("Programa finalizado") 
                } 
            } 
            console.log("Saldo final conta : " +corrente1.saldo.toFixed(2));
         }else if (opcao == "3"){
             console.log("Conta Especial")
              let numero = parseInt(leia("digite o número da conta : "))
               let cpf = leia("Digite o cpf : ")
                let Especial1 = new Especial(numero,cpf,0,false,1000)
                 Especial1.ativar() 
                 for(let i=1; i<=10; i++){
                     console.log("Movimento "+i)
                      console.log("Saldo da conta : R$ "+Especial1.saldo+"")
                       valor = parseInt(leia("Digite o valor :"))
                        op = leia("Digite D - débito ou C - crédito : ").toUpperCase()
                         if(op == "C"){
                             Especial1.credito(valor)
                             } 
                             else if (op == "D"){ 
                                if(valor > (Especial1.saldo + Especial1.limite)){
                                     console.log("Dinheiro suficiente") 
                                    } 
                                    else if(valor > Especial1.saldo){ 
                                    let x = valor - Especial1.saldo 
                                    Especial1.usarLimite(x) 
                                } 
                                Especial1.Debito(valor)
                             } 
                            } 
                        }
                             else if (opcao == "4"){
                                 console.log("Testando conta Estudantil") 
                                } 
                                else if (opcao == "5"){
                                console.log("Saindo do programa")
                                } 
                            else{ console.log("Digitação invalida") 
                        } 
                    } while(opcao != "5")
                     console.log("Fim de programa volte sempre")
                    // let numero = parseInt(leia("Digite o numero da conta : "))
                    // let cpf = leia("Digite o cpf da conta : ")
                    // let c1 = new Contas(numero,cpf,0,false) 
                    // let op="" 
                    // let valor = 0 
                    // c1.ativar() 
                    // for (let x=1; x<=10; x++){ 
                    // console.log("Movimento : " +x) 
                    // console.log("Saldo atual conta : " +c1.saldo) 
                    // op = leia("Digite D para debido ou C para crédito : ") 
                    // if(op=="D"){ 
                    // valor = leia ("Digite o valor para debito ") 
                    // c1.Debito(valor) 
                    // } 
                    // else if (op== "C"){ 
                    // valor = parseInt(leia ("Digite o valor para crédito ")) 
                    // c1.credito(valor) 
                    // } 
                    // } 
                    // console.log("Saldo final conta : " +c1.saldo) 
                    // c1.credito(100) 
                    // console.log("saldo atual " +c1.saldo)
