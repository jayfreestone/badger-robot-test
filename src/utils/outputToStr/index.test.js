const outputToStr = require('./index');

describe('processes output array into result string', () => {
  test('with sample output', () => {
    const input = [
      { pos: [1, 1], orientation: 'E', lost: false },
      { pos: [3, 3], orientation: 'N', lost: true },
      { pos: [2, 3], orientation: 'S', lost: false },
    ];

    const processed = outputToStr(input);
    const output = '1 1 E\n3 3 N LOST\n2 3 S';

    expect(processed).toEqual(output);
  });
});
