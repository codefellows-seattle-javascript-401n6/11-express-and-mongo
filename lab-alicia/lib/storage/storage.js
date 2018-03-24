'use strict';
const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test');

const Paddle = require('../../models/paddle.js');

mongoose.connect('mongodb://localhost/paddle').then(
  () => {
    console.info(`Mongoose connection successful`);
  }
).catch(
  (error) => {
    console.error(`Error on connection: ${error}`);
  }
);

let seed = () => {
  return removeAll()
  .then(() => {
    return Promise.all([
      save(new Paddle({name: "Sho-Gun", bladeSurfaceArea: 711, length: 197})),
      save(new Paddle({name: "Stikine", bladeSurfaceArea: 656, length: 194})),
      save(new Paddle({name: "Powerhouse", bladeSurfaceArea: 720, length: 200}))
    ])
  });
};

let save = (paddle) => {
  let paddleModel = new Paddle({
    name: paddle.name,
    bladeSurfaceArea: paddle.bladeSurfaceArea,
    length: paddle.length
  });
  return new Promise((resolve, rej) => {
    paddleModel.save((err, savedPaddle) => {
      resolve(savedPaddle);
    })
  })
};

let get = (id) => {
  return new Promise((resolve, rej) => {
    Paddle.findOne({_id: id}, (err, paddles) => {
      resolve(paddles);
    })
  })
};

let getAll = () => {
  return new Promise((resolve, rej) => {
    Paddle.find((err, paddles) => {
      resolve(paddles);
    })
  });
};

let remove = (id) => {
  return new Promise((resolve, rej) => {
    Paddle.remove({_id: id}, (err, paddle) => {
      resolve(paddle);
    })
  });
};

let removeAll = () => {
  return new Promise((resolve, rej) => {
    Paddle.remove((err, paddles) => {
      resolve(paddles);
    })
  });
}

module.exports = {seed, save, get, getAll, remove, removeAll};