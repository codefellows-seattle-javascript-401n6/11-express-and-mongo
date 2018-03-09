// 'use strict'
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test');

// const Fighter = require('../models/fighter.js');

// //find conor mcgregor and update wins
// Fighter.findOne({ name: 'Conor McGregor' })
// .then(conorMcgregor => {
//     console.log('Wins:', conorMcgregor.wins);
//     conorMcgregor.wins = 25;
//     return conorMcgregor.save();
// })
// // view the updated version of conor mcgregor
// .then(newConorMcgregor => {
//     console.log('Wins Now:', newConorMcgregor.wins);
//     mongoose.disconnect();
// })