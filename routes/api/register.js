const express = require('express')
const { check, validationResult } = require('express-validator/check')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const router = express.Router()

const User = require('../../models/User')

router.post(
    '/', 
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
                'secret', 
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
                .json({ message: 'Error in saving' })
        }
    }
)

module.exports = router