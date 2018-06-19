const express = require('express')
const deckRoutes = express.Router()
const Deck = require('../models/deck')

const handleRes = (err, res, data, method = '') => {
    if (err) return res.status(500).send(err)
    return res.status(method === 'POST' ? 201 : 200).send(data)
}

deckRoutes.route('/')
    .get((req, res) => {
        Deck.find((err, decks) => handleRes(err, res, decks))
    })
    .post((req, res) => {
        const deck = new Deck(req.body)
        deck.save((err, savedDeck) => handleRes(err, res, savedDeck, req.method))
    })

deckRoutes.route('/:deckId')
    .get((req, res) => {
        Deck.findById(req.params.deckId, (err, foundDeck) => handleRes(err, res, foundDeck))
    })
    .delete((req, res) => {
        Deck.findByIdAndRemove(req.params.deckId, (err, deletedDeck) => handleRes(err, res, deletedDeck))
    })

deckRoutes.use('/:deckId/cards', require('./cardRoutes'))

module.exports = deckRoutes