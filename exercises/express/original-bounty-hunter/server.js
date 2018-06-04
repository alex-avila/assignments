const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const uuid = require('uuid/v4')

app.use(bodyParser.json())

const bounties = [
    {firstName: 'Luke', lastName: 'Skywalker', living: true, bountyAmount: 150000, type: 'Jedi', id: 1},
    {firstName: 'Darth', lastName: 'Vader', living: false, bountyAmount: 200000, type: 'Sith', id: 2},
    {firstName: 'Anakin', lastName: 'Skywalker', living: true, bountyAmount: 100000, type: 'Jedi', id: 3}
]

app.get('/bounties', (req, res) => {res.send(bounties)})

app.post('/bounties', (req, res) => {
    req.body.id = uuid() 
    bounties.push(req.body)
    res.send(req.body)
})

app.listen(8000)