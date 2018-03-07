'use strict';

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
// const paddleAPI = require('./api/paddleapi.js');

// app.use(bodyParser.json());

// app.use('/api/paddles', paddleAPI);

let PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});