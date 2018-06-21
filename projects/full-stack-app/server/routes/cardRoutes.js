const express = require('express')
const cardRoutes = express.Router({ mergeParams: true })

const Deck = require('../models/deck')

const { getDateAndRepetition, getIntervalAndEF } = require('../utilities/cardUtilities')

const handleRes = (err, res, data, method = '') => {
    if (err) return res.status(500).send(err)
    return res.status(method === 'POST' ? 201 : 200).send(data)
}

cardRoutes.route('/')
    .get((req, res) => {
        Deck.findById(req.params.deckId, (err, { cards }) => {
            handleRes(err, res, cards)
        })
    })
    .put((req, res) => {
        // Currently set up to only allow one card to be added at a time
        const { cards } = req.body
        // Work around to make each card unique
        const query = {
            "cards": {
                $not: {
                    $elemMatch: cards[0]
                }
            }
        }
        const bodyWithoutCards = Object.keys(req.body).reduce((final, key) => {
            return key !== 'cards' ? { ...final, [key]: req.body[key] } : final
        }, {})
        Deck.findOneAndUpdate(
            query,
            { $push: { cards }, ...bodyWithoutCards },
            { new: true },
            (err, updatedDeck) => handleRes(err, res, updatedDeck)
        )
    })

cardRoutes.route('/:cardId')
    .get((req, res) => {
        const { deckId, cardId } = req.params
        Deck.findById(deckId, (err, foundDeck) => {
            handleRes(err, res, foundDeck.cards.id(cardId))
        })
    })
    .put((req, res) => {
        const { deckId, cardId } = req.params
        // Find Deck
        Deck.findById(deckId, (err, foundDeck) => {
            const card = foundDeck.cards.id(cardId)
            const { quality } = req.body

            const [eFactor, interval] = getIntervalAndEF(quality, card.eFactor, card.repetition)
            const [availableDate, repetition] = getDateAndRepetition(quality, card.repetition, card.availableDate, interval)
            console.log(availableDate, repetition)

            // Set card with new values
            card.set({ eFactor, availableDate, repetition })

            // Save/update parent foundDeck
            foundDeck.save((err, savedDeck) => {
                handleRes(err, res, savedDeck)
            })
        })
    })
    .delete((req, res) => {
        const { deckId, cardId } = req.params
        Deck.findById(deckId, (err, foundDeck) => {
            foundDeck.cards.pull(cardId)
            foundDeck.save((err, savedDeck) => {
                handleRes(err, res, savedDeck)
            })
        })
    })

module.exports = cardRoutes


// Resources
// https://stackoverflow.com/questions/40642154/use-mongoose-to-update-subdocument-in-array
// https://stackoverflow.com/questions/32024548/how-to-create-a-unique-list-of-json-elements-using-node-js-with-mongoose