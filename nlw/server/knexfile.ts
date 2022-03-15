import path from 'path';

module.exports = {
    client:'sqlite3',
    connection: {
        filename: path.resolve( __dirname,'src', 'database', 'database.sqlite' ),
    },
    migrations:{
        directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
    },
    seeds:{
        directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
    }, //serve para subir dados no banco antes de criar uma formulario por exemplo
    useNullAsDefault: true,
};

//__dirname retorna sempre a raiz de onde o arquivo esta nesse caso a raiz é o server se ele estivesse dentro de uma pasta a raiz seria a pasta na qual ele pertence