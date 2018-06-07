const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const morgan = require('morgan')

app.use(bodyParser.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost/crud-store')
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', () => {
    console.log('We\'re connected.')
})

app.use('/inventory', require('./routes/inventoryRoutes'))

app.listen(8001, () => {
    console.log('Server is running on server 8001')
})