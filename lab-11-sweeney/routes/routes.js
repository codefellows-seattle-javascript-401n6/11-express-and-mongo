'use strict';

const express = require('express');
const router = express.Router();
const Vice = require('../models/vices');

// returns the ids of all beers
router.get('/', (req, res) => {
  // if the user specifies a beer id
  // then look up just one beer
  if (req.query.id) {
    Vice.findOne({_id: req.query.id})
      .then((results) => {
        console.log("FOUND:", results);
        console.log("FOUND TOTAL:", results.length);
        res.send(results); 
      });
  } else {
    // otherwise we return all the beers
    Vice.find()
      .then((results) => {
        console.log("FOUND:", results);
        console.log("FOUND TOTAL:", results.length);
        res.send(results); 
      });
  }
});

module.exports = router;