'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Hi there this is hero api'});  
});

module.exports = router;

