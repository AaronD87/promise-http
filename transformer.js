const fsPromises = require('fs').promises;

const removeCapitals = str => {
  return str
    .split('')
    .filter(letter => {
      return letter === letter.toLowerCase();
    })
    .join('');
};

const read = src => fsPromises.readFile(src, { encoding: 'utf8' });

const makeAllLettersCapital = str => str.toUpperCase();

const reverse = str => str.split('').reverse().join('');

const trim = str => str.trim();

const transformer = src => {
  return read(src)
    .then(removeCapitals)
    .then(makeAllLettersCapital)
    .then(reverse)
    .then(trim);
  
};

module.exports = {
  transformer,
  removeCapitals
};
