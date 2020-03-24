const express = require('express')

const routes = require('./routes') // ./ é necessário pois é um arquivo e não um módulo

const app = express()

/**
 * Utilizando o JSON no body das requisições
 */
app.use(express.json())

app.use(routes)

app.listen(3333)

