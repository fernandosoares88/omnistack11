const express = require('express')
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')

const routes = express.Router()

/**
 * Rotas para Ongs
 */
routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)


/**
 * Rotas para casos (incidents)
 */
routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)

module.exports = routes