const mysql = require("mysql2/promise");

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'loja_de_carros'
});

module.exports = pool; // Mysql não precisa de connect explícito


// npm install mysql2