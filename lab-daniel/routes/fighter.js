'use strict';
const express = require('express');
const router = express.Router();
const storage = require('../lib/mongo.js');

//GET or GET ALL FIGHTER(S)
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

//SAVE FIGHTER
router.post('/', (req, res) => {
    let fighter = {
      name: req.body.name,
      wins: req.body.wins,
      losses: req.body.losses,
    };
    storage.save(fighter)
    .then(figher => {
      res.status(200);
      res.send(fighter);
    });
  })


//UPDATE FIGHTER
router.put('/', (req, res) => {
    let id = req.query.id;
    storage.get(id)
    .then(fighter => {
        if(req.body.name){
            fighter.name = req.body.name;
        }
        if(req.body.wins){
            fighter.wins = req.body.wins;
        }
        if (req.body.losses){
            fighter.losses = req.body.losses
        }
        
        fighter.save((err, fighter) => {
            res.send(fighter)
        })
    });
});


//DELETE FIGHTER 
router.delete('/', (req, res) => {
    let id = req.query.id;
    storage.remove(id)
    .then(fighter => {
        res.writeHead(204);
        res.send(fighter);
    })
});

module.exports = router;