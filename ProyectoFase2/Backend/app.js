
const express = require('express')

const app = express()
const cors = require('cors')

//define here the routers
const CerberusRoute = require('./controllers/cerberus')


app.use(cors())
app.use(express.static('build'))
app.use(express.json())


app.use('api/v1/Cerberus', CerberusRoute)

module.exports = app