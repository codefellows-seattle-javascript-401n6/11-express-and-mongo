'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const storage = require('./module/storage')
const mongodb = require('./module/mongodb-storage')
const rootRoutes = require('./routes/root');
const cityRoutes = require('./routes/city');

app.use(bodyParser.json());

app.use('/', rootRoutes);
app.use('/city', cityRoutes);

const PORT = process.env.PORT || 3000;

storage.seed();

app.listen(PORT, () => {
    console.log('listening on port' + PORT);
});