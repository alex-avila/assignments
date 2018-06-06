const express = require('express')
const bountyRouter = express.Router()
const bounties = require('../models/bountyData')
const uuid = require('uuid/v4')

bountyRouter.route('/')
    .get((req, res) => res.send(bounties))
    .post((req, res) => {
        req.body.id = uuid() 
        bounties.push(req.body)
        res.send(req.body)
    })

bountyRouter.route('/:id')
    .get((req, res) => res.send(bounties.find(bounty => bounty.id === Number(req.params.id))))
    .put((req, res) => {
        const bounty = bounties.find(bounty => bounty.id == req.params.id)
        Object.assign(bounty, req.body)
        res.send(bounty)
    })
    .delete(((req, res) => {
        bounties.splice(bounties.findIndex(bounty => bounty.id === Number(req.params.id)), 1)
        res.send(bounties)
    }))

module.exports = bountyRouter