const conexao = require('../config/db');
const executeQuery = require('../database/query')
const bcrypt = require('bcrypt')

const Colaboradores = {

    registrarUsuarios: async (nome, sobrenome, regra, email, senha) => {
        try{
            const password = await bcrypt.hash(senha, 10)
            return await executeQuery(
                'INSERT INTO usuarios (nome, sobrenome, regra, email, senha) VALUES(?,?,?,?,?)',
                [nome, sobrenome, regra, email, password]
            )
        }
        catch(error){
            throw error;
            
        }
    },

    login: async(email,senha)=>{
        try{
            const consulta = await Colaboradores.getEmail(email);

            if(consulta.length > 0){
                //comparar senha
                //senha = senha do login que vem pelo post
                //consulta[0].senha = ao objeto do banco
                const match = await bcrypt.compare(senha, consulta[0].senha)

                if(match){
                    return consulta
                }
                return null;
            }
            return null;
        }
        catch(error){
            throw error;
        }
    },

    getEmail: async(email)=>{
       return await executeQuery('SELECT id, email, senha FROM usuarios WHERE email=?', [email])
    }
};

module.exports = Colaboradores;