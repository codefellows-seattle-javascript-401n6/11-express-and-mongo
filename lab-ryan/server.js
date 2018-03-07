'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json);
const routes = require('routes.js')
console.log('hello world');


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('listening on: ', PORT);
});