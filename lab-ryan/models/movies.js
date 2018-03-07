'use strict';
const uuid = require('uuid/v4');
const mongoose = require('mongoose');

let movieSchema = new mongoose.Schema({
    name: String,
    date: Number,
    rating: Number
});
let Movies = mongoose.model('Movies', movieSchema);

module.exports = Movies;