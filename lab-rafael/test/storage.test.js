'use strict';

const SERVER = 'http://localhost:3000';
const request = require('superagent');
const mongoose = require('mongoose');
const Hero = require('../api/hero');
const storage = require('../lib/storage/storage');
const mongodbStorage = storage.mongodb;

describe('Test routes', () => {
  test('Should return 404 for unknown routes', (done) => {
    request.get(SERVER + '/hi')
      .end((err, res) => {
        if (err) {
          console.log('Error', err);
        }
        expect(res.status).toBe(404);
        done();
      });
  });  

  test('Should return 404 for unknown routes', (done) => {
    request.get(SERVER + '/hi')
      .end((err, res) => {
        if (err) {
          console.log('Error', err);
        }
        expect(res.status).toBe(404);
        done();
      });
  });
  
  test('Should return 200 for valid id provided', (done) => {
    storage.seed(mongodbStorage)
      .then(() => {
        return mongodbStorage.getAll();
      })
      .then(heroes => {
        let validId = heroes[0]._id;
        request.get(`${SERVER}/api/heroes/${validId}`)
          .end((err, res) => {
            if (err) {
              throw err;
            }
            expect(res.status).toBe(200);
            done();
          });       
      });
  });

  test('Should return 404 for id not found', (done) => {
    let badId = '5a9f84168b8c3f766ba36b51';
    request.get(`${SERVER}/api/heroes/${badId}`)
      .end((err, res) => {
        if (err) {
          console.log('Error', err);
        }
        expect(res.status).toBe(404);
        done();
      });
  });

  test('Should return 200 for valid post request', (done) => {
    let validHero = {name: 'Some hero', superpower: 'somepower', hero: 'yes'};
    request.post(`${SERVER}/api/heroes`)
      .set('Content-Type', 'application/json')
      .send(JSON.stringify(validHero))
      .end((err, res) => {
        if (err) {
          throw err;
        }
        expect(res.body.name).toBe(validHero.name);
        expect(res.body.superpower).toBe(validHero.superpower);
        done();
      });
  });

  test('Should return 400 for bad request body', (done) => {
    request.post(`${SERVER}/api/heroes`)
      .end((err, res) => {
        expect(res.status).toBe(400);
        done();
    });
  });
});
