const commandHandler = require('./../commandHandler');

function createLevel({ width, height }) {
  const robots = [];

  function runInstruction(robotInst, instruction) {
    const command = commandHandler(instruction, robotInst);
    command.execute();
  }

  function addRobot(robotInst, instructions) {
    robots.push(robotInst);
    instructions.some(inst => runInstruction(robotInst, inst));
  }

  function getRobots() {
    return robots;
  }

  return {
    addRobot,
    getRobots,
    runInstruction,
  };
}

module.exports = createLevel;
