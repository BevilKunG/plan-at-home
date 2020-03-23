const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))


app.get('/api', (req, res) => {
    console.log(req.body)
    res.send('okkk')
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log('ok')
})