const request = require('supertest');
const app = require('../lib/app');

jest.mock('../lib/services/rickAndMortyApi.js');

describe('app', () => {
  it('has a tester route', () => {
    return request(app)
      .post('/character/1')
      .then(res => {
        expect(res.body).toEqual({
          name: 'Rick Sanchez',
          status: 'Alive',
          species: 'Human'
        });
      });
  });
});
