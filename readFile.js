const fsPromises = require('fs').promises;

fsPromises.readFile('./http.md', { encoding: 'utf8' })
  .then(data => console.log(data))
  .catch(err => console.log(err));

