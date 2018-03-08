'use strict';

function fighterStorage (storage) {
    return storage.removeAll()
    .then(() => {
        return Promise.all([
            storage.save(new Fighter({ name: 'Conor McGregor', wins: 21, losses: 3 })),
            storage.save(new Fighter({ name: 'Jon Jones', wins: 23, losses: 1 })),
            storage.save(new Fighter({ name: 'CM Punk', wins: 0, losses: 1 }))
        ])
    })
}

module.exports = fighterStorage;