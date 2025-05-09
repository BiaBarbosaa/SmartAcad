const executeQuery = require('../database/query')

const Cliente = {
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
        } catch (erro) { 
            throw new Error(`Erro ao deletar produto: ${erro.message}`); 
        }
    }
}
module.exports = Cliente;
