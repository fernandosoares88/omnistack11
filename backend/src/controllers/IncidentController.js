
const connection = require('../database/connection')

module.exports = {
    async index(request, response) {
        const incidents = await connection('incidents').select('*')

        return response.json(incidents)
    },
    async create(request, response) {
        const ong_id = request.headers.authorization
        const { title, description, value } = request.body

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        })

        return response.json({ id })
    },
    async delete(request, response) {
        const ong_id = request.headers.authorization
        const { id } = request.params

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first()

        //Falta tratar o caso do id do incidente não existir no banco
        if (incident.ong_id !== ong_id) {
            return response.status(401).json({ error: 'Operation not permitted' })
        }

        await connection('incidents').where('id', id).delete()

        return response.status(204).send()
    },
}