const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bountySchema = Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: String,
    living: Boolean,
    bountyAmount: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        enum: ['Jedi', 'Sith']
    }
})

module.exports = mongoose.model('Bounty', bountySchema)