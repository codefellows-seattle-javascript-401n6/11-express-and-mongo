'use strict'
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const Senshi = require('./models/senshi.js');
const senshiRouter = require('./routes/senshiRouter.js')

app.use('/api/senshi', senshiRouter);

app.listen(PORT,() =>{
    console.log('http://localhost:'+ PORT);
});

