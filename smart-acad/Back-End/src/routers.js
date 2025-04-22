const express = require('express');
const clienteController = require('../controller/controller');
const routers = express.Router();

routers.post('/cadastrar', clienteController.);
routers.post('/login', clienteController.LoginUsuario);

module.exports = routers;





