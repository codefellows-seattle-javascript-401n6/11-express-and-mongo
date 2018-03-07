'use strict';

const mongoose = require('mongoose');

const Project = require('../models/project.js');

const DATABASE_URL = process.env.MONGODB_URI || 'mongodb://localhost:27017/test';

mongoose.connect(DATABASE_URL).then(
  () => {
    console.info(`Mongoose connection successfully created`);
  }
).catch(
  (error) => {
    console.error(`Error on connection: ${error}`);
  }
);;

function save(project) {
  let projectModel = new Project({
    name: project.name,
    description: project.description,
    link: project.link
  });
  return new Promise((resolve, reject) => {
    projectModel.save((err, savedProject) => {
      resolve(savedProject);
    });
  });
}

function getAll() {
  return new Promise((resolve, reject) => {
    Project.find((err, projects) => {
      resolve(projects);
    });
  });
}

function get(id) {
  return new Promise((resolve, reject) => {
    Project.findOne({_id: id}, (err, project) => {
      resolve(project);
    });
  });
}

function remove(id) {
  return new Promise((resolve, reject) => {
    Project.remove({_id: id}, (err, project) => {
      resolve(project);
    });
  });
}

function update(id, project) {
  return new Promise((resolve, reject) => {
    Project.findOneAndUpdate(id, project, (err, project) => {
      resolve(project);
    });
  });
}

module.exports = {
  getAll,
  get,
  save,
  update,
  remove
};

