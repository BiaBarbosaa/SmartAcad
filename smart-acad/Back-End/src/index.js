const express = require('express');
const conexao = require('../config/db');
const routers = require('../src/routers');
const vereficarToken = require('../middlewares/token');
const cors = require('cors');
require('dotenv').config();

const app = express(); // api utilize o express

app.use(express.json()); //use o modo json
app.use(cors());//necessario para habilitar comunicação com servidor externo
app.use('/api', vereficarToken)
app.use(routers); //utilize as totas

PORT = process.env.PORT || 3001

conexao.query("select 1") //selecione uma conexão
.then(() =>{
    console.log("conectado com sucesso") //se foi sucesso imprima:
    app.listen(PORT, function(){ //conexão na porta, fique online na porta
        console.log("Servidor executando na url:http://localhost:3001")
    });
})
.catch(erro => console.log("Falha na conexão")); //se der erro