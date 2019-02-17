const {
  NORTH,
  SOUTH,
  EAST,
  WEST,
} = require('../../consts/orientations');

function calculateForwardPosition(pos, dir) {
  const [x, y] = pos;

  switch (dir) {
    case NORTH:
      return [x, y + 1];
    case SOUTH:
      return [x, y - 1];
    case EAST:
      return [x + 1, y];
    case WEST:
      return [x - 1, y];
    default:
      throw new Error('Direction invalid');
  }
}

module.exports = calculateForwardPosition;
