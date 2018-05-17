import { Mongoose } from 'mongoose';

'use strict'; // because michael appreciates the little things

const congoose = require ('mongoose');

const robotSchema = new Mongoose.schema({
  name: String,
  purpose: String,
  yearBuilt: String
});

const Robot = mongoose.model('Robot', robotSchema);
module.export = Robot;