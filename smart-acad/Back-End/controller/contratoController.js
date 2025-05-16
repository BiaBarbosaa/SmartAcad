const cliente = require('../config/db');
const produtoController = require('../models/clienteModel');

const ControllerContrato = {

    BuscarClientePorId: async (req, res) => {
        const { id } = req.params;
    
        try {
            const cliente = await produtoController.buscarPorId(id);
    
            if (!cliente) {
                return res.status(404).json({ mensagem: "Cliente não encontrado" });
            }
    
            res.status(200).json({ nome: cliente.nome, sobrenome: cliente.sobrenome });
        } catch (error) {
            res.status(500).json({ mensagem: error.message });
        }
    }

}

module.exports = ControllerContrato;