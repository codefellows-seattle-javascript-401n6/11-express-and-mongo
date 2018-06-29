'use strict';

const SERVER = 'http://localhost:3000';
const request = require('superagent');
const mongoose = require('mongoose');
const Robot = require('../api/robot');
const storage = require('../lib/storage/storage')
const mongoddbStorage = storage.mongodb;

describe('Test routes', () => {
  test('should return 404 for unknown routes', (done) => {
    request.get(SERVER + '/hi')
      .end((err, res) => {
        if (err) {
        }
        expect(res.status).toBe(404);
        done();
      });
  });

  test('should return 404 for unknown routes', (done) => {
    request.get(SERVER + '/hi')
      .end((err, res) => {
        if (err) {
        }
        expect(res.status).toBe(404);
        done();
      });
  });

  test('should return 200 for valid id provided', (done) => {
    storage.seed(mongodbStroage)
      .then(() => {
        return mongoddbStorage.getAll();
      })
      .then(robots => {
        let validId = robots[0]._id;
        request.get(`${SERVER}/api/robots/${validId}`)
          .end((err, res) => {
            if (err) {
              throw err;
            }
            expect(res.status).toBe(200);
            done();
          });
      });
  });

  test('should return 404 for id not found', (done) => {
    let badId = '';
    request.get(`${SERVER}/api/robots/${badId}`)
      .end((err, res) => {
        if (err) {
        }
        expect(res.status).toBe(404);
        done();
      });
  });

  test('should return 200 for valid post request', (done) => {
    let validRobot = {name: 'name of a robot', purpose: 'purpose of robot', yearBuilt: 'year the robot is built'};
    request.post(`${SERVER}/api/robots`)
      .set('Content-Type', 'application/json')
      .send(JSON.string(validRobot))
      .end((err, res) => {
        if (err) {
          throw err;
        }
        expect(res.body.name).toBe(validRobot.name);
        expect(res.body.purpose).toBe(validRobot.purpose);
        done();
      });
  });

  test('should return 400 for bad request body', (done) => {
    request.post(`${SERVER}/api/robot`)
      .end((err, res) => {
        expect(res.status).toBe(400);
        done();
    });
  });
