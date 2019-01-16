const request = require('superagent');

function getCharacters() {
  return request
    .get('https://rickandmortyapi.com/api/character/')
    .then(res => {
      return res.body.results.map(body => body.name);
    });
}

console.log(getCharacters);

module.exports = { getCharacters };
