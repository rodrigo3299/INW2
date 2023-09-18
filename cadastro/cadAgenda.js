const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/agenda',
{useNewUrlParser : true,
    useUnifiedTopology: true, 
    serverSelectionTimeoutMS : 10000});

    const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'))
 
db.once('open', function(){
    console.log("Estamos conectados no mongodb");
    });
    
    const contatosSchema = new mongoose.Schema({
        numero : Number,
        nome : String,
        idade : Number,
        email : String
    });

    const Contatos = mongoose.model('Contatos', contatosSchema)
    
    const Epaminondas = new Contatos({
        numero : '1',
        nome : 'Epaminondas',
        idade : 17,
        email : 'epa@gmail.com'
    });

    Epaminondas.save();

    const Carla = new Contatos({
        numero : '2',
        nome : 'Carla',
        idade : 18,
        email : 'carla@gmail.com'
    });

    Carla.save();