const { parse } = require('url');
const { getCharacters } = require('./services/rickAndMortyCharacterApi');

module.exports = (req, res) => {
  const url = parse(req.url, true);
  if(url.pathname.includes('/characters')) {
    getCharacters()
      .then(characters => {
        console.log('characters', characters);
        res.setHeader('Content-Type', 'text/html');
        const html = characters.map(char => {
          return `<li>${char.name}</li>`;
        });
        res.end(`<html><body><ul>${html.join(' ')}</ul></body></html>`);
      })
      .catch(err => {
        res.statusCode = 500;
        res.end(err);
      });
  }
};
