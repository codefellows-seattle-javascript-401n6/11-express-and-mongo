'use strict';
const uuid = require('uuid/v4');
const mongoose = require('mongoose');

let fighterSchema = mongoose.Schema({
    name: String,
    wins: Number,
    losses: Number
});
let Fighter = mongoose.model('fighter', fighterSchema);

module.exports = Fighter;