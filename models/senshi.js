'use strict'
const mongoose = require('mongoose');
let senshiSchema = mongoose.Schema({
    senshiName:String, 
    name:String, 
    power: String, 
    rank:String,
});
const Senshi = mongoose.model('senshi', senshiSchema);

module.exports = Senshi;