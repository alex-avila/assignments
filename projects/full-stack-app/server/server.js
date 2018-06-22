const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const port = 8000

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(fileUpload())
app.use('/public', express.static(__dirname + '/public'))

mongoose.connect('mongodb://localhost/full_stack_app', (err) => {
    if (err) throw err
    console.log('Connected to the database')
})

app.use('/decks', require('./routes/deckRoutes'))

app.listen(port, () => console.log(`Server is running on port ${port}`))