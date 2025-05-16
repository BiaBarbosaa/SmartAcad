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
    },

     postcriarContrato: async (cliente_id, plano_id, servico_id, pagamento_id) => {
        
        try {
            return await executeQuery(
                `INSERT INTO contrato (
                    cliente_id, plano_id, servico_id, pagamento_id) VALUES (?, ?, ?, ?)`,
                [cliente_id, plano_id, servico_id, pagamento_id]
            );
        } catch (error) {
            throw error;
        }
    },

    buscarPlanos : async() =>{
        return await executeQuery('SELECT id, 1, 2, 3 FROM plano');
    },

    buscarServicos : async() =>{
        return await executeQuery('SELECT id, Nutrição, Personal, Musculação, Spinning, Zumba, Avaliação física FROM servicos');
    },

    buscarPagamentos : async() =>{
        return await executeQuery('SELECT id, dinheiro, cartão, pix FROM pagamento');
    }
    
}
module.exports = Contrato;
