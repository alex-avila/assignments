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
        newCards: {
            perDay: {
                type: Number,
                default: 20
            }
        },
        reviews: {
            perDay: {
                type: Number,
                default: 40
            }
        }
    },
    // So here's what's finna to happen, dawg
    // This date will be saved in the database
    // If the actual current day is not this today below
        // cards per deck may be updated in redux
    // else
        // cards per deck will stay the same in redux
    // Note: Every time there is a quality response of 4 or higher
    // cards per deck will be updated so that srs works as expected
    today: {
        type: Date,
        default: Date.now()
    }
}, { timestamps: true })

deckSchema.pre('save', function () {
    const cardsInQueue = this.cards.filter(card => new Date(card.availableDate) <= Date.now())
    this.inQueue.cards = cardsInQueue
    this.inQueue.len = cardsInQueue.length
    this.today = Date.now()
})

module.exports = mongoose.model('Deck', deckSchema)