const simulation = require('./index');

describe('robots are in correct final position', () => {
  test('using sample data', () => {
    simulation({
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
    });
  });
});
