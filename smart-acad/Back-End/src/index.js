const express = require('express');
const conexao = require('../config/db');
const routers = require('../src/routers');
const cors = require('cors')

const app = express(); // api utilize o express
app.use(express.json()); //use o modo json
app.use(cors());
app.use(routers); //utilize as totas


conexao.query("select 1") //selecione uma conexão
.then(() =>{
    console.log("conectado com sucesso") //se foi sucesso imprima:
    app.listen(3001, function(){ //conexão na porta, fique online na porta
        console.log("Servidor executando na url:http://localhost:3001")
    });
})
.catch(erro => console.log("Falha na conexão")); //se der erro