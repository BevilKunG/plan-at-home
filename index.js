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

app.use('/api', require('./routes/api/index'))

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
  
    const path = require('path');
    app.get('*',(req,res) => {
      res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    });
}

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
})