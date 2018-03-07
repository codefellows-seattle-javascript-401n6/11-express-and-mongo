'use strict';

const express = require('express');

const Project = require('../models/project.js');
const storage = require('../lib/storage.js');

const router = express.Router();

router.get('/projects', (req, res) => {
  if (req.query.id) {
    let id = req.query.id;
    storage.get(id)
    .then(project => {
      res.send(project);
    });
  } else {
    storage.getAll()
    .then(projects => {
      res.send(projects);
    });
  }
});

router.post('/projects', (req, res) => {
  let project = new Project({
    name: req.body.name,
    description: req.body.description,
    link: req.body.link
  });
  storage.save(project)
  .then(project => {
    res.status(200);
    res.send(project);
  });
});

router.put('/projects', (req, res) => {
  let project = req.body;
  console.log('** project', project);
  storage.update(project)
  .then(project => {
    res.send(project);
  });
});

router.delete('/projects', (req, res) => {
  let id = req.query.id;
  storage.remove(id)
  .then(project => {
    res.send(project);
  });
});

module.exports = router;