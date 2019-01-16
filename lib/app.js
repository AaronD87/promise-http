const { parse } = require('url');
const { getCharacters } = require('./services/rickAndMortyCharacterApi');

module.exports = (req, res) => {
  const url = parse(req.url, true);
  if(url.pathname.includes('/characters')) {
    getCharacters()
      .then(characters => {
        res.setHeader('Content-Type', 'text/html');
        const html = characters.map(character => {
          return `<li>${character}</li>`;
        });
        res.end(`<html><body><ul>${html.join(' ')}</ul></body></html>`);
      })
      .catch(err => {
        res.statusCode = 500;
        res.end(err);
      });
  }
};
