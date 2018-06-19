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
    learntDate: {
        type: Date
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
    settings: {
        newCards: {},
        reviews: {}
    }
}, { timestamps: true })

module.exports = mongoose.model('Deck', deckSchema)


// DECK EXAMPLE //
// {
//     _id: 1u25u2950,
//     name: 'Chinese',
//     cards: [
//         {
//             _id: 2j948574ujgje,
//             question: '你好',
//             answer: 'Hello',
//             repetition: 0,
//             eFactor: 2.5,
//             availableDate: 12039580219786,
//         },
//         {
//             _id: 98698u3et1234,
//             question: '我',
//             answer: 'I',
//             repetition: 0,
//             eFactor: 2.5,
//             availableDate: 12039580219786,
//         },
//         {
//             _id: j908347583746mf,
//             question: '再见',
//             answer: 'See you later; Goodbye',
//             repetition: 0,
//             eFactor: 2.5,
//             availableDate: 12039580219786,
//         }
//     ]
// }