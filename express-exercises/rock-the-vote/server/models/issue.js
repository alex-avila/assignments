const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Maybe add author/user later
const issueSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    votes: {
        type: Number,
        default: 0
    },
    commentsCount: {
        type: Number,
        default: 0
    }
}, { timestamps: true })

module.exports = mongoose.model('Issue', issueSchema)