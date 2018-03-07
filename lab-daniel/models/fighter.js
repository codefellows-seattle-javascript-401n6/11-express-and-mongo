'use strict';

const mongoose = require('mongoose');
const uuid = require('uuid/v4');

//Mixed Martial Artists. Wins. Losses
const Fighter = new mongoose.Schema({
    name = String,
    wins = Number,
    losses = Number
})

module.exports = { Fighter };