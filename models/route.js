const { Schema, model } = require('mongoose');

const destinationSchema = new Schema(
    {
        airport: { type: String, enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'] },
        arrival: { type: Date },
        // Add more fields as needed
        airline: { type: String },
        flightNumber: { type: String },
        passengerName: { type: String },
    },
    {
        timestamps: true, // This will still include createdAt and updatedAt fields
    }
);

const Destination = model('Destination', destinationSchema);

module.exports = Destination;
