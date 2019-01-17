const { parse } = require('url');
const { getCharacters } = require('./services/rickAndMortyCharacterApi');
const { getCharacter } = require('./services/rickAndMortyApi');

module.exports = (req, res) => {
  const url = parse(req.url, true);
  if(url.pathname === '/characters') {
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

  else if(url.pathname.includes('/characters/')) {
    const id = url.pathname.slice(1).split('/')[1];
    getCharacter(parseInt(id))
      .then(character => {
        res.setHeader('Content-Type', 'text/html');
        res.end(JSON.stringify(character));
      });
  }
};
