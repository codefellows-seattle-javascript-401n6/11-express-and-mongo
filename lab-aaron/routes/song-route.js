'use strict';

const express = require('express');
const router = express.Router();
const Song = require('../model/song.js');
const storage = require('../lib/storage.js').mongodb;

//GET
router.get('/songs', (request, response) => {
  if (request.query.id) {
    let id = request.query.id;
    storage.get(id)
      .then(song => {
        response.send(song);
      });
  } else {
    storage.getAll()
      .then(songs => {
        response.send(songs);
      });
  };
});

//POST
router.post('/songs', (request, response) => {
  let song = {
    title: request.body.title,
    composer: request.body.composer,
    difficulty: request.body.difficulty
  };

  storage.save(song)
    .then(song => {
      response.status(200);
      response.send(song);
    });
});

//PUT
router.put('/songs', (request, response) => {
  let id = request.query.id;
  storage.get(id)
    .then(song => {
      if(request.body.title) {
        song.title = request.body.title;
      }
      if(request.body.composer) {
        song.composer = request.body.composer;
      }
      if(request.body.difficulty) {
        song.difficulty = request.body.difficulty;
      }

      song.save((error, book) => {
        if(error) {
          throw(error);
        };
        response.send(book);
      });
    });
});

//DELETE
router.delete('/songs', (request, response) => {
  let id = request.query.id;
  storage.remove(id)
    .then(song => {
      response.send(song);
    });
});

module.exports = {router};