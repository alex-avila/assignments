const express = require('express')
const intercepted = express.Router()

intercepted.route('/').get((req, res) => res.send(req.hello))

module.exports = intercepted