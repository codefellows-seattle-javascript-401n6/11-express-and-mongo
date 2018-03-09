'use strict';

const express = require('express');
const router = express.Router();
const storage = require('../lib/storage/mongodb-storage');
const Hero = require('../models/hero');

router.use((req, res, next) => {
  console.log('Some magic happening');
  next();
});

router.get('/', (req, res) => {
  res.json({ message: 'Hi there this is hero api'});  
});

router.route('/heroes')
  .post((req, res) => {
    if (!req.body.name || !req.body.superpower || !req.body.hero) {
      res.status(400);
      res.send('Error, bad request body');
    }
    let hero = new Hero();   
    hero.name = req.body.name;
    hero.superpower = req.body.superpower;
    hero.hero = req.body.hero;

    storage.save(hero)
      .then(hero => {
        res.status(200);
        res.send(hero);
      });

  })

  .get((req, res) => {

    Hero.find((err, heroes) => {

      if (err) {
        res.send(err);
      }

      res.json(heroes);
    });
  });

router.route('/heroes/:hero_id')
  .get((req, res) => {
    Hero.findById(req.params.hero_id, (err, hero) => {
      if (err) {
        res.send(err);
      }
      if (hero === null) {
        res.status(404);
      }      
      res.json(hero);
    });
  })

  .put((req, res) => {
    let id = req.params.hero_id;
    storage.get(id)
      .then(hero => {
        if (req.body.name) {
          hero.name = req.body.name;
        }

        if (req.body.superpower) {
          hero.superpower = req.body.superpower;
        }

        if (req.body.hero) {
          hero.hero = req.body.hero;
        }

        hero.save((err, hero) => {
          if (err) {
            res.send(err);
          }
          res.send(hero);
        });
      });
  })

  .delete((req, res) => {
    let id = req.params.hero_id;
    storage.remove(id)
      .then(hero => {
        res.send(204);
        res.send(hero);  
      });
  });

module.exports = router;
