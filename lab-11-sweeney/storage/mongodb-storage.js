'use strict';

const mongoose = require('mongoose');

const Movie = require('../models/movies.js');

mongoose.connect('mongodb://localhost/test')
.then(() => {
    console.info('mongoose is running');
}).catch (
    (error => {
        console.error(`mongoose connection error ${error}`);
    })
)

function save(movie) {
    let movieModel = new Movie({
        name: movie.name,
        date: movie.date,
        rating: movie.rating,
    })
    return new Promise((resolve, reject)=> {
        movieModel.save((err, savedMovie)=> {
            resolve(savedMovie);
        })
    });
}

function get(id) {
    return new Promise((resolve, reject)=> {
        Movie.findOne({_id: id}, (err, movieCollection)=> {
            resolve(movieCollection);
        })
    });
}

function getAll() {
    return new Promise((resolve, reject)=> {
        Movie.find((err, movieCollection) =>{
            resolve(movieCollection);
        })
    });
}

function update(id, movie) {
    return new Promise((resolve, reject) => {
      Movie.findOneAndUpdate(id, movie, (err, movie) => {
        resolve(movie);
      });
    });
  }

function remove(id) {
    return new Promise((resolve, reject)=> {
        Movie.remove({_id: id}, (err, movie)=> {
            resolve(movie)
        })
    });
}


module.exports = {save, get, getAll, remove, update};