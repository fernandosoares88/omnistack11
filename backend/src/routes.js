const express = require('express')
const crypto = require('crypto')
const connection = require('./database/connection')

const routes = express.Router()

routes.get('/ongs', async (request, response) => {
    const ongs = await connection('ongs').select('*')

    return response.json(ongs)
})

/**
 * Rota para criar uma nova ONG
 */
routes.post('/ongs', async (request, response) => {
    const { nome, email, whatsapp, city, uf } = request.body
    // console.log(data)

    const id = crypto.randomBytes(4).toString('HEX')

    await connection('ongs').insert({
        id, 
        nome,
        email,
        whatsapp,
        city,
        uf
    })

    return response.json({id})
})

module.exports = routes