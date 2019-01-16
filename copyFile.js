const fsPromises = require('fs').promises;

fsPromises.readFile('./newtext.txt', { encoding: 'utf8' })
  .then(data => fsPromises.writeFile('./newtext2.txt', data, { encoding: 'utf8' })
    .then(() => console.log('Done'))
    .catch(err => console.log(err)))
  .catch(err => console.log(err));
