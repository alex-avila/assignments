const mongoose = require('mongoose')
const Schema = mongoose.Schema

/*
Each issue should have:
title,
description,
content (only shown on issue view),
date (made automatically),
### author (made automatically, forget about this though for now),
votes,
comments
*/

const issueSchema = new Schema({
    title: {
        type: String,
        required: True
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
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]
}, { timestamps: true })

module.exports = mongoose.model('Issue', issueSchema)