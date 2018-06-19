const express = require('express')
const cardRoutes = express.Router({ mergeParams: true })
const Deck = require('../models/deck')
const { calcEF, calcInterval } = require('../supermemo/supermemo2')

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

cardRoutes.route('/:cardId')
    .get((req, res) => {
        const { deckId, cardId } = req.params
        Deck.findById(deckId, (err, foundDeck) => {
            handleRes(err, res, foundDeck.cards.id(cardId))
        })
    })
    .put((req, res) => {
        const { deckId, cardId } = req.params
        Deck.findById(deckId, (err, foundDeck) => {
            // Find card
            const card = foundDeck.cards.id(cardId)

            // Run supermemo algorithm to get the E-Factor and inter-repetition interval using quality from body
            const { quality } = req.body
            const eFactor = calcEF(quality, card.eFactor)
            const interRepetitionInterval = calcInterval(card.repetition, eFactor)

            // Set new review date
            // https://stackoverflow.com/questions/40642154/use-mongoose-to-update-subdocument-in-array
            let repetition = card.repetition
            // Card is only given a new available date if they respond with a quality of 4 or greater
            if (quality > 3) {
                card.availableDate.setUTCDate(card.availableDate.getUTCDate() + interRepetitionInterval)
                repetition += 1
            } else if (quality === 3) {
                repetition = repetition
            } else if (quality < 3) {
                repetition = 1
            }

            // Set card with new values
            card.set({ eFactor, availableDate: card.availableDate, repetition })

            // Save/update parent foundDeck
            foundDeck.save((err, savedDeck) => {
                handleRes(err, res, savedDeck.cards.id(cardId))
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