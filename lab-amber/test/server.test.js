'use strict';

const superagent = require('superagent');

const SERVER_URL = 'http://localhost:3000';

describe('Server tests', () => {

  test('throws 404 if route is not found', (done) => {
    superagent.get(SERVER_URL + '/wrongurl')
    .end((err, res) => {
      expect(res.status).toBe(404);
      done();
    });
  });

  test('throws 404 if invalid ids are entered', (done) => {
    superagent.get(SERVER_URL + '/api/projects/' + '1234')
    .end((err, res) => {
      expect(res.status).toBe(404);
      done();
    });
  });

  test('throws 400 for posts requests with no body', (done) => {
    superagent.post(SERVER_URL + '/api/projects')
    .end((err, res) => {
      expect(res.status).toBe(400);
      done();
    });
  });

  test('throws 400 for get requests with no id', (done) => {
    superagent.post(SERVER_URL + '/api/projects?id=')
    .end((err, res) => {
      expect(res.status).toBe(400);
      done();
    });
  });

  test('returns 200 for good get requests with valid id and should contain a response body for a request made with a valid id', (done) => {
    let expected;
    superagent.get(SERVER_URL + '/api/projects')
    .end((err, res) => {
      expected = res.body[0];
      let id = res.body[0]._id;
      superagent.get(`${SERVER_URL}/api/projects?id=${id}`).end((err, res) => {
        expect(res.body).toEqual(expected);
        done();
      });
    });
  });

  test('returns 200 for posts requests and should respond with the body content for a post request with a valid body', (done) => {
    let newProject = {
        name: "Woohoo!",
        description: "The Arithmetic.add method expects two integers as parameters and returns either null if the entered arguments are invalid or an integer as the sum of both numbers.",
        link: "https://github.com/amgranad/01-node-ecosystem/tree/master/lab-amber"
    }
    superagent.post(SERVER_URL + '/api/projects')
    .set('Content-Type', 'application/json')
    .send(JSON.stringify(newProject))
    .end((err, res) => {
      expect(res.body.name).toEqual(newProject.name);
      expect(res.body.description).toEqual(newProject.description);
      expect(res.body.link).toEqual(newProject.link);
      expect(res.status).toBe(200);
      done();
    });
  });

});