const config = require('./utils/config')
const express = require('express')

const app = express()
const cors = require('cors')

//define here the routers
//const CerberusRouter = require('./controllers/Cerberus')


app.use(cors())
app.use(express.static('build'))
app.use(express.json())

//app.use('api/v1/Cerberus', CerberusRouter)

module.exports = app