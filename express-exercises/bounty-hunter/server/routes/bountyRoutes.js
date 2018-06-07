const express = require('express')
const bountyRouter = express.Router()
const Bounty = require('../models/bounty')

bountyRouter.route('/')
    .get((req, res) => {
        Bounty.find((err, bounties) => {
            if (err) return res.status(500).send(err)
            return res.send(bounties)
        })
    })
    .post((req, res) => {
        const newBounty = new Bounty(req.body)
        newBounty.save((err, savedBounty) => {
            if (err) return res.status(500).send(err)
            return res.status(201).send(savedBounty)
        })
    })

bountyRouter.route('/:id')
    .put((req, res) => {
        console.log(req.params)
        Bounty.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true},
            (err, updatedDog) => {
                if (err) return res.status(500).send(err)
                return res.status(201).send(updatedDog)
            }
        )
    })
    .delete(((req, res) => {
        Bounty.findByIdAndRemove(req.params.id, (err, removedDog) => {
            if (err) return res.status(500).send(err)
            return res.status(201).send(removedDog)
        })
    }))

module.exports = bountyRouter