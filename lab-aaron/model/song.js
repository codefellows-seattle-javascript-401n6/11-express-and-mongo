'use strict';

const mongoose = require('mongoose');

let songSchema = new mongoose.Schema({
  title: String,
  composer: String,
  difficulty: Number
});

let Song = mongoose.model('Song', songSchema);

module.exports = {Song};