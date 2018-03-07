'use strict';
const mongoose = require('mongoose');

const senshiSchema = new mongoose.Schema({
    name:'string',
    power:'string',
    position:'string'
});

const Senshi = mongoose.modle('Senshi',senshiSchema);
module.exports = Senshi;