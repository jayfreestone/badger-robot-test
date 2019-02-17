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

const compassDirections = [NORTH, EAST, SOUTH, WEST];

/**
 * Calculates orientation based on rotating either left or right.
 * @param {string} orientation
 * @param {string} rotationDirection
 * @returns {string} The new orientation.
 */
function calculateOrientation(orientation, rotationDirection) {
  const currentPos = compassDirections.indexOf(orientation);
  // @todo Probably need to be more robust here and use RIGHT
  const nextPos = rotationDirection === LEFT ? currentPos - 1 : currentPos + 1;
  const lastIndex = compassDirections.length - 1;

  // If we hit the end, loop back around
  if (nextPos > lastIndex) {
    return compassDirections[0];
  }

  // If we hit the start, go to the end
  if (nextPos < 0) {
    return compassDirections[lastIndex];
  }

  return compassDirections[nextPos];
}

module.exports = calculateOrientation;
