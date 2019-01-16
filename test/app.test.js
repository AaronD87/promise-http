const request = require('supertest');
const app = require('../lib/app');

describe('app', () => {
  it('has a tester route', () => {
    return request(app)
      .get('/you')
      .query({ name: 'ryan' })
      .then(res => {
        expect(res.body).toEqual({ hi: 'there ryan' });
      });
  });

});
