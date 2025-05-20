const executeQuery = require('../database/query')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

const Usuarios = {
  
    // cadastrar e login
    registrarUsuarios: async (nome, sobrenome, regra, email, senha) => { 

    try {

        const password = await bcrypt.hash(senha, 10);
        return await executeQuery(
            'INSERT INTO usuarios (nome, sobrenome, regra, email, senha) VALUES (?,?,?,?,?)',
            [nome, sobrenome, regra, email, password] 
        );
    } 
    catch (error) 
    {
        throw error;
    }
},

    login: async (email, senha) => {
    try {
        const consulta = await Usuarios.getEmail(email);
        
        // Verifica se há registros retornados (uso correto para SELECT)
        if (consulta.length > 0) { // Alterado aqui
            const match = await bcrypt.compare(senha, consulta[0].senha);

            if (match) {
                const token = jwt.sign(
                    { id: consulta[0].id, email: consulta[0].email, regra: consulta[0].regra },
                    process.env.JWT_SECRET,
                    { expiresIn: '25m' }
                );
                return { token, regra: consulta[0].regra };
            }
            return null;
        }
        return null;
    } catch (error) {
        console.log(error);
        throw error;
    }
},

    getEmail: async(email)=>{
       return await executeQuery('SELECT id, email, senha, regra FROM usuarios WHERE email=?', [email])
    },
     
     resetarSenha: async(email,senha) =>{
        try{
            
            const hash = await bcrypt.hash(senha,10);
            return await executeQuery('UPDATE usuarios SET senha=? WHERE email=?',[hash,email])
        }
        catch(error){
            throw error;
        }
    }
};

module.exports = Usuarios;