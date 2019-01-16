const fsPromises = require('fs').promises;

fsPromises.writeFile('./newtext.txt', 'Hello You', { encoding: 'utf8' })
  .then(() => console.log('Done'))
  .catch(err => console.log(err));
