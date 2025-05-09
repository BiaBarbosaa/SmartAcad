//Função que realiza a vereficação e validação do token de acesso
const jwt = require('jsonwebtoken');
require('dotenv').config();//chamar as variavies de ambiente

const vereficarToken = (req,res,next) => {
    //vereficar se token chegou no cabeçalho
    const header = req.header('authorization');

   if(!header){ //se token não existe, não foi fornecido
        return res.status(401).json({msg: "Acesso negado. Token não fornecido"})
    };

    const token = header.split(' ')[1]; 
    //quebra seu objeto, separando ele / o 1 é a posição que está o token


    console.log(token);

    if(!token){
        return res.status(401).json({msg: "Acesso negado. Token não fornecido"})
    }
    //vereficar integridade do token, assinatura
    try{
        const verificar = jwt.verify(token, process.env.JWT_SECRET); //usando a chave para vereficar se é a mesma chave

        req.user = verificar; //adiciona as informações do usuario em req.user

        console.log(verificar);

        next(); // chama a próxima etapa do processo para ser executada
    }
    catch(erro){
        console.log(erro);
        res.status(400).json({msg: "Token invalido"});
    }

}

module.exports = vereficarToken;