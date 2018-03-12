

const mongodb = require('./mongodb-storage');
const Team = require('../model/teams');

function seed(storage){
    return mongodb.removeAll()
    .then(() => {
        return Promise.all([
            mongodb.save(new Team({city: 'Chicago', mascot:  'Bears', superBowls: 1, division: 'NFC North'})),
            mongodb.save(new Team({city: 'Minneapolis', mascot:  'Vikings', superBowls: 0, division: 'NFC North'})),
            mongodb.save(new Team({city: 'Green Bay', mascot:  'Packers', superBowls: 4, division: 'NFC North'})),
            mongodb.save(new Team({city: 'Detroit', mascot:  'Lions', superBowls: 0, division: 'NFC North'})),
        ])
    })
}

module.exports = {mongodb, seed, Team};