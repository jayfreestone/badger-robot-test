const fs = require('fs');
const path = require('path');
const parseInput = require('./index');

test('input is parsed into object', () => {
  const input = fs.readFileSync(path.resolve(__dirname, './../../../tests/input.txt'), 'utf8');
  const output = {
    grid: {
      width: 5,
      height: 3,
    },
    robots: [
      {
        pos: [1, 1],
        orientation: 'E',
        instructions: ['R', 'F', 'R', 'F', 'R', 'F', 'R', 'F'],
      },
      {
        pos: [3, 2],
        orientation: 'N',
        instructions: ['F', 'R', 'R', 'F', 'L', 'L', 'F', 'F', 'R', 'R', 'F', 'L', 'L'],
      },
      {
        pos: [0, 3],
        orientation: 'W',
        instructions: ['L', 'L', 'F', 'F', 'F', 'L', 'F', 'L', 'F', 'L'],
      },
    ],
  };

  expect(parseInput(input)).toEqual(output);
});
