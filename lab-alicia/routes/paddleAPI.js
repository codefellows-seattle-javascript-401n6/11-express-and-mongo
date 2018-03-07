'use strict';

var express = require('express')
var router = express.Router()

const storage = require('../lib/storage/storage').mongodb;

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
  let paddle = {
    name: req.body.name,
    bladeSurfaceArea: req.body.bladeSurfaceArea,
    length: req.body.length,
  };

  storage.save(paddle)
  .then(paddle => {
    res.status(200);
    res.send(paddle);
  });
})

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
    res.send(paddle);
  });
});

module.exports = router;