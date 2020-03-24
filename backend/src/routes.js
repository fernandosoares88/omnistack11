const express = require('express')

const routes = express.Router()

routes.post('/', (request, response) => {
    
    return response.json({
        evento: 'semana omni stack 11.0',
        aluno: 'Fernando Soares'
    })
})

module.exports = routes