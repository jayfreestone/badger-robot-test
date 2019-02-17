const fs = require('fs');
const path = require('path');
const simulation = require('./index');

test('sample input to match sample output', () => {
  const input = fs.readFileSync(path.resolve(__dirname, './../../input.txt'), 'utf8');
  const output = '1 1 E\n3 3 N LOST\n2 3 S';
  expect(simulation(input)).toEqual(output);
});
