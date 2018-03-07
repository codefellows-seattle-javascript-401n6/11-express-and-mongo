'use strict';

const mongoose = require('mongoose');



//schema defines the structure
let nflSchema = mongoose.Schema({
    city: String,
    mascot: String,
    superBowls: Number,
    division: String,
});

const Team = mongoose.model('Team', nflSchema);
module.exports = Team;