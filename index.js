const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()


mongoose.connect(
    process.env.MONGODB_URI.replace('<password>', process.env.MONGODB_PASSWORD), 
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
)

app.use(bodyParser.urlencoded({ extended: true }))

app.use('/register', require('./routes/register'))
app.use('/login', require('./routes/login'))


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
})