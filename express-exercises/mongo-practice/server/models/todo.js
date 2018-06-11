const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    priority: {
        type: String,
        enum: ['high', 'medium', 'low'],
        default: 'low'
    },
    time: Number
})

module.exports = mongoose.model('Todo', todoSchema)