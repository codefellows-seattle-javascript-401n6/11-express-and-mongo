
const express = require('express');
const router = express.Router();
const mongodb = require('../module/mongodb-storage.js');
const storage = require('../module/storage.js');


router.get('/', (req,res) => {
    res.send(new Date());
});

router.post('/', (req,res) => {
    console.log('got body', req.body);
    res.send(req.body);
})

module.exports = router;