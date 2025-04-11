//Arquivo para realizar as regras do negocio, comunicação com o banco de dados

const conexao = require('../config/db') //impot da conexao com o banco

const Model = {
    getColaboradorById: async (id) => { //fazendo uma consulta
        const result = await conexao.query("SELECT * FROM livro WHERE id=?", [id]) //armazenando a resultado
            .catch(erro => console.log(erro));
        return result;
    },

    cadastrarcolaborador: async (id, nome, rua, cidade, estado, idade, setor) => {
        const result = await conexao.query("INSERT INTO livro values(?,?,?,?,?,?,?)",
            [id, nome, rua, cidade, estado, idade, setor])
            .catch(erro => console.log(erro));
        return result;

    },

    deleteID: async (id) => { 
        const [result] = await conexao.query("DELETE FROM livro WHERE id=?", [id]) 
        .catch(erro => console.log(erro));
        return result;
    },
}

module.exports = Model;