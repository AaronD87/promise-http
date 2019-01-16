const request = require('superagent');

function getCharacters() {
  return request
    .get('https://rickandmortyapi.com/api/character/')
    .then(res => {
      const results = res.body.results.map(body => body.name);
      return results;
    });
}

module.exports = { getCharacters };
