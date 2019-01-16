const promiseCheck = require('./promiseCheck');
const fsPromises = require('fs').promises;

describe('promise check', () => {
  it('returns true if given value is a promise', () => {
    expect(promiseCheck(fsPromises.readFile('./http.md'))).toBeTruthy();
  });

  it('returns false if it is not a promise', () => {
    expect(promiseCheck({})).toBeFalsy();
  });
});
