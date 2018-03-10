'use strict';

const superagent = require('superagent');

const SERVER = 'http://localhost:3000';

describe('Server tests', () => {

  test('api returns 404 for routes that have not been registered', (done) => {
    superagent.get(SERVER + '/')
    .end((err, res) => {
      expect(res.status).toBe(404);
    //   expect(40).toEqual(92);
      done();
    });
  });

  test('return 404  if id was not found', (done) => {
    superagent.get(SERVER + '/api/moveis')
    .end((err, res) => {
      expect(res.status).toBe(404);
    //   expect(40).toEqual(92);
      done();
    });
  });

  // test not working
  test('return 400 for get requests with no id', (done) => {
    superagent.get(SERVER + '/api/movies?id=')
    .end((err, res) => {
      expect(res.status).toBe(400);
    //   expect(40).toEqual(92);
      done();
    });
  });

//test not working
  test('send 400 for posts requests with no body', (done) => {
    superagent.post(SERVER + '/api/movies')
    .end((err, res) => {
      expect(res.status).toBe(400);
    //   expect(40).toEqual(92);
      done();
    });
  });

  test('send 200 on get requests with valid id and response body with a valid id', (done) => {
    let expected;
    superagent.get(SERVER + '/api/movies')
    .end((err, res) => {
      expected = res.body[0];
      let id = res.body[0]._id;
      superagent.get(`${SERVER}/api/movies?id=${id}`)
      .end((err, res) => {
        expect(res.body).toEqual(expected);
        // expect(40).toEqual(92);
        done();
      });
    });
  });

  test('send 200 for posts requests and should respond with the body content for a post request with a valid body', (done) => {
    let newMovie = {
        name: 'Bourne Identity',
        date: 2002,
        rating: 9
    }
    superagent.post(SERVER + '/api/movies')
    .set('Content-Type', 'application/json')
    .send(JSON.stringify(newMovie))
    .end((err, res) => {
      expect(res.body.name).toEqual(newMovie.name);
      expect(res.body.date).toEqual(newMovie.date);
      expect(res.body.rating).toEqual(newMovie.rating);
      expect(res.status).toBe(200);
    //   expect(40).toEqual(92);
      done();
    });
  });

});