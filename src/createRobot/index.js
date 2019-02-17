/**
 * @typedef {Object} robotInstance
 * @property {getPos} orientation
 * @property {Array<Number>} pos
 * @property {Array<String>} instructions
 */

/**
 * Robot instance factory.
 * @param {{ pos: [number, number], orientation: string }} inputObj
 */
function createRobot({ pos: initialPos, orientation: initialOrientation }) {
  let pos = initialPos;
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
    moveTo(x, y) {
      pos = [x, y];
    },
  };
}

module.exports = createRobot;
