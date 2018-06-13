const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Maybe add author later
const commentSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    votes: {
        type: Number,
        default: 0
    },
    issue: {
        type: Schema.Types.ObjectId,
        ref: 'Issue'
    }
}, { timestamps: true})

module.exports = mongoose.model('Comment', commentSchema)