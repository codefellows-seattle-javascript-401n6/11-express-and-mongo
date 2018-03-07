'use strict'
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const labApi = require('./labApi');
let PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/labApi',labApi );



app.listen(PORT,() =>{
    console.log('http://localhost:'+ PORT);
});

