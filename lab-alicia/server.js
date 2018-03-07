'use strict';

const express = require('express');
const app = express();
const paddleAPI = require('./routes/paddleAPI.js')

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/api', paddleAPI);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});