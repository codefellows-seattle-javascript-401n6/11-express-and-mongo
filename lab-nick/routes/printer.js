'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log("QUERY PARAMS:", req.query);
    res.send(req.query);
});

module.exports = router;