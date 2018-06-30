'use strict';

const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    name: String,
    date: Number,
    rating: Number,
});

let Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;


