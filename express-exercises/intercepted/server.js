const express = require('express')
const app = express()

app.use((req, res, next) => {
    req.hello = 'hello'
    next()
})

app.use('/intercepted', require('./routes/intercepted'))

app.listen(8001)