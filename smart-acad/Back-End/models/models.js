const executeQuery = require('../database/query')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();


const Colaboradores = {
    criarCliente: async (nome, sobrenome, genero, idade, telefone, cpf, email, cep, logradouro,complemento, cidade, uf, observacao, status) => {

        console.log(status);
        try {
            const result = await executeQuery(
                `INSERT INTO cliente (
                    nome, sobrenome, genero, idade, telefone, cpf, email, cep, 
                    logradouro, complemento, cidade, uf, observacao, status
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [nome, sobrenome, genero, idade, telefone, cpf, email, cep, 
                 logradouro, complemento, cidade, uf, observacao, status]
            );
    
            return result;
    
        } catch (error) {
            throw error;
        }
    },

    
    // cadastrar e login
    registrarUsuarios: async (nome, sobrenome, regra, email, senha) => { 
    try {

        const password = await bcrypt.hash(senha, 10);
        return await executeQuery(
            'INSERT INTO usuarios (nome, sobrenome, regra, email, senha) VALUES (?,?,?,?,?)',
            [nome, sobrenome, regra, email, password] 
        );
    } catch (error) {
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

                if (match) {
                    const token = jwt.sign(
                        //informações do usúario no banco
                        { id: consulta[0].id, email: consulta[0].email, regra: consulta[0].regra },
                        //assinatura com a chave secreta
                        process.env.JWT_SECRET,
                        { expiresIn: '25m' }
                    );
                    //retorno do token e da regra do usuar
                    return { token, regra: consulta[0].regra };

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
       return await executeQuery('SELECT id, email, senha, regra FROM usuarios WHERE email=?', [email])
    },
     //model para resetar senha
     resetarSenha: async(email,senha) =>{
        try{
            //atualizar senha om o Hash
            const hash = await bcrypt.hash(senha,10);
            return await executeQuery('UPDATE cadastrofunc SET senha=? WHERE email=?',[hash,email])
        }
        catch(erro){
            throw erro;
        }
    }
};

module.exports = Colaboradores;