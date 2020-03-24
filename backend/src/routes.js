const express = require('express')
const OngController = require('./controllers/OngController')

const routes = express.Router()

/**
 * Rota para recuperar a lista de ONGs
 */
routes.get('/ongs', OngController.list)

/**
 * Rota para criar uma nova ONG
 */
routes.post('/ongs', OngController.create)

module.exports = routes