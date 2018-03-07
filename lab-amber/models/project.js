'use strict';

const mongoose = require('mongoose');

let projectSchema = mongoose.Schema({
  name: String,
  description: String,
  link: String
});

const Project = mongoose.model('projects', projectSchema);

module.exports = Project;