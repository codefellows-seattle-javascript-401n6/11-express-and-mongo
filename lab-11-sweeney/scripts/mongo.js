'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const Movie = require('../models/movies.js');

let bourneIdentity = new Movie({
    name: 'Bourne Identity',
    date: 2002,
    rating: 9
});
let oceans11 = new Movie({
    name: 'Ocean\'s 11',
    date: 2001,
    rating: 8
});
let theNotebook = new Movie({
    name: 'The Notebook',
    date: 2004,
    rating: 8
});
let theItalianJob = new Movie({
    name: 'The Italian Job',
    date: 2003,
    rating: 7
});

Movie.remove()
    .then(info => {
        console.log('info:', info);
        let collection = [
            bourneIdentity.save(),
            oceans11.save(),
            theNotebook.save(),
            theItalianJob.save(),
        ]
        return Promise.all(collection);
    })
    .then((collectionMovies) => {
        console.log('COLLECTION:', collectionMovies);
        return Movie.find();
    })
    .then((results) => {
        console.log('FOUND', results);
        console.log('FOUND TOTAL:', results.length);
        mongoose.disconnect();
    })

    