const express = require('express');
const clienteController = require('../controller/controller');
const routers = express.Router();

// login
routers.post('/cadastrar', clienteController.cadastrarUsuarios);
routers.post('/login', clienteController.LoginUsuario);

// Cadrastar cliente
routers.post('/cadastroCliente', clienteController.cadastrarNovoCliente);

module.exports = routers;





