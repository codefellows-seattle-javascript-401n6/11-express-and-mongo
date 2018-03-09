'use strict';
const Fighter = require('../models/fighter.js');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');


//GET FIGHTERS
function get(id) {
    return new Promise((resolve, reject) => {
      Fighter.findOne({_id: id}, (err, fighter) => {
        resolve(fighter);
      })
    });
  }

//GET ALL FIGHTERS
  function getAll() {
    return new Promise((resolve, reject) => {
      Fighter.find((err, fighter) => {
        resolve(fighter);
      })
    });
  }

//SAVE FIGHTER
function save(fighter){
    let fighterModel = new Fighter({
        name: fighter.name,
        wins: fighter.wins,
        losses: fighter.losses
    });
    return new Promise((resolve, reject) => {
        fighterModel.save((err, savedFighter) => {
            resolve(savedFighter);
        })
    });
}

//DELETE FIGHTER
function remove(id){
  return new Promise((resolve, reject) => {
    Fighter.remove((err, fighter) => {
      resolve(fighter)
    })
  });
}

module.exports = { get, getAll, save, remove };