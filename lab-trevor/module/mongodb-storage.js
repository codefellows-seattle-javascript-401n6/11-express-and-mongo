
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const Team = require('../model/teams.js');

function save(team){
    let teamModel = new Team({
        city: team.city,
        mascot: team.mascot,
        superBowls: team.superBowls,
        division: team.division,
    })
    return new Promise((resolve, reject) => {
        teamModel.save((err, savedTeam) =>{
            resolve(savedTeam);
        })
    })
}

function removeAll(){
    return new Promise ((resolve, reject) => {
        Team.remove((err, teams) => {
            resolve(teams);
        })
    })
}
module.exports = {save, Team, removeAll}



// return Beer.find({rating: 10});

// bears.save()
// .then((savedTeam) => {
//     console.log('saved', savedTeam);
// })
// .then((savedTeam) =>{
//     return vikings.save();
//     mongoose.disconnect();
// });
//or