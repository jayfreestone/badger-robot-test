const chunk = require('lodash/fp/chunk');

/**
 * @typedef {Object} robotType
 * @property {string} orientation
 * @property {Array<Number>} pos
 * @property {Array<String>} instructions
 */

/**
 * Takes an input string (containing grid size & robots per the spec) and
 * transforms it into an object. Text input like this is incredibly fragile, in
 * the future we would want to ensure a more consistent input type to avoid this.
 * @param {string} input
 * @returns {{ grid: {width: number, height: number}, robots: Array<robotType> }}
 */
function parseInput(input) {
  // Assume first line is the grid definition
  const [gridSize, ...actors] = input
    // If we change to a <textarea /> we have to account for both types of returns.
    .split(/\r|\n/)
    // Remove blank lines since we'll chunk based on pairs
    .filter(x => x.length)
    // Unncessary now but probably wise for future input
    .map(x => x.trim());

  // Pair off sets of lines into robots.
  const robots = chunk(2, actors)
    .map((robot) => {
      const [pos, instructions] = robot;
      const [x, y, orientation] = pos.split(' ');
      return {
        orientation,
        pos: [Number(x), Number(y)],
        instructions: instructions.split(''),
      };
    });

  const [width, height] = gridSize
    .split(' ')
    .map(val => Number(val));

  return {
    grid: { width, height },
    robots,
  };
}

module.exports = parseInput;
