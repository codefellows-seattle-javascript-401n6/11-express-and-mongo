'use strict'; //because i like all my points

const express = require('express');
const bodyParser = require('body-parser');
const robotRouter = require('./routes/robot');
const app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use('/api/v1', robotRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`andre ${ PORT }`);
});
