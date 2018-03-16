'use strict'
const express = require('express');
const router = express.Router();

const Senshi = require('../models/senshi.js');
const mongoose = require('mongoose');

router.get(`/`,(req,res)=>{
    const senshi = [new Senshi('Sailor Jupiter','  Makoto Kino',' Lightning Magic/Martial Arts',' Inner Senshi')]
    res.send(senshi);
});
module.exports = router;

