const express = require('express');

const controller = require('../controller/controller');
const routers = express.Router();

//vai acionar meu controlador chmando a função getbyid
routers.get('/listar/:id', controller.getById) //rota para listar coloborador por id
routers.post('/cadastroCliente', controller.createNewCustomer)//rota para cadastrar colaborador
routers.delete('/delete/:id', controller.deleteById)//rota para deletar por id

module.exports = routers;