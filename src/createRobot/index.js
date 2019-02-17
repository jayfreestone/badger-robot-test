const createVector = require('./../createVector');

/**
 * @typedef {Object} robotInstance
 * @property {getPos} orientation
 * @property {Array<Number>} pos
 * @property {Array<String>} instructions
 */

/**
 * Robot instance factory.
 * @param {{ pos: Array<number>, orientation: string }} inputObj
 */
function createRobot({ pos: initialPos, orientation: initialOrientation }) {
  let lost = false;
  let pos = createVector(...initialPos);
  let orientation = initialOrientation;

  return {
    /**
     * @returns string;
     */
    getOrientation() {
      return orientation;
    },
    setOrientation(newOrientation) {
      orientation = newOrientation;
    },
    /**
     * @returns string;
     */
    getPos() {
      return pos;
    },
    setLost(isLost) {
      lost = Boolean(isLost);
    },
    /**
     * @returns boolean;
     */
    getLost() {
      return lost;
    },
    moveTo(x, y) {
      pos = createVector(x, y);
    },
  };
}

module.exports = createRobot;
