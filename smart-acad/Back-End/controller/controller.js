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

    createNewEmployee: async(req,res) => {
        const {id, nome, rua, cidade, estado, idade, setor} = req.body
        console.log(req.body)

        try{
            const sql = await clienteModel.cadastrarcolaborador(id, nome, rua, cidade, estado, idade, setor) 
            if(sql.length > 0){
                res.status(201).json({msg:"Registro criado com sucesso!!!"})
            }
            else{
                res.status(404).json({msg:"Falha ao cadastrar"})
            }
        }
        catch(erro){
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