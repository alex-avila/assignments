const mongoose = require('mongoose')
const { Schema } = mongoose

const cardSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    repetition: {
        type: Number,
        required: true,
        default: 1
    },
    eFactor: {
        type: Number,
        required: true,
        default: 2.5
    },
    availableDate: {
        type: Date,
        required: true,
        default: Date.now()
    },
    hasBeenSeen: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

const deckSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: String,
    cards: [cardSchema],
    inQueue: {
        cards: [],
        len: {
            type: Number,
            default: 0
        }
    },
    settings: {
        newCards: {},
        reviews: {}
    }
}, { timestamps: true })

deckSchema.pre('save', function () {
    const cardsInQueue = this.cards.filter(card => new Date(card.availableDate) <= Date.now())
    this.inQueue.cards = cardsInQueue
    this.inQueue.len = cardsInQueue.length
})

module.exports = mongoose.model('Deck', deckSchema)