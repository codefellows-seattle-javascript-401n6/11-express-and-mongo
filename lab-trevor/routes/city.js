
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


module.exports = router;