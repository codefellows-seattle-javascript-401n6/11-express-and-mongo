'use strict';
const express = require('express');
const router = express.Router();

const movies = require('..models/movies.js');

router.get('/', (req, res) => {
    if(req.query.id){
        let id = req.query.id;
        movies.get(id)
        .then(movies => {
        res.send(movies);
        });
    } else {
        movies.getAll()
        .then(movies => {
            res.send(movies);
        });
    }
});

router.post('/', (req, res) => {
    let movies = {
        name: req.body.name,
        date: req.body.date,
        rating: req.body.rating,
    };

    movies.save(movies)
    .then(movies => {
        res.status(200);
        res.send(movies);
    })
});

router.put('/', (req, res) => {
    let id = req.query.id;
    movies.get(id)
    .then(movies => {
        if(req.body.name){
            movies.name = req.body.name;
        }
        if(req.body.date){
            movies.date = req.body.date;
        }
        if(req.body.rating){
            movies.rating = req.body.rating;
        }
        movie.save((err, movies) => {
            res.send(movies);
        })
    });
});

router.delete('/', (req, res) => {
    let id = req.query.id;
    movies.remove(id)
    .then(movies => {
        res.send(movies);
    });
});


module.exports = router;