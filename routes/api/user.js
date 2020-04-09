const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const User = require('../../models/User')

router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id)
        res.json({ user })
    } catch (error) {
        res.json({ message: 'Error in fetching user' })
    }
})

router.put('/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body.user, (error, user) => {
        if(error) {
            res.status(500).json(error)
        }
        res.status(200).json({ user })
    })
})

module.exports = router