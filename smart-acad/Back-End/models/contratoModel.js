const executeQuery = require('../database/query')

const Contrato = {
    
    buscarPorId: async (id) => {
        try {
            const [cliente] = await executeQuery('SELECT nome, sobrenome FROM Cliente WHERE id = ?', [id]);
            return cliente;
        } 
        catch (error) {
            throw error;
        }
    }
}
module.exports = Contrato;
