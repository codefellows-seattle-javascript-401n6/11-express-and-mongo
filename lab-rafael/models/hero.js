'use strict';

const mongoose = require('mongoose');

const heroSchema = new mongoose.Schema({
  name: String,
  superpower: String,
  hero: Boolean
});

const Hero = mongoose.model('Hero', heroSchema);
module.exports = Hero;
