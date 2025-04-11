const mysql = require('mysql2/promise');

//criar conexão com o banco
const cliente = mysql.createPool({
    host: "localhost",
    port:3306,
    user:"root",
    password:"admin",
    database:"smartacad"
});

module.exports = cliente;

