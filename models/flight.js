const mongoose = require('mongoose')

const flightSchema = new mongoose.Schema({
    airline: { type: String, required: true, enum: ['American', 'Southwest', 'United'] },
    flightNo: {type: Number,  required: true, min: 10, max: 9999},
    departs: {type: Date, default: Date.now()}
}, {
    timestamps: true
})

const flight = mongoose.model('flight', flightSchema)

module.exports = flight