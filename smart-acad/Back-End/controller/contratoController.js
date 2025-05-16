const cliente = require('../config/db');
const contratoController = require('../models/contratoModel');

const ControllerContrato = {

    BuscarClientePorId: async (req, res) => {
        const { id } = req.params;

        console.log(req.params.id);
    
        try {
            const cliente = await contratoController.buscarPorId(id);
    
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