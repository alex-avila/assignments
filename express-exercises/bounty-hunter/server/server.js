const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const morgan = require('morgan')

app.use(bodyParser.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost/bounty_db', (err) => {
    if (err) throw err
    console.log('Connected to the database')
})

app.use('/bounties', require('./routes/bountyRoutes'))

app.listen(8000, () => {
    console.log('Server is running on port 8000')
})