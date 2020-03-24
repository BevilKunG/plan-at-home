const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const { check, validationResult } = require('express-validator/check')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('./models/User')
require('dotenv').config()

const app = express()


mongoose.connect(
    process.env.MONGODB_URI.replace('<password>', process.env.MONGODB_PASSWORD), 
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
)

app.use(bodyParser.urlencoded({ extended: true }))

app.post(
    '/register', 
    [
        check('username', 'Please enter a valid username')
        .not()
        .isEmpty(),
        check('email', 'Please enter a valid email').isEmail(),
        check('password', 'Please enter a valid password').isLength({ min: 6 })
    ],
    async (req, res) => {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            return res.status(400)
                .json({ errors: errors.array()})
        }

        const {
            username,
            email,
            password
        } = req.body
        try {
            const existingUser = await User.findOne({ email })
            if(existingUser) {
                return res.status(400)
                    .json({ message: 'User already exists' })
            }

            const user = new User({
                username,
                email,
                password
            })

            const salt = await bcrypt.genSalt(10)
            user.password = await bcrypt.hash(password, salt)
            await user.save()

            const payload = {
                user: {
                    id: user.id
                }
            }

            jwt.sign(
                payload,
                'randomString', 
                { expiresIn: 10000 },
                (error, token) => {
                    if(error) {
                        throw error
                    }

                    res.status(200)
                        .json({ token })
                }
            )

        } catch (error) {
            console.log(error)
            res.status(500)
                .send('Error in saving')
        }
    }
)

app.post(
    '/login', 
    [
        check('email', 'Please enter a valid email').isEmail(),
        check('password', 'Please enter a valid password').isLength({ min: 6 })
    ],
    async (req, res) => {
        const errors = validationResult(req)

        if(!errors.isEmpty()) {
            return res.status(400)
                .json({ errors: errors.array() })
        }

        const { email, password } = req.body

        try {
            const user = await User.findOne({ email })
            if(!user) {
                return res.status(400)
                    .json({ message: 'User not exist' })
            }

            const isMatch = await bcrypt.compare(password, user.password)
            if(!isMatch) {
                return res.status(400)
                    .json({ message: 'Invalid password' })
            }

            const payload = {
                user: {
                    id: user.id
                }
            }

            jwt.sign(
                payload,
                'secret',
                { expiresIn: 3600 },
                (error, token) => {
                    if(error) {
                        throw error
                    }

                    res.status(200)
                        .json({ token })
                }
            )

        } catch (error) {
            console.log(error)

            res.status(500)
                .json({ message: 'Server error' })
            
        }

    }
)


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
})