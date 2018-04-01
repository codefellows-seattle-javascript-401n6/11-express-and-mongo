'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const songRoutes = require('./routes/song-route.js');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

require('./lib/storage.js').seed();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/', songRoutes);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});