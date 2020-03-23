const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('./models/User')
require('dotenv').config()

const app = express()


mongoose.connect(
    process.env.MONGODB_URL.replace('<password>', process.env.MONGODB_PASSWORD), 
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
)

app.use(bodyParser.urlencoded({ extended: true }))

app.use(require('express-session')({
    secret: 'plan-at-home session',
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())




const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
})