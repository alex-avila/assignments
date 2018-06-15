const express = require('express')
const issuesRoutes = express.Router()
const Issue = require('../models/issue')
const Comment = require('../models/comment')
const commentsRouter = require('./comments')

issuesRoutes.use('/:issueId/comments', commentsRouter)

const handleRequest = (res, err, data, method = 'not post') => {
    if (err) return res.status(500).send(err)
    return method !== 'POST' ?
        res.status(200).send(data) : res.status(201).send(data)
}

issuesRoutes.route('/')
    .get((req, res) => {
        Issue.find((err, issues) => {
            handleRequest(res, err, issues)
        })
    })
    .post((req, res) => {
        const issue = new Issue(req.body)
        issue.save((err, issue) => {
            handleRequest(res, err, issue, req.method)
        })
    })

issuesRoutes.route('/:issueId')
    .get((req, res) => {
        Issue.findById(req.params.issueId, (err, foundIssue) => {
            if (err) return res.status(500).send(err)
            Comment.find({ issue: foundIssue._id }, (err, comments) => {
                handleRequest(res, err, {foundIssue, comments})
            })
        })
    })
    .put((req, res) => {
        Issue.findByIdAndUpdate(
            req.params.issueId,
            req.body,
            { new: true },
            (err, updatedIssue) => {
                handleRequest(res, err, updatedIssue)
            }
        )
    })
    .delete((req, res) => {
        Issue.findByIdAndRemove(req.params.issueId, (err, removedIssue) => {
            handleRequest(res, err, removedIssue)
        })
    })

module.exports = issuesRoutes