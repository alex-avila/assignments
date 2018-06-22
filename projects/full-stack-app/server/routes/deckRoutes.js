const express = require('express')
const deckRoutes = express.Router()
const Deck = require('../models/deck')
const csv = require('csv')
const fs = require('fs')

const handleRes = (err, res, data, method = '') => {
    if (err) return res.status(500).send(err)
    return res.status(method === 'POST' ? 201 : 200).send(data)
}

deckRoutes.route('/')
    .get((req, res) => {
        Deck.find((err, decks) => handleRes(err, res, decks))
    })
    .post((req, res) => {
        const csvFile = req.files.file

        console.log(__dirname)
        csvFile.mv(`${__dirname}/${req.body.filename}.csv`, (err) => {
            if (err) return res.status(500).send(err)
            res.json({ file: `public/${req.body.filename}.jpg` })
        })

        const csvData = []
        fs.createReadStream(csvFile.data)
            .pipe(csv.parse({ delimiter: ':' }))
            .on('data', csvrow => {
                console.log(csvrow)
                csvData.push(csvrow)
            })
            .on('end', () => [
                console.log(csvData)
            ])


        // const deck = new Deck(req.body)
        // deck.save((err, savedDeck) => handleRes(err, res, savedDeck, req.method))
    })

deckRoutes.route('/:deckId')
    .get((req, res) => {
        console.log('Finding one deck by id.')
        Deck.findById(req.params.deckId, (err, foundDeck) => {
            foundDeck.save((err, savedDeck) => {
                handleRes(err, res, savedDeck)
            })
        })
    })
    .delete((req, res) => {
        Deck.findByIdAndRemove(req.params.deckId, (err, deletedDeck) => handleRes(err, res, deletedDeck))
    })

deckRoutes.use('/:deckId/cards', require('./cardRoutes'))

module.exports = deckRoutes