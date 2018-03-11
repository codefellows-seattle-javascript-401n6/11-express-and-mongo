'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const routes = require('./routes/wuroutes');


app.use(bodyParser.json());

app.use('/api/theWu', routes); 



let PORT =process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log('http://localhost:' + PORT);
}); 