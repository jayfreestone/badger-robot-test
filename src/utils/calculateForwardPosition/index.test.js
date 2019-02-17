const {
  NORTH,
  SOUTH,
  EAST,
  WEST,
} = require('./../../consts/orientations');
const calculateForwardPosition = require('./index');

describe('calculates the next x,y based on direction', () => {
  const pos = [3, 2];

  test('north', () => {
    expect(
      calculateForwardPosition(pos, NORTH),
    ).toEqual(
      [3, 3],
    );
  });

  test('south', () => {
    expect(
      calculateForwardPosition(pos, SOUTH),
    ).toEqual(
      [3, 1],
    );
  });

  test('east', () => {
    expect(
      calculateForwardPosition(pos, EAST),
    ).toEqual(
      [4, 2],
    );
  });

  test('west', () => {
    expect(
      calculateForwardPosition(pos, WEST),
    ).toEqual(
      [2, 2],
    );
  });
});
