const express = require('express')
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')

const routes = express.Router()

/**
 * Rotas para Ongs
 */
routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

/**
 * Rotas para Profile
 */
routes.get('/profile', ProfileController.index)

/**
 * Rotas para casos (incidents)
 */
routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes