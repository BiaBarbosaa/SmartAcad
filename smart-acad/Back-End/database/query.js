const conexao = require('../config/db')

async function executeQuery(query, params = []){
    //cosulta no banco
    try{
        const [rows] = await conexao.query(query,params)
        return rows
    }
    catch(error){
        console.log(error);
        throw new Error(`Erro na execução da consulta ${error.message}`)
    }
};

module.exports = executeQuery