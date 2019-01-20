const { parse } = require('url');
const { getCharacters } = require('./services/rickAndMortyCharacterApi');
const { getCharacter } = require('./services/rickAndMortyApi');
const bodyParser = require('../lib/bodyParser');

const notes = {};

module.exports = (req, res) => {
  const url = parse(req.url, true);
  if(req.method === 'POST' && url.pathname === '/characters') {
    bodyParser(req)
      .then(body => {
        const id = body.characterId;
        const note = body.note;
        if(notes[id]) {
          notes[id].push(note);
        }
        else {
          notes[id] = [note];
        }
        res.statusCode = 204;
        res.end();
      });
  }

  else if(url.pathname === '/characters') {
    getCharacters()
      .then(characters => {
        res.setHeader('Content-Type', 'text/html');
        const html = characters.map(character => {
          return `<li>${character}</li>`;
        });
        res.end(`<html><body><ul>${html.join(' ')}</ul></body></html>`);
      })
      .catch(err => {
        res.status(500);
        res.end(err);
      });
  }


  else if(url.pathname.includes('/characters/')) {
    const id = url.pathname.slice(1).split('/')[1];
    getCharacter(parseInt(id))
      .then(character => {
        res.end(`<html><body><h3>${character.name}</h3><h3>${character.status}</h3><h3>${character.species}</h3></h1></body></html>`);
      });
  }
};
