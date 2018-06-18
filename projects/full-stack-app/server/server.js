const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const port = 8000

app.use(bodyParser.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost/full_stack_app')

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => console.log('Connected to the database'))

// connect to routers with app.use

app.listen(port, () => console.log(`Server running on port ${port}`))