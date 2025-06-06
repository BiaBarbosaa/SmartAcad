const cliente = require('../config/db');
const contratoController = require('../models/contratoModel');

const ControllerContrato = {

    BuscarClientePorId: async (req, res) => {
        const { id } = req.params;

        try {
            const cliente = await contratoController.buscarPorId(id);

            if (!cliente) {
                return res.status(404).json({ mensagem: "Cliente não encontrado" });
            }

            res.status(200).json({ nome: cliente.nome, sobrenome: cliente.sobrenome });
        } catch (error) {
            res.status(500).json({ mensagem: error.message });
        }
    },

    criarContrato: async (req, res) => {
        try {

            const { cod, planos, servicos, pagamento, status} = req.body;

            const data = {
                cliente_id:cod,
                plano_id:planos,
                servico_id: servicos,
                pagamento_id: pagamento,
                status
            }

            if (!planos || !servicos || !pagamento) {
                return res.status(400).json({ msg: "Dados inválidos" });
            }

            const statusValidos = ['ativo', 'inativo'];
            if (!statusValidos) {
                return res.status(400).json({ mensagem: "Status inválido" });
            }

            const resultado = await contratoController.postcriarContrato(data);

            if (resultado.affectedRows === 0) {
                return res.status(404).json({ msg: "Contrato não encontrado" });
            }
            res.status(200).json({ msg: "Contrato cadastrado com sucesso!" });
        }
        catch (error) {
            res.status(500).json({ mensagem: error.message });
        }
    },

    listarTodosContratos: async (req, res) => {
        try {
            const resultado = await contratoController.buscarTodosContratos();
            res.status(200).json(resultado);
        } catch (error) {
            res.status(500).json({ mensagem: error.message });
        }
    },

    deletarId : async (req, res) => {
        try {
            const id = req.params.id;
            
            if (!id) {
                return res.status(400).json({ msg: "ID inválido" });
            }
    
            const resultado = await contratoController.deletarContratoId(id);
    
            if (resultado.affectedRows === 0) { 
                return res.status(404).json({ msg: "Contrato não encontrado" });
            }
    
            res.status(200).json({ msg: "Contrato deletado com sucesso" });
        } catch (error) {
         
            res.status(500).json({ mensagem: error.message });
        }
    },

    async atualizarContratoId(req, res) {
  
        const{cliente_id, plano_id, servico_id, pagamento_id, status} = req.body;

        try {
            if (!req.params.id) {
                return res.status(400).json({ mensagem: 'ID inválido' });
            }

            const cliente = await contratoController.getContratoById(req.params.id);

            if (cliente.length > 0) {
                await contratoController.putAtualizarContrato(cliente_id, plano_id, servico_id, pagamento_id, status, req.params.id);
                res.status(200).json({ mensagem: 'Atualizado com sucesso' });
            }
            else{
                return res.status(404).json({ mensagem: 'Contrato não encontrado' });
            }   
        } catch (error) {
            res.status(500).json({ mensagem: error.message });
        }
    },

}

module.exports = ControllerContrato;