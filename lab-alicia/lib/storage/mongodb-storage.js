const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const Paddle = require('../../models/paddle');

function save(paddle) {
  let paddleModel = new Paddle({
    name: paddle.name,
    bladeSurfaceArea: paddle.bladeSurfaceArea,
    length: paddle.length,
  })

  return new Promise((resolve, reject) => {
    bookModel.save((err, savedPaddle) => {
      resolve(savedPaddle);
    })
  });
}

function get(id) {
  return new Promise((resolve, reject) => {
    Paddle.findOne({_id: id}, (err, paddles) => {
      resolve(paddles);
    })
  });
}

function getAll() {
  return new Promise((resolve, reject) => {
    Paddle.find((err, paddles) => {
      resolve(paddles);
    })
  });
}

function remove(id) {
  return new Promise((resolve, reject) => {
    Paddle.remove({_id: id}, (err, paddle) => {
      resolve(paddle);
    })
  });
}

function removeAll() {
  return new Promise((resolve, reject) => {
    Paddle.remove((err, paddles) => {
      resolve(paddles);
    })
  });
}

module.exports = {save, get, getAll, remove, removeAll};