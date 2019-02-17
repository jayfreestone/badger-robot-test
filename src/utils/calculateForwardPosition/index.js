const {
  NORTH,
  SOUTH,
  EAST,
  WEST,
} = require('../../consts/orientations');

/**
 * Calculates the next position based on the current coordinates.
 * @param {Array<number>} pos Current coordinates
 * @param {string} orientation Current orientation
 * @return {Array<number>} The next coordinates
 */
function calculateForwardPosition(pos, orientation) {
  const [x, y] = pos;

  switch (orientation) {
    case NORTH:
      return [x, y + 1];
    case SOUTH:
      return [x, y - 1];
    case EAST:
      return [x + 1, y];
    case WEST:
      return [x - 1, y];
    default:
      throw new Error('Orientation invalid');
  }
}

module.exports = calculateForwardPosition;
