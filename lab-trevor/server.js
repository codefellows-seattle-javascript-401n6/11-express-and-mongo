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

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
storage.seed()

app.use('/', rootRoutes);
app.use('/API/city', cityRoutes);


app.listen(PORT, () => {
    console.log('listening on port' + PORT);
});