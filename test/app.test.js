const request = require('supertest');
const app = require('../lib/app');

jest.mock('../lib/services/rickAndMortyCharacterApi.js');

describe('app', () => {
  it('has a tester route', () => {
    return request(app)
      .get('/characters')
      .then(res => {
        expect(res.body).toEqual([
          'Rick Sanchez',
          'Morty Smith',
          'Summer Smith',
          'Beth Smith',
          'Jerry Smith',
          'Abadango Cluster Princess',
          'Abradolf Lincler',
          'Adjudicator Rick',
          'Agency Director',
          'Alan Rails',
          'Albert Einstein',
          'Alexander',
          'Alien Googah',
          'Alien Morty',
          'Alien Rick',
          'Amish Cyborg',
          'Annie',
          'Antenna Morty',
          'Antenna Rick',
          'Ants in my Eyes Johnson'
        ]);
      });
  });
});
