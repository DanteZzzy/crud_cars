// Esse arquivo é o ponto de entrada do servidor. 
// Ele importa o aplicativo Express definido em src/app.js e inicia o servidor na porta 3000. 
// Quando o servidor estiver rodando, ele exibirá uma mensagem no console indicando que está ativo 
// e escutando na porta especificada.
require('dotenv').config();
const app = require('./src/app');
const connectionMongoDB = require("./src/config/mongo");

const PORT = 3000;

async function startServer() {
    await connectionMongoDB();

    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta: ${PORT}`);
    })
};

startServer()
