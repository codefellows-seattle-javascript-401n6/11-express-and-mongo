'use strict';

const express = require('express');
const router = express.Router();
const Robot = require('../models/robot');
console.log(Robot);

router.use(function(req, res, next) {
  next();
});

router.get('/', function(req, res) {
  res.json({message: 'this is the robot router'});
});

router.route('/robots')
  .post(function(req, res) {
    if (!req.body.name || !req.body.purpose || !req.body.yearBuilt) {
      res.status(400);
      res.send('Not a valid request');
    }
    Robot.create(req.body)
      .then(robot => res.json(robot))
      .catch(err => res.send(err.message));
  })

  .get(function(req, res) {
    Robot.find()
      .then(robots => res.json(robots))
      .catch(err => res.send(err));
  });

router.route('/robots/:_id')
  .get(function(req, res) {
    Robot.findById(req.params._id)
      .then(robot => res.json(robot))
      .catch(err => res.send(err));
  })

  .put(function(req, res) {
    Robot.findByIdAndUpdate(req.params._id, req.body, { new: true })
      .then(robot => res.json({
        success: true,
        data: robot
      }))
      .catch(err => res.send(err));
  })

  .delete(function(req, res) {
    Robot.findByIdAndRemove(req.params._id)
      .then(robot => res.json({
        success: true,
        message: 'Successfully delted robot'
      }));
  });

module.exports = router;
