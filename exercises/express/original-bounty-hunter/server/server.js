const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const uuid = require('uuid/v4')

app.use(bodyParser.json())
app.use('/bounties', require('./routes/bountyRoutes'))

app.listen(8000)