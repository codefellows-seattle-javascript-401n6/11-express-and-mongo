'use strict';
const express = require('express');
const router = express.Router();
// const mongoose = require('mongoose');
const Printer = require('../models/printers.js');

// mongoose.connect('mongodb://localhost/401_lab11');

router.get('/all', (req, res) => {
  console.log('printers/all has been hit!');
  // console.log(Printer);

  Printer.find({})
  .then((results) => {
    console.log('results found');
    res.send(results);
  }).catch(err => console.log(err));
});

router.get('/one/:printer', (req, res) => {
  console.log("QUERY PARAMS:", req.params.printer);
  // res.send(req.query);
  // return Printer.find();
  // res.send(return Printer.find);
  if (req.query.id) {
    Printer.findOne({ _id: req.query.id })
      .then((results) => {
        console.log("FOUND:", results);
        console.log("FOUND TOTAL:", results.length);
        // res.write(results);
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