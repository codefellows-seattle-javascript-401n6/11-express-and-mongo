'use strict';

const express = require('express');

const WuTang = require('../models/wu');
const storage = require('../lib/storage');
const router = express.Router();


// const cream = require('../lib/storage');


router.get('/', (req, res) => {
    if (req.query.id) {
        let id = req.query.id;
        storage.get(id)
        .then(wuTang => {
            console.log('wuTang', wuTang);
            res.send(wuTang);
        });
    }else{
        storage.getAll()
        .then(wuTang => {
            res.send(wuTang);  
        });
    }
});




router.post('/', (req, res) => {
    console.log('req.body', req.body);
    if (req.body.name === undefined ||
    req.body.lyric === undefined ||
    req.body.chambers === undefined) {
        res.status(400);
        res.send('valid JSON please');
    }else{
    let wuTang = new WuTang({
      name: req.body.name,
      lyric: req.body.lyric,
      chambers: req.body.chambers,
    });
    storage.save(wuTang)
    .then(wuTang => {
      res.status(200);
      res.send(wuTang);
    });
    }
  });

  

  router.put('/', (req, res) => {
    let id = req.query.id;
    let wuTang = req.body;
    storage.update(id, wuTang)
    .then(wuTang => {
        res.send(wuTang);
    });
  });

  router.delete('/', (req, res) => {
      let id = req.query.id;
      storage.remove(id)
      .then(wuTang => {
          res.status(204);
          res.send(wuTang);
      });
  });

 









module.exports = router;