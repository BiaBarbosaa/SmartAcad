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
    postcriarContrato: async (data) =>{
        const {cliente_id, plano_id, servico_id, pagamento_id, status} = data;

        try {
        
            const result = await executeQuery(
                `INSERT INTO contrato 
                (cliente_id, plano_id, servico_id, pagamento_id, status) 
                VALUES (?, ?, ?, ?, ?)`,
                [cliente_id, plano_id, servico_id, pagamento_id, status]
            );
            return result;
        } catch (error) {
            throw error;
        }
    },

    buscarTodosContratos: async () => {
        return await executeQuery(`
           SELECT 
            CONCAT(cliente.nome, ' ', cliente.sobrenome) AS \`Nome_completo\`,     
            plano.tipo AS Plano,
            servico.tipo AS Servico,
            pagamento.tipo AS Pagamento,
            contrato.id AS ContratoID
        FROM contrato
        JOIN cliente ON cliente.id = contrato.cliente_id
        JOIN plano ON plano.id = contrato.plano_id
        JOIN servico ON servico.id = contrato.servico_id
        JOIN pagamento ON pagamento.id = contrato.pagamento_id
        `);
    },
    
    deletarContratoId: async (id) => {
        try {
            return await executeQuery(
                "DELETE FROM contrato WHERE id = ?", [id]
            );    
        } catch (error) { 
            throw error;
        }
    },

    getContratoById: async (id) => {

        try {
            const contrato = await executeQuery(
                "SELECT id FROM contrato WHERE id=?", [id]
            );
            return contrato;
        }
        catch (error) {
            throw error;
        }
    },

    putAtualizarContrato: async (cliente_id, plano_id, servico_id, pagamento_id, status, id) => {
        
        try {
            const result = await executeQuery(
                "UPDATE contrato SET cliente_id=?, plano_id=?, servico_id=?, pagamento_id=?, status=? WHERE id=?",
                [cliente_id, plano_id, servico_id, pagamento_id, status, id]
            );
            console.log(result);
        }
        catch (error) {
            throw error;
        }
    },     
    buscarContratoPorId: async (id) => {
        try {
            const [contrato] = await executeQuery('SELECT cliente_id, plano_id, servico_id, pagamento_id, status FROM contrato WHERE id = ?', [id]);
            return contrato;
        }
        catch (error) {
            throw error;
        }
    },
    
}
module.exports = Contrato;
