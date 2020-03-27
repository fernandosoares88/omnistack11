
const connection = require('../database/connection')
const generateUniqueId = require('../utils/generateUniqueId')

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*')

        return response.json(ongs)
    },
    async create(request, response) {
        const { nome, email, whatsapp, city, uf } = request.body
        // console.log(data)

        const id = generateUniqueId()

        await connection('ongs').insert({
            id,
            nome,
            email,
            whatsapp,
            city,
            uf
        })

        return response.json({ id })
    }
}