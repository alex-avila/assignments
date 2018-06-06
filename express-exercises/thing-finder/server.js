const express = require('express')
const app = express()

const dbzfighters = [
    {name:'Goku', type: 'saiyan'}, 
    {name:'Gohan', type: 'saiyan'}, 
    {name:'Goten', type: 'saiyan'}, 
    {name:'Chichi', type: 'human'}, 
    {name:'Vegeta', type: 'saiyan'}, 
    {name:'Bulma', type: 'human'}, 
    {name:'Trunks', type: 'saiyan'}, 
    {name:'Bulla', type: 'saiyan'},
    {name:'Yamcha', type: 'human'},
    {name:'Tien', type: 'human'},
    {name:'Master Roshi', type: 'human'}
]

const filterDBZCharacters = (query, dbzfighters) => {
    return dbzfighters.filter(character => 
        Object.keys(query).every(q => character[q] === query[q])
    )
}

app.get('/dbzfighters', (req, res) => {
    res.send(filterDBZCharacters(req.query, dbzfighters))
})

app.listen(8000)