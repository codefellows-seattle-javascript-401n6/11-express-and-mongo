'use strict';

const mongodb = require('./mongodb-storage');

const Paddle = require('../../models/paddle.js');

function seed(storage) {
  return storage.removeAll()
  .then(() => {
    return Promise.all([
      storage.save(new Paddle({name: "Sho-Gun", bladeSurfaceArea: 711, length: 197})),
      storage.save(new Paddle({name: "Stikine", bladeSurfaceArea: 656, length: 194})),
      storage.save(new Paddle({name: "Powerhouse", bladeSurfaceArea: 720, length: 200}))
    ])
  });
}

module.exports = {mongodb, seed};