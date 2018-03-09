'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

//connects to DB when server starts 
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/27017');


const Fighter = require('./models/fighter.js');
const fighterRoutes = require('./routes/fighter.js');

app.use('/', fighterRoutes);

//checks for PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('http://localhost:' + PORT);
});

