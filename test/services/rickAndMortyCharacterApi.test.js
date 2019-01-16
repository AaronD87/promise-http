const { getCharacters } = require('../../lib/services/rickAndMortyCharacterApi');

describe('rick and morty service', () => {
  it('gets a list of characters', () => {
    return getCharacters()
      .then(characters => {
        expect(characters).toEqual([
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

        expect(characters[3]).toEqual('Beth Smith');

        expect(characters).toHaveLength(20);
      });
  });
});
