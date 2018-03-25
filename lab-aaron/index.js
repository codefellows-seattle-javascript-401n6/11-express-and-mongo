'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const songRoutes = require('./routes/song-route.js');

app.use('/', songRoutes);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});