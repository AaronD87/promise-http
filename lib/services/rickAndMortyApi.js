const request = require('superagent');

function getCharacter(id) {
  request
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => {
      return res.body.results[0].name;

        
    });
  console.log(getCharacter(1));
}

module.exports = getCharacter;
