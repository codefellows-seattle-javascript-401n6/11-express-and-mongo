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
      console.log('project', project);
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
  console.log('req.body0', req.body);
  if (req.body.name === undefined || req.body.description === undefined || req.body.link === undefined) {
    res.status(400);
    res.send('Post request requires a valid JSON');
  } else {
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
  }
});

router.put('/projects', (req, res) => {
  let id = req.query.id;
  let project = req.body;
  storage.update(id, project)
  .then(project => {
    res.send(project);
  });
});

router.delete('/projects', (req, res) => {
  let id = req.query.id;
  storage.remove(id)
  .then(project => {
    res.status(204);
    res.send(project);
  });
});

module.exports = router;