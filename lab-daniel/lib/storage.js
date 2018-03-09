'use strict';
const mongodb = require('./mongo.js');
const Fighter = require('../models/fighter.js');

function seed(storage) {
    return storage.removeAll()
    .then(() => {
      return Promise.all([
        storage.save(new Fighter({name: "Conor McGregor", wins: 21, losses: 3})),
        storage.save(new Fighter({name: "Jon Jones", wins: 24, losses: 0})),
        storage.save(new Fighter({name: "CM Punks", wins: 0, losses: 1}))
      ])
    });
  }

  module.exports = { mongodb, seed };