const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/escola',
{useNewUrlParser : true,
    useUnifiedTopology: true, 
    serverSelectionTimeoutMS : 10000});

    const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'))
 
db.once('open', function(){
    console.log("Estamos conectados no mongodb");
    });
    
    const alunosSchema = new mongoose.Schema({
        matricula : String,
        nome : String,
        idade : Number,
        Turma : String
    });

    const Alunos = mongoose.model('Alunos', alunosSchema)
    
    const Paulo = new Alunos({
        matricula : 'rm15178',
        nome : 'Paulo',
        idade : 58,
        turma : '2MIB'
    });

    Paulo.save();

    const Digolinha = new Alunos({
        matricula : 'rm15189',
        nome : 'Digolinha',
        idade : 28,
        turma : '2MIB'
    });

    Digolinha.save();