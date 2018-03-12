
const express = require('express');
const router = express.Router();
const mongodb = require('../module/mongodb-storage.js');
const storage = require('../module/storage.js');

//dont need /city because you already used it in the server.js
router.get('/', (req,res) => {
    if(req.query.id){
        mongodb.Team.findOne({_id:req.query.id})
        .then((results) => {
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

router.delete('/delete', (req, res) =>{
    let id = req.query.id;
    console.log(id)
    console.log('mongodb', mongodb.Team.remove)
    mongodb.remove(id)

    .then(reseult => {
        res.send('delete complete');
    }).catch(err => {
        res.send('uh oh')
    })
})

router.post('/add', (req, res) => {
    let newTeam = {
        city: req.body.city,
        mascot: req.body.mascot,
        superBowls: req.body.superBowls,
        division: req.body.division,
    }
    mongodb.save(newTeam)
    .then(newTeam => {
        res.sendStatus(200);
    })
    console.log('add complete')
})

router.put('/update', (req, res) => {
    let id = req.query.id;
    mongodb.get(id)
    .then(team => {
        if(req.body.city){
            team.city = req.body.city
        }
        if(req.body.mascot){
            team.mascot = req.body.mascot
        }
        if(req.body.superBowls){
            team.superBowls = req.body.superBowls
        }
        if(req.body.division){
            team.division = req.body.division
        }
        team.save(team)
        .then(team => {
            mongodb.Team.find()
        .then((results) =>{
            res.send(results);
        })
        })
    })
    console.log('update comlete')
})


module.exports = router;