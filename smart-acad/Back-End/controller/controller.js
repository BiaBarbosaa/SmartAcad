const clienteModel = require('../models/models');

const clienteController = {
    //busca por id
    //getbyid aciona o getColaboradorById
    getById: async(req,res) =>{
        try{
            const sql = await clienteModel.getColaboradorById(req.params.id) //se ele encontrou o registro, vai ficar armazenado aqui

            if(sql.length > 0){
                res.status(200).json(sql[0])
            }
            else{
                res.status(404).json({msg:"Não existe registro no banco de dados"})
            }
        }
        catch(erro){
        }
    },

    createNewCustomer: async(req,res) => {

        const senha = "123";
        const bairro = "williams"
        const dataMatricula = "2025-04-11";
        const cliente_id = 1
        const {nome, sobrenome, genero, telefone, cpf, email, cep, logradouro, observacao} = req.body
        const endereco = logradouro;
    
        console.log(endereco);
      
        console.log(req.body)

        try{
            const sql = await clienteModel.cadastrarcolaborador(nome, sobrenome, telefone, email, senha, dataMatricula, genero, cpf, cep, endereco, bairro, observacao,cliente_id) 
            if(sql.length > 0){
                res.status(201).json({msg:"Registro criado com sucesso!!!"})
            }
        }
        catch(erro){
            console.log(erro)
            res.status(500).json({msg:"Erro ao servidor"})
        }
    },

    deleteById: async(req,res) => {
        try{
            const consulta = await clienteModel.getColaboradorById(req.params.id)

            if(consulta.length > 0){
         
                await clienteModel.deleteID(req.params.id)
                res.status(200).json({msg:"Deletado com sucesso!!"})
              
            }
            else{
                res.status(404).json({msg:"ID não existe no banco de dados"})
            }
        }
        catch(erro){
            res.status(500).json({msg:"Erro ao servidor"})
            console.log(erro)
        }
    }
        
    
}
module.exports = clienteController;