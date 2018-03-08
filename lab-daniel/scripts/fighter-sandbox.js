'use strict';
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
const Fighter = require('../models/fighter');

let conorMcgregor = new Fighter({ name: 'Conor McGregor', wins: 21, losses: 3 });
let jonJones = new Fighter({ name: 'Jon Jones', wins: 23, losses: 1 });
let cmPunk = new Fighter({ name: 'CM Punk', wins: 0, losses: 1 });

Fighter.remove()
    .then(info => {
        console.log('INFO:', info)
        let saves = [
            conorMcgregor.save(),
            jonJones.save(),
            cmPunk.save()
        ]
        return Promise.all(saves);
    })
    .then((savedFighters) => {
        console.log('Saved Fighters:', savedFighters);
        return Fighter.find();
    })
    .then((results) => {
        console.log('FOUND:', results);
        console.log('FOUND TOTAL:', results.length);
        mongoose.disconnect();
    })