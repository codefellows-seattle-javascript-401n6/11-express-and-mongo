
const express = require('express');
const router = express.Router();
const mongodb = require('../module/mongodb-storage.js');
const storage = require('../module/storage.js');

//dont need /city because you already used it in the server.js
router.get('/', (req,res) => {
    if(req.query.id){
        mongodb.Team.findOne({_id:req.query.id})
        .then((results) => {
            console.log('yahoo', results)
            res.send(results)
        })
    } else {
        mongodb.Team.find()
        .then((results) =>{
            console.log(results)
            res.send(results);
        })
    }
});

router.get('/:city', (req,res) => {
    console.log('express url params', req.params.city);
    res.send(req.params);
});

module.exports = router;