const clienteModel = require('../models/models');

const clienteController = {

    async cadastrarNovoCliente(req, res) { 
        const status = "ativo";
        try {
            const { nome, sobrenome, genero, idade, telefone, cpf, email, cep, logradouro, complemento, cidade, uf, observacao} = req.body;

            console.log(req.body);

            const statusValidos = ['ativo', 'inativo'];
            if (!statusValidos) {
                return res.status(400).json({ mensagem: "Status inválido" });
            }

            const generosValidos = ['F', 'M'];
            if (!generosValidos) {
                return res.status(400).json({ mensagem: "Gênero inválido" });
            }
            
            const novoCliente = await clienteModel.criarCliente(
                nome, sobrenome, genero, idade, telefone, cpf, email, cep, logradouro, complemento, cidade, uf, observacao, status   
            );
    
            res.status(201).json({ mensagem: "Cliente cadastrado com sucesso"});
    
        } catch (error) {
    console.log(error)
            res.status(500).json({ mensagem: error.message });
        }
    },

    cadastrarUsuarios: async (req, res) => {

        const { nome, sobrenome, regra, email, senha } = req.body;

        console.log(req.body);
        try {
            const emailExistente = await clienteModel.getEmail(email);


            if (emailExistente.length > 0) {
                return res.status(400).json({ msg: "Este email já está cadastrado" });
            }
            else {
                await clienteModel.registrarUsuarios(
                    nome,
                    sobrenome,
                    regra,
                    email,
                    senha

                );
                return res.status(201);
            }
        } catch (error) {
            res.status(500).json({ mensagem: error.message });
        }

    },

    LoginUsuario: async (req, res) => {
        const { email, senha } = req.body;

        try {
            const resultado = await clienteModel.login(email, senha)

            if (!resultado) {
                return res.status(401).json({ msg: "Email ou senha incorretos" })
            }
            else {
                res.status(200).json({ token: resultado.token, regra: resultado.regra });
            }
        }
        catch (error) {
            res.status(500).json({ mensagem: error.message })

        }
    },
    //controller para verificar se o email existe
    verificarEmail: async(req,res)=>{
        const{email}=req.body

        console.log(req.body);
        
        try{
            const consulta = await clienteModel.getEmail(email);

            if(consulta.length > 0){
                res.status(200).json({msg:"sucesso"})
            }
            else{
                res.status(404).json({msg:"falha na consulta"})
            }
        }
        catch(erro){
            res.status(500).json({msg:"Erro no servidor"})
        }

    },

    //controlle para atualizar senha do funcionario
    atualizarSenha: async(req,res) =>{
        const{email,senha}=req.body;
        try{
            const resultado = await clienteModel.resetarSenha(email,senha)

            if(resultado.affectedRows > 0){
                res.status(200).json({msg:"Atualizado com sucessor"})
            }
            else{
                res.status(404).json({msg:"falha ao atualizar"})
            }
        }
        catch(erro){
            res.status(500).json({msg:"Erro no servidor"})
        }
    },

};

module.exports = clienteController;