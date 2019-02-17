const parseInput = require('./../utils/parseInput');
const outputToStr = require('./../utils/outputToStr');
const createLevel = require('./../createLevel');
const createRobot = require('./../createRobot');

/**
 * Create a new 'martian robots' simulation.
 * @param {string} input The input string defined within the spec.
 * @returns {string} The processed output string.
 */
function simulation(input) {
  const { grid: { width, height }, robots } = parseInput(input);

  const levelInst = createLevel({ width, height });

  // Add and simulate each robot on the map
  robots.forEach(({ pos, orientation, instructions }) => {
    levelInst.addRobot(
      createRobot({ pos, orientation }),
      instructions,
    );
  });

  // The final robot positions as an array
  const finalPositions = levelInst.getRobots().map(robot => ({
    pos: robot.getPos(),
    lost: robot.getLost(),
    orientation: robot.getOrientation(),
  }));

  return outputToStr(finalPositions);
}

module.exports = simulation;
