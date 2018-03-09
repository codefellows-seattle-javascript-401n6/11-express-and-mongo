
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

function remove(id) {
    console.log('delete beginning')
    return new Promise((resolve, reject) => {
        Team.remove({_id: id}, (err, team) => {
            resolve(team);
            console.log('delete complete')
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
module.exports = {save, Team, removeAll, remove}
