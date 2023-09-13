require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const Flight = require('./models/flight');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.urlencoded({ extended: false }));

// Middleware: Logging for all routes
app.use((req, res, next) => {
  console.log('Middleware: I run for all routes');
  next();
});

// Index Route
app.get('/flights', async (req, res) => {
  try {
    const foundFlights = await Flight.find({});
    res.status(200).render('Index', {
      flights: foundFlights,
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

// New Route
app.get('/flights/new', (req, res) => {
  res.render('New');
});

// Create Route
app.post('/flights', async (req, res) => {
  try {
    const createdFlight = await Flight.create(req.body);
    res.status(201).redirect('/flights');
  } catch (err) {
    res.status(400).send(err);
  }
});

// Show Route
app.get('/flights/:id', async (req, res) => {
  try {
    const foundFlight = await Flight.findById(req.params.id);
    if (!foundFlight) {
      return res.status(404).send('Flight not found');
    }
    res.render('Show', {
      flight: foundFlight,
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
