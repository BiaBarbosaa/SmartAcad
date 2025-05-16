const express = require('express');
const usuarioController = require('../controller/controller');
const clienteController = require('../controller/clienteController')
const contratoController = require('../controller/contratoController')
const routers = express.Router();

// login
routers.post('/cadastrar', usuarioController.cadastrarUsuarios);
routers.post('/login', usuarioController.LoginUsuario);
// atualizar senha do usuario
routers.post('/atualiza', usuarioController.verificarEmail);
routers.patch('/atualizasenha', usuarioController.atualizarSenha);

// Cadrastar cliente
routers.post('/cadastroCliente', clienteController.cadastrarNovoCliente);
routers.get('/api/listarCliente', clienteController.listarTodos );
routers.delete('/api/deletarproduto/:id', clienteController.deletarId);

// contrato
routers.get('/api/listarporid/:id', contratoController.BuscarClientePorId);




module.exports = routers;





