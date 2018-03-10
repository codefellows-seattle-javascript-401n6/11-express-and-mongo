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

    test('It should return 400 for a bad request if no ID was provided', (resolve, reject) =>{
        let badId = '5a9f687a1580b2c149d5b96_eeee';
        request.get(server + '/api/fighter/' + badId)
        .end((err, res) => {
            if(err){
                // console.log('Error:', err);
            }
            expect(res.status).toBe(404);
            resolve();
        });
    });

    test('It should return 200 for a valid id', (resolve, reject) => {
        request.get(server + '/api/fighter')
        .end((err, res) => {
            let expected = res.body[0];
            let id = res.body[0]._id;
            request.get(server + '/api/fighter?id=' + id)
            .end((err, res) => {
                expect(res.body).toEqual(expected);
                resolve();

            });
        });
    });

})