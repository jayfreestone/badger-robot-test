/**
 * @typedef {Object} robotData
 * @property {Array<number>} pos
 * @property {boolean} lost
 * @property {string} orientation
 */

/**
 * Converts robot data to the desired output string defined in the spec.
 * @param {Array<robotData>} input An array of robot data objects.
 * @returns {string}
 */
function outputToStr(input) {
  return input
    .map(({ pos: [x, y], lost, orientation }) => (
      `${x} ${y} ${orientation}${lost ? ' LOST' : ''}`
    ))
    .join('\n');
}

module.exports = outputToStr;
