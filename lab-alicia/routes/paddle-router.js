'use strict';

const express = require('express');
const Paddle = require('../models/paddle.js');
const storage = require('../lib/storage/storage');

const router = express.Router()

storage.seed();

router.get('/', (req, res) => {
  if (req.query.id) {
    let id = req.query.id;
    storage.get(id)
      .then(paddle => {
        res.send(paddle);
      });
  } else {
    storage.getAll()
      .then(paddles => {
        res.send(paddles);
      });
  }
});

router.post('/', (req, res) => {
  if (!req.body.name || !req.body.bladeSurfaceArea || !req.body.length) {
    res.status(400);
    res.send('Error. POST request requires a valid JSON');
  } else {
    let paddle = new Paddle({
      name: req.body.name,
      bladeSurfaceArea: req.body.bladeSurfaceArea,
      length: req.body.length,
    });
    // save paddle to database
    storage.save(paddle)
      .then(paddle => {
        res.status(200);
        res.send(paddle);
      });
  }
});

router.put('/', (req, res) => {
  let id = req.query.id;
  storage.get(id)
    .then(paddle => {
      if (req.body.name) {
        paddle.name = req.body.name;
      }
      if (req.body.bladeSurfaceArea) {
        paddle.bladeSurfaceArea = req.body.bladeSurfaceArea;
      }
      if (req.body.length) {
        paddle.length = req.body.length;
      }

      paddle.save((err, paddle) => {
        res.send(paddle);
      })
    });
});

router.delete('/', (req, res) => {
  let id = req.query.id;
  storage.remove(id)
    .then(paddle => {
      res.status(204);
      res.send(paddle);
    });
});

module.exports = router;