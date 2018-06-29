'use strict'; // because michael appreciates the little things

const mongoose = require('mongoose');

const robotSchema = new mongoose.Schema({
  name: String,
  purpose: String,
  yearBuilt: String
});

const Robot = mongoose.model('Robot', robotSchema);
module.exports = Robot;