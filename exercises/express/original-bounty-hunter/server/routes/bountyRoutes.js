const express = require('express')
const bountyRouter = express.Router()
const bounties = require('../models/bountyData')

bountyRouter.route('/')
    .get((req, res) => res.send(bounties))
    .post((req, res) => {
        req.body.id = uuid() 
        bounties.push(req.body)
    })

bountyRouter.route('/:id')
    .get((req, res) => res.send(bounties.find(bounty => bounty.id === Number(req.params.id))))
    .put((req, res) => {
        bountyIndex = bounties.indexOf(bounties.find(bounty => bounty.id === Number(req.params.id)))
        Object.keys(req.body).forEach(key => {
            bounties[bountyIndex][key] = req.body[key]
        })
        res.send(bounties[bountyIndex])
    })
    .delete(((req, res) => {
        bounties.splice(bounties.indexOf(bounties.find(bounty => bounty.id === Number(req.params.id))), 1)
        res.send(bounties)
    }))
    
module.exports = bountyRouter