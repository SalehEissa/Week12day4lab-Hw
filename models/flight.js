const { Schema, model } = require('mongoose');

const destinationSchema = new Schema(
  {
    airport: { type: String, enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'], required: true },
    arrival: { type: Date, required: true },
  },
  { timestamps: true }
);

const flightSchema = new Schema(
  {
    airline: { type: String, enum: ['American', 'Southwest', 'United'], required: true },
    flightNo: { type: Number, required: true, min: 10, max: 9999 },
    departs: { type: Date, default: () => new Date(+new Date() + 365 * 24 * 60 * 60 * 1000) },
    airport: { type: String, enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'], default: 'SAN', required: true },
    destinations: [destinationSchema], // Embed the destination schema
  },
  { timestamps: true }
);

const Flight = model('Flight', flightSchema);

module.exports = Flight;
