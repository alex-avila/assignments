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
        // this might be bad because
        // It would be nice to use populate though
        // I have the comments pointers in the 'one' side
        // and I also have the issue pointer in the 'many' side
        // Issue.find({})
        // .populate('comments')
        // .exec((err, issues) => {
        //     handleRequest(res, err, issues)
        // })
        // this is better, I think
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
        // this might also be bad
        // Issue.findById(req.params.issueId)
        // .populate('comments')
        // .exec((err, foundIssue) => {
        //     handleRequest(res, err, foundIssue)
        // })
        // this is better, I think
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