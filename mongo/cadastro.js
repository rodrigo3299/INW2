const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/exemplo',
{useNewUrlParser : true,
useUnifiedTopology: true, 
serverSelectionTimeoutMS : 10000});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'))

db.once('open', function(){
console.log("estamos logados no mongodb");
});

const produtosSchema = new mongoose.Schema({
    descrição : String,
    ano : Number,
    valor : Number,
    estoque : Number
});

const Produtos = mongoose.model("Produtos", pessoaSchema);

const livro = new Produtos({
    descrição : 'Livro do Messi' ,
    ano : 2019,
    valor : 500,
    estoque : 5,
   })

   console.log(livro.descrição)
   console.log(livro.ano)
   console.log(livro.valor)
   console.log(livro.estoque)
   
   livro.save();


