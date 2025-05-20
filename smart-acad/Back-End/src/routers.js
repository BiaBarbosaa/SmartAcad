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
routers.delete('/api/deletarproduto/:id', clienteController.deletarId);
routers.put('/api/atualizar/:id', clienteController.atualizarId);

// contrato
routers.get('/listarporid/:id', contratoController.BuscarClientePorId);
routers.get('/getAllPagamento', contratoController.getAllPagamento);
routers.get('/getAllPlanos', contratoController.getAllPlanos);
routers.get('getAllServicos', contratoController.getAllServicos);
routers.post('/cadastroContrato', contratoController.criarContrato);


module.exports = routers;