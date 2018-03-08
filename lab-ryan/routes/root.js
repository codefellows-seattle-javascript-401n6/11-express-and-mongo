'use strict';

const express = require('express');
const router = express.Router();

class Thing {
    constructor(name, date){
        this.name = name;
        this.date = date;
    }
}

router.get('/', (req, res) => {
    const root = [{}];
  res.send('I am ROOT', JSON.stringify(root));
});

router.post('/', (req, res) => {
  console.log('Post Body', req.body);
  res.send(req.body)
})

module.exports = router;