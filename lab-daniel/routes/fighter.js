'use strict';
const express = require('express');
const router = express.Router();
const storage = require('../lib/mongo.js');

router.get('/', (req, res) => {
    if(req.query.id){
        let id = req.query.id;
        storage.get(id)
        .then(fighter => {
            res.send(fighter)
        });
    }else {
        storage.getAll()
        .then(fighters => {
            res.send(fighters);
        });
    }
});









module.exports = router;