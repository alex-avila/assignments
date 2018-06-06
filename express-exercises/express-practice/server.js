const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const uuidv1 = require('uuid/v1')

app.use(bodyParser.json())

const games = [
    {id: 1, name: 'Horizon Zero Dawn', releaseDate: 15000968}, 
    {id: 2, name: 'God of War', releaseDate: 15878787}
]

app.get('/games', (req, res) => {res.send(games)})

app.post('/games', (req, res) => {
    req.body.id = uuidv1()
    games.push(req.body)
    res.send(req.body)
})

app.listen(8000)