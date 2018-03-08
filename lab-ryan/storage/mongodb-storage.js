'use strict';

const mongoose = require('mongoose');

const Movies = require('../models/movies.js');

mongoose.connect('mongodb://localhost/test')
.then(() => {
    console.info('mongoose is running');
}).catch (
    (error => {
        console.error(`mongoose connection error ${error}`);
    })
)



function save(Movies) {
    let movieCollection = new Movie({
        name: movie.name,
        date: movie.date,
        rating: movie.rating,
    })
    return new Promise((res, rej)=> {
        movieCollection.save((err, movieCollection)=> {
            resolve(movieCollection);
        })
    });
}

function get(id) {
    return new Promise((res, rej)=> {
        Movie.findOne({_id: id}, (err, movieCollection)=> {
            resolve(movieCollection);
        })
    });
}

function getAll() {
    return new Promise((res, rej)=> {
        Movie.find((err, movieCollection) =>{
            resolve(movieCollection);
        })
    });
}

function update(id, Movie) {
    return new Promise((res, rej) => {
      Movies.findOneAndUpdate(id, movieCollection, (err, movieCollection) => {
        resolve(movieCollection);
      });
    });
  }

function remove(id) {
    return new Promise((res, rej)=> {
        Movies.remove({_id: id}, (err, movieCollection)=> {
            resolve(movieCollection)
        })
    });
}

function removeAll() {
    return new Promise((resolve, reject)=> {
        Movies.remove((err, movieCollection) => {
            resolve(movieCollection);
        })
    });
}

module.exports = {save, get, getAll, remove, removeAll,update};