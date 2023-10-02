const  mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/escola',
{useNewUrlParser : true,
useUnifiedTopology: true, 
serverSelectionTimeoutMS : 10000});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Falha na conexão!!!'))

db.once('open', ()=>{
console.log("estamos logados no mongodb");
});

const alunosSchema = new mongoose.Schema({
    nome : String,
    idade : Number,
    turma: String
});

const Alunos = mongoose.model('Alunos', alunosSchema)

Alunos.insertMany([
    {nome : 'Paulo', idade : 16, turma : 'Turma1'},
    {nome : 'Paulou', idade : 17, turma : 'Turma2'},
    {nome : 'Pauloi', idade : 18, turma : 'Turma3'},
])


async function findAlunos(){

    try{

        const alunos = await Alunos.find({});

        console.log('Alunos:',alunos)

    }

    catch(error){

        console.error('Alunos não encontrados: ',error)

    }

}

findAlunos();