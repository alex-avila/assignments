const express = require('express')
const deckRoutes = express.Router()
const Deck = require('../models/deck')

/**
 * Handles response to be less repetetive
 * @param {Object} err - Error object
 * @param {Object} res - Response object
 * @param {Object} data - Data object to send back
 * @param {string} method - String of method used to determine status
 */
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
    .put((req, res) => {
        // Currently set up to only allow one card to be added at a time
        const { cards } = req.body
        const question = cards[0].question
        // https://stackoverflow.com/questions/32024548/how-to-create-a-unique-list-of-json-elements-using-node-js-with-mongoose
        // Work around to make each card unique
        const query = {
            "cards": {
                $not: {
                    $elemMatch: cards[0]
                }
            }
        }
        const bodyWithoutCards = Object.keys(req.body).reduce((final, key) => {
            return key !== 'cards' ? {...final, [key]: req.body[key]} : final
        }, {})
        Deck.findOneAndUpdate(
            query,
            { $push: { cards }, ...bodyWithoutCards },
            { new: true },
            (err, updatedDeck) => handleRes(err, res, updatedDeck)
        )
    })
    .delete((req, res) => {
        Deck.findByIdAndRemove(req.params.deckId, (err, deletedDeck) => handleRes(err, res, deletedDeck))
    })

deckRoutes.use('/:deckId/cards', require('./cardRoutes'))

module.exports = deckRoutes