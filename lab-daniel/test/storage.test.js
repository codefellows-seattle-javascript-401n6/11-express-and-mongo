'use strict';

const routes = require('../routes/fighter.js');
const storage = require('../lib/storage.js');
const mongo = require('../lib/mongo.js');
const mongoose = require('mongoose');
const request = require('superagent');
const server = 'http://localhost:3000';


describe('Storage Test', () => {

    test('It should return 404 for the unregistered route',(resolve, reject) => {
        request.get(server + '/abcdefg')
        .end((res, err) => {
            if(err){
                // console.log('Error:', err);
            }
            expect(res.status).toBe(404);
            resolve();
        });
    });
})