'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/401_lab11');
const app = express();

const rootRoutes = require('./routes/root.js');
const printerRoutes = require('./routes/printer.js');
// const cityRoutes = require('./routes/city.js');

app.use(bodyParser.json());

app.use('/', rootRoutes);
app.use('/printer', printerRoutes);
// app.use('/city', cityRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`localhost:`, PORT);
});