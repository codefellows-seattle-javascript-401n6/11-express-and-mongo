'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const Vice = require('../models/vices');

let coffee = new Vice({name: 'coffee', temptation: 70, risk: 3});
let weed = new Vice({name: 'weed', temptation: 5, risk: 10});
let television = new Vice({name: 'television', temptation: 3, risk: 1});

Vice.remove()
  .then(info => {
    console.log("INFO:", info);
    let saves = [
      coffee.save(),
      weed.save(),
      television.save(),
    ];
    return Promise.all(saves);
  })
  .then((savedVices) => {
    console.log("SAVED:", savedVices);
    return Vice.find();
  })
  .then((results) => {
    console.log("FOUND:", results);
    console.log("FOUND TOTAL:", results.length);
    mongoose.disconnect();
  });