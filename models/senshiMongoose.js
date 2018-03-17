'use strict'

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sailorSenshi');




let senshiSchema = mongoose.Schema({
    senshiName:String, 
    name:String, 
    power: String, 
    rank:String,
});

let Senshi = mongoose.model('senshi', senshiSchema);

let SailorMoon = new Senshi({ senshiName:'Sailor Moon', name:'Usagi Tsukino', power: 'Lunar Magic', rank:'Sovereign of Earth'}) 
let TuxedoMask = new Senshi({ senshiName:'TuxedoMask', name:' Mamoru Chiba', power: 'Roses?', rank:'N/A'}) 
let SailorMercury = new Senshi({ senshiName:'Sailor Mercury', name:'Ami Mizuno', power: 'Intelligence/Water Magic', rank:'Inner Senshi'}) 

SailorMoon.save()
.then((savedSenshi)=>{
    console.log('Saved',savedSenshi);
    return TuxedoMask.save();
})
.then((savedSenshi)=>{
    console.log('Saved',savedSenshi);
    return SailorMercury.save();
})
.then((savedSenshi)=>{
    console.log('Saved',savedSenshi);
    mongoose.disconnect();
})


