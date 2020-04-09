const express = require('express')
const router = express.Router()

router.use('/register', require('./register'))
router.use('/login', require('./login'))
router.use('/user', require('./user'))

router.use('/plans', require('./plan'))

module.exports = router