const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes.js')

mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const app = express()
app.use(express.json())
app.use(routes)
app.listen(3000)