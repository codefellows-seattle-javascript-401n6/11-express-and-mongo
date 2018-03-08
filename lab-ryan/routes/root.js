'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('I am ROOT');
});

router.post('/', (req, res) => {
  console.log('Post Body', req.body);
  res.send(req.body)
})

module.exports = router;