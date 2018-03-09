const mongodb = require('./mongodb-storage');
const Hero = require('../../models/hero');

let seed = (storage) => {
  return storage.removeAll()
    .then(() => {
      return Promise.all([
        storage.save(new Hero({name: 'Thor', superpower: 'Storms', hero: 'yes'})),
        storage.save(new Hero({name: 'Loki', superpower: 'Magic', hero: 'no'}))
      ]);
    });
};

module.exports = { seed, mongodb };
