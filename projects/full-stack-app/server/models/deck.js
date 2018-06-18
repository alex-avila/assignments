const mongoose = require('mongoose')
const { Schema } = mongoose

// CARD //
// answer
// question
// easinessFactor
// currentRepetition
// nextAvailableDate
// mostRecentInterval
// type: [new, learning, review, relearning]
const cardSchema = new Schema({
    answer: {
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ['new', 'learning', 'review', 'relearning'],
        default: 'new'
    },
    easinessFactor: {
        type: Number,
        required: true,
        default: 2.5
    },
    currentRepetition: {
        type: Number,
        required: true,
        default: 0
    },
    nextReviewDate: {
        type: Date,
        required: true,
        default: new Date.now()
    }
}, { timestamps: true })

// DECK //
// name
// desciption
// cards
// settings
const deckSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    cards: [cardSchema],
    settings: {
        newCards: {},
        reviews: {}
    }
}, { timestamps: true })

module.exports = mongoose.model('Deck', deckSchema)