const commandHandler = require('./../commandHandler');

function createLevel({ width, height }) {
  const robots = [];

  function withinBounds([x, y]) {
    if (x < 0 || y < 0 || x > width || y > height) return false;
    return true;
  }

  function runInstruction(robotInst, instruction) {
    const command = commandHandler(instruction, robotInst);
    command.execute();

    const newPosition = robotInst.getPos();

    // We are okay, continue
    if (withinBounds(newPosition)) {
      return false;
    }

    return true;
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
