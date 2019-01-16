const request = require('supertest');
const app = require('../lib/app');

jest.mock('../lib/services/rickAndMortyCharacterApi.js');

describe('app', () => {
  it('has a tester route', () => {
    return request(app)
      .get('/characters')
      .then(res => {
        expect(res.text).toEqual('<html><body><ul><li>Rick Sanchez</li> <li>Morty Smith</li> <li>Summer Smith</li> <li>Beth Smith</li> <li>Jerry Smith</li> <li>Abadango Cluster Princess</li> <li>Abradolf Lincler</li> <li>Adjudicator Rick</li> <li>Agency Director</li> <li>Alan Rails</li> <li>Albert Einstein</li> <li>Alexander</li> <li>Alien Googah</li> <li>Alien Morty</li> <li>Alien Rick</li> <li>Amish Cyborg</li> <li>Annie</li> <li>Antenna Morty</li> <li>Antenna Rick</li> <li>Ants in my Eyes Johnson</li></ul></body></html>');
      });
  });
});
