const cliente = require('../config/db');
const produtoController = require('../models/clienteModel');

const ControllerProduto = {

    listarTodos : async(req,res) => {

        try{
            const resultado = await produtoController.buscarTodosProdutos();
            res.status(200).json(resultado);
        }
        catch(erro){
       
            res.status(500).json({msg: "Erro no servidor"});
        }

    },
   
    
    deletarId : async (req, res) => {
        try {
            const id = req.params.id;
            
            if (!id) {
                return res.status(400).json({ msg: "ID inválido" });
            }
    
            const resultado = await produtoController.deletarProdutoId(id);
    
            if (!resultado) { 
                return res.status(404).json({ msg: "Produto não encontrado" });
            }
    
            res.status(200).json({ msg: "Produto deletado com sucesso" });
        } catch (erro) {
         
            res.status(500).json({ msg: "Erro no servidor", error: erro.message });
        }
    }

}

module.exports = ControllerProduto;