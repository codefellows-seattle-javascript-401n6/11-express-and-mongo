'use strict';
const express = require('express');
const router = express.Router();
const Printer = require('../models/printers.js');

router.get('/', (req, res) => {
    console.log("QUERY PARAMS:", req.query);
    // res.send(req.query);
    // return Printer.find();
    // res.send(return Printer.find);
    if (req.query.id) {
        Printer.findOne({_id: req.query.id})
        .then((results) => {
          console.log("FOUND:", results);
          console.log("FOUND TOTAL:", results.length);
          res.send(results); 
        })
      } else {
        // otherwise we return all the beers
        Printer.find()
        .then((results) => {
          console.log("FOUND:", results);
          console.log("FOUND TOTAL:", results.length);
          res.send(results); 
        })
      }
});

module.exports = router;