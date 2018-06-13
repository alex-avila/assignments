const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const port = 8000

app.use(bodyParser.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost/rock_the_vote')

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => console.log('Connected to the database'))

app.use('/issues', require('./routes/issues'))

app.listen(port, () => console.log(`Server running on port ${port}`))