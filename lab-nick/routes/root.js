'use strict';
const express = require('express');
const router = express.Router();


router.use(express.static('./public'))
router.get('/', function(request,response){
    response.sendFile('index.html', {root:'./public'})
   })

// router.get('/', (req, res) => {
//     res.send(new Date());
// });

// router.post('/', (req, res) => {
//     console.log("GOT BODY:", req.body);
//     res.send(req.body);
// });

module.exports = router;