const express = require('express')

const app = express()

/**
 * Utilizando o JSON no body das requisições
 */
app.use(express.json())

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após '?' (Filtros, paginação...)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizados para criar ou alterar recursos
 */

 

app.post('/', (request, response) => {
    
    return response.json({
        evento: 'semana omni stack 11.0',
        aluno: 'Fernando Soares'
    })
})

app.listen(3333)

