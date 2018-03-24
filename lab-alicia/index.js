'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/paddle-router.js')

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/paddles', routes);

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});