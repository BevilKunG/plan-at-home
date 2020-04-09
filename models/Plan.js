const mongoose = require('mongoose')
// const ActivitySchema = require('./Schema/Activity')

const ActivitySchema = mongoose.Schema({
    name: String,
    duration: String
})

const PlanSchema = mongoose.Schema({
    name: String,
    date: Date,
    activities: [ActivitySchema],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }
})

module.exports = mongoose.model('plan', PlanSchema)