'use strict';
const express = require('express');
const router = express.Router();
const Movies = require('../models/movies.js');
const storage = require('../storage/mongodb-storage.js');
// const storage = require('../scripts/movie-sandbox.js');

router.get('/', (req, res) => {
    if (req.query.id) {
        Movies.findOne({
                _id: req.query.id
            })
            .then((results) => {
                // console.log('FOUND:', results);
                res.send(results)
            });
    } else {
        Movies.find()
            .then(results => {
                // console.log('FOUND:', results);
                // console.log('FOUND TOTAL:', results.length);
                res.status(400);
                res.send(results);
            });
    }
});

router.post('/', (req, res) => {
    if (req.body.name === undefined || req.body.date === undefined) {
        res.sendStatus(400);
    } else {
        let movie = {
            name: req.body.name,
            date: req.body.date,
            rating: req.body.rating,
        };

        storage.save(movie)
            .then(movie => {
                res.status(200);
                res.send(movie);
            })
    }
});

router.put('/', (req, res) => {
    let id = req.query.id;
    let movie = req.body;
    storage.update(id, movie)
        .then(movie => {
            res.send(movie);
        });
});

router.delete('/', (req, res) => {
    let id = req.query.id;
    storage.remove(id)
        .then(movie => {
            res.status(204);
            res.send(movie);
        });
});


module.exports = router;