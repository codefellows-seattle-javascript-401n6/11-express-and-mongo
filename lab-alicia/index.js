'use strict';

const express = require('express');
const app = express();
const paddleAPI = require('./api/paddleAPI.js');
const Paddle = require('./models/paddle.js');

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/api/paddles', paddleAPI);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});