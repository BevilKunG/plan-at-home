const express = require('express')
const { check, validationResult } = require('express-validator/check')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const router = express.Router()

const User = require('../../models/User')

router.post(
    '/', 
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

module.exports = router