const express = require('express')
const app = express()

app.get('/api', (req, res) => {
    res.send('okkk')
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log('ok')
})