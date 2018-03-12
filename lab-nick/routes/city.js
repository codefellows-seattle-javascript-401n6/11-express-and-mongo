'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log("QUERY PARAMS:", req.query);
    res.send(req.query);
});

// router.get('/:name', (req, res) => {
//     console.log("EXPRESS URL PARAMETER:", req.params.name);
//     res.send(req.params);
// });

module.exports = router;