const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
    const token = req.header('token')
    if(!token) {
        return res.status(401)
            .json({ message: 'Auth Error' })
    }

    try {
        const decoded = jwt.verify(token, 'secret')
        req.user = decoded.user
        next()
    } catch (error) {
        console.error(error)
        res.status(500)
            .send({ message: 'Invalid Token' })
    }
}

module.exports = auth