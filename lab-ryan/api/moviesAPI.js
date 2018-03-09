'use strict';

const express = require('express');
const router = express.Router();

const storage = require('../storage/mongodb-storage.js');

const Movies = require('../models/movies.js');

router.get('/', (req, res) => {
    if(req.query.id){
        let id = req.query.id;
        storage.get(id)
        .then(Movies => {
            res.send(Movies);
        });
    } else {
        storage.getAll()
        .then(Movies => {
            res.send(Movies);
        });
    }
});

router.post('/', (req, res) => {
    let Movies = {
        name: req.body.name,
        date: req.body.date,
        rating: req.body.rating,
    };

    storage.save(Movies)
    .then(Movies => {
        res.status(200);
        res.send(Movies);
    });
});

router.put('/', (req, res) => {
    let id = req.query.id;
    let movieCollection = req.body;
    console.log('current movie collection', movieCollection);

    MovieCollection.update(id, movieCollection)
    .then(movieCollection => {
        console.log('new movie collection', movieCollection)
        res.send(movieCollection);
    });
});

module.exports = router;