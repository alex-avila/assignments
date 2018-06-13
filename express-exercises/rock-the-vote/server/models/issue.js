const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Maybe add author later
const issueSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    content: {
        type: String,
        required: true
    },
    votes: {
        type: Number,
        default: 0
    }
    // Commented out because I want to avoid pointing to many comments here
    // It seems like it's better to have each comment have one pointer to an issue
    // comments: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Comment'
    // }]
}, { timestamps: true })

module.exports = mongoose.model('Issue', issueSchema)