const clienteModel = require('../models/models');

const clienteController = {

    async cadastrarNovoCliente(req, res) {
        let dataFormatada = null;
        
        try {
            const {nome, sobrenome, genero, idade, telefone, cpf, email, cep, logradouro, complemento, cidade, uf, observacao, status} = req.body
          
            console.log(req.body);
            
            if (!nome || !sobrenome || !genero || !idade || !telefone || !cpf || !email || !cep || !logradouro || !cidade || !uf || !status) { 
                return res.status(400).json({ mensagem: "Os campos são obrigatórios" }) 
            }

            const categoriaAtiva = ['Ativo', 'Inativo']  
            if (!categoriaAtiva.includes(status)) {
                return res.status(400).json({ mensagem: "Categoria inválida" }) 
            }
            const generoValido = ['F', 'M']  
            if (!generoValido.includes(genero)) {
                return res.status(400).json({ mensagem: "Categoria inválida" }) 
            }

            const NovoCliente = await clienteModel.criarCliente(
                nome, sobrenome, genero, idade, telefone, cpf, email, cep, logradouro, complemento, cidade, uf, observacao, status);

            res.status(201).json(NovoCliente);

        }
        catch(error) { 
            console.log(error);
            res.status(500).json({mensagem: error.message});
          
        }

    },

    cadastrarUsuarios: async (req, res) => {
 
        const { nome, sobrenome, regra, email, senha} = req.body;
        console.log(req.body)
        try {
            const emailExistente = await clienteModel.getEmail(email);
            if (emailExistente.length > 0) {
                return res.status(400).json({ msg: "Este email já está cadastrado" });
            }
            else{
                 await clienteModel.registrarUsuarios(
                    nome,
                    sobrenome,
                    regra,
                    email,
                    senha
                 
                );
                return res.status(201).json({msg: "Cliente cadastrado com sucesso!"});
            }
        } catch (error) {
            res.status(500).json({mensagem: error.message});
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
        catch(error) {
            console.log(error)
            res.status(500).json({ msg: "Erro no servidor" })
        
        }
    }

};

module.exports = clienteController;