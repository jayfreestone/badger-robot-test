const parseInput = require('./../utils/parseInput');
const outputToStr = require('./../utils/outputToStr');
const createLevel = require('./../createLevel');
const createRobot = require('./../createRobot');

function simulation(input) {
  const { grid: { width, height }, robots } = parseInput(input);

  const levelInst = createLevel({ width, height });

  robots.forEach(({ pos, orientation, instructions }) => {
    levelInst.addRobot(
      createRobot({ pos, orientation }),
      instructions,
    );
  });

  const finalPositions = levelInst.getRobots().map(robot => ({
    pos: robot.getPos(),
    lost: robot.getLost(),
    orientation: robot.getOrientation(),
  }));

  return outputToStr(finalPositions);
}

module.exports = simulation;
