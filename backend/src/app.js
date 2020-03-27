const express = require('express')
const routes = require('./routes') // ./ é necessário pois é um arquivo e não um módulo
const cors = require('cors')
const {errors} = require('celebrate')

const app = express()

app.use(cors())

// Em produção seria algo mais ou menos assim:
// app.use(cors({
//     origin: 'https://meuapp.com'
// }))

/**
 * Utilizando o JSON no body das requisições
 */
app.use(express.json())

app.use(routes)
app.use(errors())

module.exports = app

