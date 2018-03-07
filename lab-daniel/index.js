'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());

//connects to DB when server starts 
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/27017');


const fighterRoutes = require('./routes/fighter')
app.use('/', fighterRoutes)



//checks for PORT
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});