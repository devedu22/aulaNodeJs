const express = require('express');
const routes = express.Router()
const PessoasControllers = require('../controllers/pessoasControllers')


routes.get('/', PessoasControllers.index);
routes.post('/pessoas',PessoasControllers.store)
routes.get('/pessoa',PessoasControllers.pessoa)
routes.get('/sobre',PessoasControllers.sobre)

module.exports = routes