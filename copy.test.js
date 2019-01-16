const copy = require('./copy');
const fsPromises = require('fs').promises;

describe('copy', () => {
  // afterEach(() => {
  //   return fsPromises.unlink('./newtext2.txt');
  // });

  it('copies a file', () => {
    return copy('./newtext.txt', './newtext2.txt')
      .then(() => {
        return Promise.all([
          fsPromises.readFile('./newtext.txt'),
          fsPromises.readFile('./newtext2.txt')
        ]);
      })
      .then(([newText1, newText2]) => {
        expect(newText1).toEqual(newText2);
      })
      .catch(err => expect(err).toBeFalsy());
  });
});
