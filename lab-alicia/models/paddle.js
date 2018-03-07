'use strict';

const mongoose = require('mongoose');

const paddleSchema = new mongoose.Schema({
    name: String,
    bladeSurfaceArea: Number,
    length: Number,
})

const Paddle = mongoose.model('Paddle', paddleSchema);
module.exports = Paddle;