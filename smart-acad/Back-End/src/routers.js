const express = require('express');
const colaboradorController = require('../controller/controller');
const clienteController = require('../controller/clienteController')
const routers = express.Router();

// login
routers.post('/cadastrar', colaboradorController.cadastrarUsuarios);
routers.post('/login', colaboradorController.LoginUsuario);

// Cadrastar cliente
routers.post('/cadastroCliente', colaboradorController.cadastrarNovoCliente);
routers.get('/api/listarCliente', clienteController.listarTodos );
routers.delete('/api/deletarproduto/:id', clienteController.deletarId);


module.exports = routers;





