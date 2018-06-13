const express = require('express')
const commentsRoutes = express.Router({ mergeParams: true })
const Comment = require('../models/comment')
const Issue = require('../models/issue')

commentsRoutes.route('/')
    .get((req, res) => {
        Comment.find((err, comments) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(comments)
        })
    })
    .post((req, res) => {
        const comment = new Comment({ ...req.body, issue: req.params.issueId })
        comment.save((err, comment) => {
            if (err) return res.status(500).send(err)
            Issue.findByIdAndUpdate(
                req.params.issueId,
                { $inc: { commentsCount: 1 } },
                { new: true },
                (err, updatedIssue) => {
                    if (err) return res.status(500).send(err)
                    return res.status(201).send({ updatedIssue, comment })
                }
            )
        })
    })

commentsRoutes.route('/:commentId')
    .get((req, res) => {
        Comment.findById(req.params.commentId, (err, foundComment) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(foundComment)
        })
    })
    .put((req, res) => {
        Comment.findByIdAndUpdate(
            req.params.commentId,
            req.body,
            { new: true },
            (err, updatedComment) => {
                if (err) return res.status(500).send(err)
                return res.status(200).send(updatedComment)
            }
        )
    })
    .delete((req, res) => {
        Comment.findByIdAndRemove(req.params.commentId, (err, removedComment) => {
            if (err) return res.status(500).send(err)
            Issue.findByIdAndUpdate(
                req.params.issueId,
                { $inc: { commentsCount: -1 } },
                { new: true },
                (err, updatedIssue) => {
                    if (err) return res.status(500).send(err)
                    return res.status(200).send({ updatedIssue, removedComment })
                }
            )
        })
    })

module.exports = commentsRoutes