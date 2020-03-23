const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const User = require('./models/User')
require('dotenv').config()

const app = express()


mongoose.connect(
    process.env.MONGODB_URL.replace('<password>', process.env.MONGODB_PASSWORD), 
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
)

app.use(bodyParser.urlencoded({ extended: true }))


app.get('/api', (req, res) => {
    console.log(req.body)
    res.send('okkk')
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
})