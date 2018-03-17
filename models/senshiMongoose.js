'use strict'

const mongoose = require('mongoose');
const Senshi = require('./senshi.js')
mongoose.connect('mongodb://localhost/sailorSenshi');


let sailorMoon = new Senshi({ senshiName: 'Sailor Moon', name: 'Usagi Tsukino', power: 'Lunar Magic', rank: 'Sovereign of Earth' })
let tuxedoMask = new Senshi({ senshiName: 'TuxedoMask', name: ' Mamoru Chiba', power: 'Roses?', rank: 'N/A' })
let sailorMercury = new Senshi({ senshiName: 'Sailor Mercury', name: 'Ami Mizuno', power: 'Intelligence/Water Magic', rank: 'Inner Senshi' })


let saves = [
    sailorMoon.save(),
    tuxedoMask.save(),
    sailorMercury.save(),
]

// Promise.all(saves)
//     .then((savedSenshi) => {
//         console.log('Saved', savedSenshi);
//         return Senshi.find();
//     })
//     .then((results) => {
//         console.log('Found', results);
//         mongoose.disconnect();
//     })

let getSenshi = (results) => {
    
    Promise.all(saves)
        .then((savedSenshi) => {
            console.log('Saved', savedSenshi);
            return Senshi.find();
        })
        .then((results) => {
            console.log('Found', results);
            mongoose.disconnect();
        })
}

let getOneSenshi = (results) => {
    
    Promise.all(saves)
        .then((savedSenshi) => {
            console.log('Saved', savedSenshi);
            return Senshi.find(`${__id}`);
        })
        .then((results) => {
            console.log('Found', results);
            mongoose.disconnect();
        })
}

let postSenshi = (results) => {
    
}

let deleteSenshi = (results)=>{
   return Senshi.remove()
    .then((results) => {
        console.log('Found', results);
        mongoose.disconnect();
    })
}

module.exports = {getSenshi};