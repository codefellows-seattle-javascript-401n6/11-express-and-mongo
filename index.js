'use strict'
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const Senshi = require('./models/senshi.js');

app.get(`/api/senshi`,(req,res)=>{
    const senshi = [new Senshi('Sailor Jupiter','  Makoto Kino',' Lightning Magic/Martial Arts',' Inner Senshi')]
    res.send(senshi);
});


app.listen(PORT,() =>{
    console.log('http://localhost:'+ PORT);
});

