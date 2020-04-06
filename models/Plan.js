const mongoose = require('mongoose')
const ActivitySchema = require('./Schema/Activity')

const PlanSchema = mongoose.Schema({
    name: String,
    date: Date,
    activities: [ActivitySchema] 
})

module.exports = mongoose.model('plan', PlanSchema)