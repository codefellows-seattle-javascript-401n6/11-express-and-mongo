'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// when the server starts connect to the
// database once.
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const rootRoutes = require('./routes/routes');


// Attach the body parser to pick JSON off
// the HTTP body of incoming requests
app.use(bodyParser.json());

// attach routes to handle different URLs
app.use('/', rootRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('http://localhost:' + PORT);
});