const {
  LEFT,
  RIGHT,
} = require('./../../consts/directions');
const {
  NORTH,
  SOUTH,
  EAST,
  WEST,
} = require('./../../consts/orientations');
const calculateOrientation = require('./index');

describe('calculates the next orientation correctly', () => {
  test('going clockwise from east', () => {
    expect(
      calculateOrientation(EAST, RIGHT),
    ).toEqual(
      SOUTH,
    );
  });
  test('going clockwise from west', () => {
    expect(
      calculateOrientation(WEST, RIGHT),
    ).toEqual(
      NORTH,
    );
  });
  test('going anti-clockwise from north', () => {
    expect(
      calculateOrientation(NORTH, LEFT),
    ).toEqual(
      WEST,
    );
  });
});
