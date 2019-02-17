const parseInput = require('./../utils/parseInput');
const createLevel = require('./../createLevel');

function simulation(input) {
  const { grid: { width, height }, robots } = parseInput(input);

  const levelInst = createLevel({ width, height });
}

module.exports = simulation;
