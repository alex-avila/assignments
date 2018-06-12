const express = require('express')
const issuesRoutes = express.Router()
const Issue = require('../models/issue')

issuesRoutes.route('/')
    .get((req, res) => {

    })
    .post((req, res) => {

    })

issuesRoutes.route('/:id')
    .get((req, res) => {

    })
    .put((req, res) => {

    })
    .delete((req, res) => {

    })

module.exports = issuesRoutes