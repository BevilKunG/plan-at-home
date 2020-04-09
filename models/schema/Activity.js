const mongoose = require('mongoose')

const ActivitySchema = mongoose.Schema({
    name: String,
    duration: String
})

module.exports = ActivitySchema