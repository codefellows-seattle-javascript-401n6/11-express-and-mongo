'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Printer = require('./models/printers.js');
// console.log(Printer);
mongoose.connect('mongodb://localhost/401_lab11');
const app = express();

const rootRoutes = require('./routes/root.js');
const printerRoutes = require('./routes/printer.js');
// const cityRoutes = require('./routes/city.js');

app.use(bodyParser.json());

app.use('/', rootRoutes);
app.use('/printer', printerRoutes);
// app.use('/city', cityRoutes);

let ft5_01 = new Printer({ name: 'FT5-01', style: 'FT5', volume: '300x300x400', nozel: 0.3, filament: 1.75});
let ft5_02 = new Printer({ name: 'FT5-02', style: 'FT5', volume: '300x300x400', nozel: 0.5, filament: 1.75});
let ft5_03 = new Printer({ name: 'FT5-03', style: 'FT5', volume: '300x300x400', nozel: 0.4, filament: 1.75});
let mhz_01 = new Printer({ name: 'MHZ-01', style: 'MHZ', volume: '200x200x180', nozel: 0.4, filament: 1.75});

Printer.remove()
.then(info => {
  console.log("INFO:", info)
  let saves = [
    ft5_01.save(),
    ft5_02.save(),
    ft5_03.save(),
    mhz_01.save(),
  ]
  return Promise.all(saves)
})
.then((savedPrinters) => {
  console.log("SAVED:", savedPrinters);
  return Printer.find();
})
.then((results) => {
  console.log("FOUND:", results);
  console.log("FOUND TOTAL:", results.length);
  mongoose.disconnect();
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`localhost:`, PORT);
});