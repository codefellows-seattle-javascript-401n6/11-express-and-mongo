'use strict';

const superagent = require('superagent');

const SERVER = 'http://localhost:3000';

describe('Server tests', () => {

  test('throws 404 if route is not found', (done) => {
    superagent.get(SERVER + '/ODB')
    .end((err, res) => {
      expect(res.status).toBe(404);
    //   expect(40).toEqual(92);
      done();
    });
  });

  test('throws 404 if invalid ids are entered', (done) => {
    superagent.get(SERVER + '/api/thewu/' + '36')
    .end((err, res) => {
      expect(res.status).toBe(404);
    //   expect(40).toEqual(92);
      done();
    });
  });

  test('throws 400 for posts requests with no body', (done) => {
    superagent.post(SERVER + '/api/thewu')
    .end((err, res) => {
      expect(res.status).toBe(400);
    //   expect(40).toEqual(92);
      done();
    });
  });

  test('throws 400 for get requests with no id', (done) => {
    superagent.post(SERVER + '/api/thewu?id=')
    .end((err, res) => {
      expect(res.status).toBe(400);
    //   expect(40).toEqual(92);
      done();
    });
  });

  test('returns 200 for good get requests with valid id and should contain a response body for a request made with a valid id', (done) => {
    let expected;
    superagent.get(SERVER + '/api/thewu')
    .end((err, res) => {
      expected = res.body[0];
      let id = res.body[0]._id;
      superagent.get(`${SERVER}/api/thewu?id=${id}`).end((err, res) => {
        expect(res.body).toEqual(expected);
        // expect(40).toEqual(92);
        done();
      });
    });
  });

  test('returns 200 for posts requests and should respond with the body content for a post request with a valid body', (done) => {
    let newWuTang = {
        name: "U-God",
        lyric: "Well I\'m a sire, I set the microphone on fire,Rap styles vary, Cary like Maria My hip-hop will rock and shock the nationLike the Emancipation Proclamation",
        chambers: 36
    }
    superagent.post(SERVER + '/api/thewu')
    .set('Content-Type', 'application/json')
    .send(JSON.stringify(newWuTang))
    .end((err, res) => {
      expect(res.body.name).toEqual(newWuTang.name);
      expect(res.body.lyric).toEqual(newWuTang.lyric);
      expect(res.body.chambers).toEqual(newWuTang.chambers);
      expect(res.status).toBe(200);
    //   expect(40).toEqual(92);
      done();
    });
  });

});