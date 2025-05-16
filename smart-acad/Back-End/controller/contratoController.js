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
         
            const {cliente_id, plano_id, servico_id, pagamento_id } = req.body;
            console.log(req.body)

            if (!plano_id || !servico_id || !pagamento_id) {
                return res.status(400).json({ msg: "Dados inválidos" });
            }

            const resultado = await contratoController.postcriarContrato (cliente_id, plano_id, servico_id, pagamento_id);

            if (resultado.affectedRows === 0) {
                return res.status(404).json({ msg: "Contrato não encontrado" });
            }

            res.status(200).json({ msg: "Contrato atualizado com sucesso" });
        } catch (error) {
            res.status(500).json({ mensagem: error.message });
        }
    },

    getAllPlanos:async(req,res)=>{
        try{
            const resultado = await contratoController.buscarPlanos();

            res.status(200).json(resultado);
        }
        catch(error){
            res.status(500).json({ mensagem: error.message });
        }
    },

    getAllPagamento:async(req,res)=>{
        try{
            const resultado = await contratoController.buscarPagamentos();

            res.status(200).json(resultado);
        }
        catch(error){
            res.status(500).json({ mensagem: error.message });
        }
    },

    getAllServicos:async(req,res)=>{
        try{
            const resultado = await contratoController.buscarServicos();

            res.status(200).json(resultado);
        }
        catch(error){
            res.status(500).json({ mensagem: error.message });
        }
    },

}

module.exports = ControllerContrato;