const mongodb = require('./mongodb-storage');
const Robot = require('../../models/robot');

let seed = (storage) => {
  return storage.removeAll()
    .then(() => {
      return Promise.all([
        storage.save(new Robot({name: 'Johnny5', purpose: 'getting lost', yearBuilt: '1986'})),
        storage.save(new Robot({name: 'Rosie The Robot Maid', purpose: 'cleaning', yearBuilt: '1962'}))
      ]);
    });
};

module.exports = {seed, mongodb};