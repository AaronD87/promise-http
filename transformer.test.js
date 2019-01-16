const {
  transformer,
  removeCapitals
} = require('./transformer');

describe('transformer', () => {
  it.only('transforms some file', () => {
    return transformer('./transform.txt')
      .then(transformTxt => {
        expect(transformTxt).toEqual('EREH I');
      });
  });

  it('removes capital letters', () => {
    expect(removeCapitals('Hi There')).toEqual('i here');
  });
});
