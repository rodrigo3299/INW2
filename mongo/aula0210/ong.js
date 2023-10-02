const  mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/ong',
{useNewUrlParser : true,
useUnifiedTopology: true, 
serverSelectionTimeoutMS : 10000});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Falha na conexão!!!'))

db.once('open', ()=>{
console.log("estamos logados no mongodb");
});

const usuariosSchema = new mongoose.Schema({
    email : String,
    senha: String
});

const Usuarios = mongoose.model('Alunos',usuariosSchema)

Usuarios.insertMany([
    { email : 'Paulo@gmail.com', senha : '1234556'},
    {email : 'Paulou@gmail.com', senha : '1234567'},
    { email : 'Pauloi@gmail.com', senha : '12345678'},
])


async function findUsuarios(){


    try{

        const usuarios = await Usuariosfind({});

        console.log('Usuarios:',usuarios)

    }

    catch(error){

        console.error(' não encontrados: ',error)

    }

}

findAlunos();