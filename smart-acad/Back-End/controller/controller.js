const usuarioModel = require('../models/models');

const clienteController = {

    cadastrarUsuarios: async (req, res) => {

        const { nome, sobrenome, regra, email, senha } = req.body;

        console.log(req.body);
        try {
            const emailExistente = await usuarioModel.getEmail(email);


            if (emailExistente.length > 0) {
                return res.status(400).json({ msg: "Este email já está cadastrado" });
            }
            else {
                await usuarioModel.registrarUsuarios(
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
            const resultado = await usuarioModel.login(email, senha)

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
        
        try{
            const consulta = await usuarioModel.getEmail(email);

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
            const resultado = await usuarioModel.resetarSenha(email,senha)

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