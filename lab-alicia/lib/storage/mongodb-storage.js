const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const Paddle = require('../../models/paddle');

let save = (paddle) => {
  let paddleModel = new Paddle({
    name: paddle.name,
    bladeSurfaceArea: paddle.bladeSurfaceArea,
    length: paddle.length,
  })

  return new Promise((resolve, reject) => {
    paddleModel.save((err, savedPaddle) => {
      resolve(savedPaddle);
    })
  });
}

let get = (id) => {
  return new Promise((resolve, reject) => {
    Paddle.findOne({_id: id}, (err, paddles) => {
      resolve(paddles);
    })
  });
}

let getAll = () => {
  return new Promise((resolve, reject) => {
    Paddle.find((err, paddles) => {
      resolve(paddles);
    })
  });
}

let remove = (id) => {
  return new Promise((resolve, reject) => {
    Paddle.remove({_id: id}, (err, paddle) => {
      resolve(paddle);
    })
  });
}

let removeAll = () => {
  return new Promise((resolve, reject) => {
    Paddle.remove((err, paddles) => {
      resolve(paddles);
    })
  });
}

module.exports = {save, get, getAll, remove, removeAll};