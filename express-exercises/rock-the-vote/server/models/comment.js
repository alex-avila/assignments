const mongoose = require('schema')
const Schema = mongoose.Schema

/*
Each comment should have:
content,
date (made automatically),
### author (made automatically, forget about this, though, for now),
votes/likes,
reference to issue
*/

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