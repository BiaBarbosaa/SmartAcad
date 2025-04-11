//Arquivo para realizar as regras do negocio, comunicação com o banco de dados

const cliente = require('../config/db');
const conexao = require('../config/db') //impot da conexao com o banco

const Model = {
    getColaboradorById: async (id) => { //fazendo uma consulta
        const result = await conexao.query("SELECT * FROM livro WHERE id=?", [id]) //armazenando a resultado
            .catch(erro => console.log(erro));
        return result;
    },

    cadastrarcolaborador: async (nome, sobrenome, telefone, email, senha, dataMatricula, genero, cpf, cep, endereco, bairro, observacao, cliente_id) => {
        try{
            const result = await conexao.query("INSERT INTO cliente values(?,?,?,?,?,?,?,?,?,?,?,?)",
                [nome, sobrenome, telefone, email, senha, dataMatricula, genero, cpf, cep, endereco, bairro, observacao, cliente_id ])
            return result;
        }
        catch(error){
            console.log(error)
            throw new Error (`Erro ao criar o cliente ${error.message}`)

        }
       

    },

    deleteID: async (id) => { 
        const [result] = await conexao.query("DELETE FROM livro WHERE id=?", [id]) 
        .catch(erro => console.log(erro));
        return result;
    },
}

module.exports = Model;