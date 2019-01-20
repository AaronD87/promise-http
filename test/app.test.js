const request = require('supertest');
const app = require('../lib/app');

jest.mock('../lib/services/rickAndMortyCharacterApi.js');
jest.mock('../lib/services/rickAndMortyApi.js');

describe('app', () => {
  it('has a tester route', () => {
    return request(app)
      .get('/characters')
      .then(res => {
        expect(res.text).toContain('Rick Sanchez');
      });
  });

  it.only('saves a note to a character', () => {
    return request(app)
      .post('/characters')
      .send({ characterId: 1, note: 'Terrible character' })
      .then(res => {
        expect(res.statusCode).toEqual(204);
      });
  });

  it('can find by individual id', () => {
    return request(app)
      .get('/characters/1')
      .then(res => {
        expect(res.text).toContain('Rick Sanchez');
      });
  });
});
