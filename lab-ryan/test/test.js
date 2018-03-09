'use strict';

const superagent = require('superagent');

const SERVER = 'http://localhost:3000';

describe('Server tests', () => {

  test('send 404 if route is not found', (done) => {
    superagent.get(SERVER + '/ODB')
    .end((err, res) => {
      expect(res.status).toBe(404);
    //   expect(40).toEqual(92);
      done();
    });
  });

  test('send 404 if invalid ids are entered', (done) => {
    superagent.get(SERVER + '/api/movie/' + number)
    .end((err, res) => {
      expect(res.status).toBe(404);
    //   expect(40).toEqual(92);
      done();
    });
  });

  test('send 400 for posts requests with no body', (done) => {
    superagent.post(SERVER + '/api/movie')
    .end((err, res) => {
      expect(res.status).toBe(400);
    //   expect(40).toEqual(92);
      done();
    });
  });

  test('send 400 for get requests with no id', (done) => {
    superagent.post(SERVER + '/api/movie?id=')
    .end((err, res) => {
      expect(res.status).toBe(400);
    //   expect(40).toEqual(92);
      done();
    });
  });

  test('send 200 on get requests with valid id and response body with a valid id', (done) => {
    let expected;
    superagent.get(SERVER + '/api/movie')
    .end((err, res) => {
      expected = res.body[0];
      let id = res.body[0]._id;
      superagent.get(`${SERVER}/api/movie?id=${id}`).end((err, res) => {
        expect(res.body).toEqual(expected);
        // expect(40).toEqual(92);
        done();
      });
    });
  });

  test('send 200 for posts requests and should respond with the body content for a post request with a valid body', (done) => {
    let newMovie = {
        name: "Shrek",
        date: 2001,
        rating: 7
    }
    superagent.post(SERVER + '/api/movie')
    .set('Content-Type', 'application/json')
    .send(JSON.stringify(newMovie))
    .end((err, res) => {
      expect(res.body.name).toEqual(newMovei.name);
      expect(res.body.lyric).toEqual(newMovie.date);
      expect(res.body.chambers).toEqual(newMovie.rating);
      expect(res.status).toBe(200);
    //   expect(40).toEqual(92);
      done();
    });
  });

});