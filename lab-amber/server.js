'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const api = require('./api/project.js');

const app = express();

const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.MONGODB_URI || 'mongodb://localhost:27017/test';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api', api);

app.listen(PORT, () => {
  console.log(`Listening in at http://localhost:${PORT}`);
});