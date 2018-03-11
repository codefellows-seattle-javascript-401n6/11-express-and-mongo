'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const mongoose = require('mongoose');

const routes = require('./routes/movies-routes.js');

//middleware access to routes
app.use('/api/movies', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('http://localhost: ' + PORT);
});