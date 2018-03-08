'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

//check route requirements
const movieAPI = require('./scripts/movie-sandbox.js');
const rootRoutes = require('./routes/root');

app.use(bodyParser.json());

//check routes
app.use('/', rootRoutes)
app.use('/movies', movieRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('listening on: ', PORT);
});