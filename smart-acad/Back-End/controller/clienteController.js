const cliente = require('../config/db');
const clienteController = require('../models/clienteModel');

const ControllerCliente = {

    async cadastrarNovoCliente(req, res) { 
        try {
            const { nome, sobrenome, genero, idade, telefone, cpf, email, cep, logradouro, complemento, cidade, uf, status, observacao} = req.body;

            console.log(req.body);

            const statusValidos = ['ativo', 'inativo'];
            if (!statusValidos) {
                return res.status(400).json({ mensagem: "Status inválido" });
            }

            const generosValidos = ['F', 'M'];
            if (!generosValidos) {
                return res.status(400).json({ mensagem: "Gênero inválido" });
            }
            
            const novoCliente = await clienteController.criarCliente(
                nome, sobrenome, genero, idade, telefone, cpf, email, cep, logradouro, complemento, cidade, uf, observacao, status   
            );
    
            res.status(201).json({ mensagem: "Cliente cadastrado com sucesso"});
    
        } catch (error) {
            res.status(500).json({ mensagem: error.message });
        }
    },

    listarTodos : async(req,res) => {

        try{
            const resultado = await clienteController.buscarTodosProdutos();
            res.status(200).json(resultado);
        }
        catch(erro){
            res.status(500).json({ mensagem: error.message });
        }

    },
   
    deletarId : async (req, res) => {
        try {
            const id = req.params.id;
            
            if (!id) {
                return res.status(400).json({ msg: "ID inválido" });
            }
    
            const resultado = await clienteController.deletarClienteId(id);
    
            if (resultado.affectedRows === 0) { 
                return res.status(404).json({ msg: "Cliente não encontrado" });
            }
    
            res.status(200).json({ msg: "Cliente deletado com sucesso" });
        } catch (error) {
         
            res.status(500).json({ mensagem: error.message });
        }
    },

    async atualizarId(req, res) {
  
        const{nome, sobrenome, genero, idade, telefone, cpf, email, cep, logradouro, complemento, cidade, uf, observacao, status} = req.body;

        try {
            if (!req.params.id) {
                return res.status(400).json({ mensagem: 'ID inválido' });
            }

            const cliente = await clienteController.getClienteById(req.params.id);

            if (cliente.length > 0) {
                await clienteController.putAtualizarCliente(nome, sobrenome, genero, idade,  telefone, cpf, email, cep, logradouro, complemento, cidade, uf, observacao, status, req.params.id);
                res.status(200).json({ mensagem: 'Atualizado com sucesso' });
            }
            else{
                return res.status(404).json({ mensagem: 'Cliente não encontrado' });
            }   
        } catch (error) {
            res.status(500).json({ mensagem: error.message });
        }
    },

    getClientePorId: async (req, res) => {
        const { id } = req.params;

        try {
            const cliente = await clienteController.buscarClientePorId(id);

            if (!cliente) {
                return res.status(404).json({ mensagem: "Cliente não encontrado" });
            }

            res.status(200).json(cliente);
        } catch (error) {
            res.status(500).json({ mensagem: error.message });
        }
    },

}

module.exports = ControllerCliente;