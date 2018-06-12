const express = require('express')
const commentsRoutes = express.Router()
const Comment = require('../models/comment')

commentsRoutes.route('/')
    .get((req, res) => {

    })
    .post((req, res) => {

    })

commentsRoutes.route('/:id')
    .get((req, res) => {

    })
    .put((req, res) => {

    })
    .delete((req, res) => {

    })

module.exports = commentsRoutes