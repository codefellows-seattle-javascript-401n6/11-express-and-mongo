'use strict';
const express = require('express');
const router = express.Router();
const Fighter = require('../models/fighter');

router.get('/', (req, res) => {
    // if user has fighter id, look up that fighter
    if(req.query.id) {
        Figher.findOne({_id: req.quary.id})
        .then((results) => {
            console.log('FIGHTER FOUND:', results);
            console.log('TOTAL FIGHTERS', results.length);
            res.send(results);
        })
    } else {
        // return all the fighters
        Fighter.find()
        .then((results) => {
            console.log('FIGHTER FOUND:', results);
            console.log('TOTAL FIGHTERS', results.length);
            res.send(results);
        })
    }
})

module.exports = router;