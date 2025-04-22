const clienteModel = require('../models/models');

const clienteController = {


    cadastrarUsuarios: async (req, res) => {
        const { nome, sobrenome, setor, email, senha, regra } = req.body;

        try {
            const emailExistente = await clienteModel.getEmail(email);
            if (emailExistente.length > 0) {
                return res.status(400).json({ msg: "Este email já está cadastrado" });
            }
            else{
                 await clienteModel.registrarUsuarios(
                    nome,
                    sobrenome,
                    setor,
                    email,
                    senha,
                    regra
                 
                );
                return res.status(201).json({msg: "Funcionário cadastrado com sucesso!"});
            }
        } catch (error) {
            res.status(500).json({mensagem: error.message});
         
        }
    },

    LoginUsuario: async (req, res) => {
        const { email, senha } = req.body; //um post que vem do body


        try {
            const resultado = await clienteModel.login(email, senha)

            if (!resultado) {
                return res.status(401).json({ msg: "Email ou senha incorretos" })
            }
            else {
                res.status(201).json({ msg: "Login feito com sucesso!" })
            }
        }
        catch(error) {
            res.status(500).json({ msg: "Erro no servidor" })
        
        }
    }

};

module.exports = clienteController;