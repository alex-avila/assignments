const express = require('express')
const deckRoutes = express.Router()
const Deck = require('../models/deck')

// API DESIGN: Basic Version //
/*
HTTP Verb | Endpoint   | Action
—————————————————————————————————————
GET       | /decks     | List all decks
POST      | /decks     | Create new deck
GET       | /decks/1   | Get details for deck #1
PUT       | /decks/1   | Update deck #1
DELETE    | /decks/1   | Delete deck #1
*/

/**
 * Handles response to be less repetetive
 * @param {Object} res - Response object
 * @param {Object} err - Error object
 * @param {Object} data - Data object to send back
 * @param {string} method - String of method used to determine status
 */
const handleRes = (res, err, data, method = '') => {
    if (err) return res.status(500).send(err)
    return res.status(method === 'POST' ? 201 : 200).send(data)
}

deckRoutes.route('/')
    .get((req, res) => {
        Deck.find((err, decks) => handleRes(res, err, decks))
    })
    .post((req, res) => {
        const deck = new Deck(req.body)
        deck.save((err, savedDeck) => handleRes(res, err, savedDeck, req.method))
    })

deckRoutes.route('/:id')
    .get((req, res) => {
        Deck.findById(req.params.id, (err, foundDeck) => handleRes(res, err, foundDeck))
    })
    .put((req, res) => {
        // If I change the structure of the model,
        // I'll have to change this as well
        const { name, description, settings, cards } = req.body
        Deck.findByIdAndUpdate(
            req.params.id,
            { name, description, settings, $push: { cards } },
            { new: true },
            (err, updatedDeck) => handleRes(res, err, updatedDeck)
        )
    })
    .delete((req, res) => {
        Deck.findByIdAndRemove(req.params.id, (err, deletedDeck) => handleRes(res, err, deletedDeck))
    })

module.exports = deckRoutes