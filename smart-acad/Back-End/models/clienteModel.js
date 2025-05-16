const executeQuery = require('../database/query')

const Cliente = {

    criarCliente: async (nome, sobrenome, genero, idade, telefone, cpf, email, cep, logradouro,complemento, cidade, uf, observacao, status) => {

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
    
    buscarTodosProdutos: async () => {
        return await executeQuery(
            'SELECT id, nome, sobrenome, genero, idade, telefone, cpf, email, cep, logradouro, complemento, cidade, uf, observacao, status FROM cliente '
        );
    },

    deletarProdutoId: async (id) => {
        try {
            return await executeQuery(
                "DELETE FROM cliente WHERE id = ?", [id]
            );    
        } catch (error) { 
            throw error;
        }
    },
}
module.exports = Cliente;
