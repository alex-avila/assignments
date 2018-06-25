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
        newCards: [],
        reviews: [],
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
                default: 10
            }
        },
        reviews: {
            perDay: {
                type: Number,
                default: 20
            }
        }
    },
    lastUpdated: {
        type: Date,
        default: Date.now()
    }
}, { timestamps: true })

deckSchema.pre('save', function(next) {
    if (this.isNew || new Date(this.lastUpdated).getDate() !== new Date(Date.now()).getDate()) {
        const cardsInQueue = this.cards.filter(card => new Date(card.availableDate) <= Date.now())
        this.inQueue.newCards = cardsInQueue.filter(card => !card.hasBeenSeen).slice(0, this.settings.newCards.perDay)
        this.inQueue.reviews = cardsInQueue.filter(card => card.hasBeenSeen).slice(0, this.settings.reviews.perDay)
        this.inQueue.len = this.inQueue.newCards.length + this.inQueue.reviews.length
        this.lastUpdated = Date.now()
    }
    if (this.$addedManually) {
        // console.log(this.cards.slice(50))
        // let card = this.$cards[0]
        // console.log(card)
        // card = this.cards.find(card => card.question == card.question)
        // console.log(card)
        this.inQueue.newCards.push(this.cards[this.cards.length - 1])
        this.inQueue.len = this.inQueue.newCards.length
        this.lastUpdated = Date.now()
    }
    next()
})

deckSchema.pre('save', function() {
    if (this.$card && this.$quality > 3) {
        if (this.inQueue.newCards.findIndex(card => card.question === this.$card.question) !== -1) {
            this.inQueue.newCards.splice(this.inQueue.newCards.findIndex(card => card.question === this.$card.question), 1)
        } else {
            this.inQueue.reviews.splice(this.inQueue.reviews.indexOf(this.$card), 1)
        }
        this.inQueue.len = this.inQueue.newCards.length + this.inQueue.reviews.length
    }
})

module.exports = mongoose.model('Deck', deckSchema)