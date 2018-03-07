'use strict';

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const movieAPI = require('./scripts/movie-sandbox.js');

app.use('/scripts/movies', movieAPI);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('listening on: ', PORT);
});