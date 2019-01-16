const fs = require('fs');

const readPromise = src => new Promise((resolve, reject) => {
  fs.readFile(src, { encoding: 'utf8' }, (err, data) => {
    err ? reject(err) : resolve(data);
  });
});

readPromise('./http.md')
  .then(data => console.log(data));

module.exports = readPromise;
