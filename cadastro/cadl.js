const mongoose = require('mongoose');
const fs = require('fs');
const csv = require('csv-parser');

mongoose.connect('mongodb://127.0.0.1:27017/loja',
{useNewUrlParser : true,
    useUnifiedTopology: true, 
    serverSelectionTimeoutMS : 20000});

const produtosSchema = new mongoose.Schema({
    codigo : String,
    descricao : String,
    valor : Number,
    estoque ; Number
})

const Produtos = mongoose.model('Produtos', produtosSchema)

function lerCSVSalvarNoMongo(){
    const resultados = [];
}

fs.createReadStream('exemplo - base.csv')
.pipe(csv())
.on('data', (dados)=>{
    
})