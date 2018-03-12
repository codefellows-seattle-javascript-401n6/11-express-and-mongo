const mongoose = require('mongoose');

// a schema defines the structure of a resource
let printerSchema = mongoose.Schema({
  name: String,
  style: String,
  volume: String,
  nozel: Number,
  filament: Number,
});

// the model accepts a Schema and attaches helpful
// find, save, delete -like methods to it
let Printer = mongoose.model('Printer', printerSchema)

module.exports = Printer;