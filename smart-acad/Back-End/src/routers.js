const express = require('express');
const usuarioController = require('../controller/controller');
const clienteController = require('../controller/clienteController')
const contratoController = require('../controller/contratoController')
const routers = express.Router();

// login
routers.post('/cadastrar', usuarioController.cadastrarUsuarios);
routers.post('/login', usuarioController.LoginUsuario);
// atualizar senha do usuario do login
routers.post('/atualiza', usuarioController.verificarEmail);
routers.patch('/atualizasenha', usuarioController.atualizarSenha);

// cliente
routers.post('/cadastroCliente', clienteController.cadastrarNovoCliente);
routers.get('/api/listarCliente', clienteController.listarTodos );
routers.delete('/api/deletarcliente/:id', clienteController.deletarId);
routers.put('/api/atualizarCliente/:id', clienteController.atualizarId);
routers.get('/api/listarClientePorId/:id', clienteController.getClientePorId);

// contrato
routers.get('/api/listarporid/:id', contratoController.BuscarClientePorId);
routers.post('/cadastroContrato', contratoController.criarContrato);
routers.get('/api/listarcontrato', contratoController.listarTodosContratos);
routers.delete('/api/deletarcontrato/:id', contratoController.deletarId);
routers.put('/api/atualizarContrato/:id', contratoController.atualizarContratoId);
routers.get('/api/listarContratoPorId/:id', contratoController.getContratoPorId);


module.exports = routers;