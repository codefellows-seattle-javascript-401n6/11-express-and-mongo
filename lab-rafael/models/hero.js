'use strict';

const mongoose = require('mongoose');

const heroSchema = new mongoose.Schema({
  name: String,
  superpower: String,
  hero: String
});

const Hero = mongoose.model('Hero', heroSchema);
module.exports = Hero;
