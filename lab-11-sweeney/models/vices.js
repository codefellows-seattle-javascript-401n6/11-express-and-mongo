'use strict';

const mongoose = require('mongoose');

// a schema defines the structure of a resource
let vicesSchema = mongoose.Schema({
  name: String,
  tempation: Number,
  risk: Number,
});

// the model accepts a Schema and attaches helpful
// find, save, delete -like methods to it
let Vice = mongoose.model('Vice', vicesSchema);

module.exports = Vice;