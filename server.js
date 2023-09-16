require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const Flight = require('./models/flight');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
    console.log("connected to mongo");
});

const jsxViewEngine = require('jsx-view-engine');
app.set('view engine', 'jsx');
app.engine('jsx', jsxViewEngine());

app.use((req, res, next) => {
    console.log("Middleware: I run for all routes");
    next();
});
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

// Index
app.get('/flights', async (req, res) => {
    try {
        const foundFlights = await Flight.find({});
        res.status(200).render('Index', {
            flights: foundFlights // Use 'flights' instead of 'flight' for the array
        });
    } catch (err) {
        res.status(400).send(err);
    }
});

// New
app.get('/flights/new', (req, res) => {
    res.render('New');
});

// Create Route
app.post('/flights', async (req, res) => {
    try {
        const createdFlight = await Flight.create(req.body);
        res.status(201).redirect('/flights'); // Correct the redirect URL
    } catch (err) {
        res.status(400).send(err);
    }
});

// Show Route
app.get('/flights/:id', async (req, res) => {
    try {
        const foundFlight = await Flight.findById(req.params.id);
        res.render('Show', {
            flight: foundFlight,
        });
    } catch (err) {
        res.status(400).send(err);
    }
});

app.put('/flights/:id/addDestination', async (req, res) => {
    try {
        const destination = req.body;
        const foundFlight = await Flight.findById(req.params.id);
        foundFlight.destinations.push(destination);
        const updatedFlight = await foundFlight.save(); 
        res.status(201).redirect(`/flights/${updatedFlight._id}`);
    } catch (err) {
        res.status(400).send(err);
    }
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
