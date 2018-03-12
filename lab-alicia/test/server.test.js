'use strict';

const superagent = require('superagent');

const SERVER_URL = 'http://localhost:3000';

describe('Tests for Server', () => {

  test('throws 404 for route not found', (done) => {
    superagent.get(SERVER_URL + '/wrongurl')
      .end((err, res) => {
        expect(res.status).toBe(404);
        done();
      });
  });

  test('throws 404 for invalid ids', (done) => {
    superagent.get(SERVER_URL + '/api/paddles/' + '490538594')
      .end((err, res) => {
        expect(res.status).toBe(404);
        done();
      });
  });

  test('throws 400 for POST requests with no body', (done) => {
    superagent.post(SERVER_URL + '/api/paddles')
      .end((err, res) => {
        expect(res.status).toBe(400);
        done();
      });
  });

  test('throws 400 for GET requests with no id', (done) => {
    superagent.post(SERVER_URL + '/api/paddles?id=')
      .end((err, res) => {
        expect(res.status).toBe(400);
        done();
      });
  });

  test('returns 200 for GET requests with valid id and contains response body for a request made with a valid id', (done) => {
    let expected;
    superagent.get(SERVER_URL + '/api/paddles')
      .end((err, res) => {
        expected = res.body[0];
        let id = res.body[0]._id;
        superagent.get(`${SERVER_URL}/api/paddles?id=${id}`).end((err, res) => {
          expect(res.body).toEqual(expected);
          done();
        });
      });
  });

  test('returns 200 for POST requests and responds with response body for POST request with a valid body', (done) => {
    let newPaddle = {
      name: "PaddleTesting",
      bladeSurfaceArea: 450,
      length: 210
    };
    superagent.post(`${SERVER_URL}/api/paddles`)
      .set('Content-Type', 'application/json')
      .send(JSON.stringify(newPaddle))
      .end((err, res) => {
        expect(res.body.name).toEqual(newPaddle.name);
        expect(res.body.bladeSurfaceArea).toEqual(newPaddle.bladeSurfaceArea);
        expect(res.body.length).toEqual(newPaddle.length);
        expect(res.status).toBe(200);
        done();
      });
  });

  test('returns 400 for bad request without a valid body', (done) => {
    superagent.post(`${SERVER_URL}/api/paddles`)
      .end((err, res) => {
        expect(res.status).toBe(400);
        done();
      });
  });
});