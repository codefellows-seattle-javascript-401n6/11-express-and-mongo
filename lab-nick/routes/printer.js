'use strict';
const express = require('express');
const router = express.Router();
const Printer = require('../models/printers.js');

router.get('/all', (req, res) => {
  console.log('printers/all has been hit!');

  Printer.find()
  .then((results) => {
    console.log('results found');
    res.send(results);
  })

  // return Printer.find({}).then((printers) => {
  //   mongoose.disconnect();
  //   console.log('all: ', printers);
  //   res.send(printers);
    
  //   });

  // Printer.find({}, function (err, printers) {
  //   let printerMap = {};
  //   printers.forEach(function(printer) {
  //     printerMap[printer._id = printer];
  //   })
  //   console.log('printerMap: ', printerMap);
  //   res.send(printerMap);
  // });

  // Printer.find()
  //   .then((results) => {
  //     console.log("FOUND:", results);
  //     console.log("FOUND TOTAL:", results.length);
  //     res.send(results);
  //     return resutls;
  //   })
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