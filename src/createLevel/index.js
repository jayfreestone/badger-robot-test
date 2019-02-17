const commandHandler = require('./../commandHandler');

function createLevel({ width, height }) {
  const scents = new Set([]);
  const robots = [];

  function withinBounds([x, y]) {
    if (x < 0 || y < 0 || x > width || y > height) return false;
    return true;
  }

  function addScent(pos) {
    scents.add(pos);
  }

  function runInstruction(robotInst, instruction) {
    const startingPosition = robotInst.getPos();
    const command = commandHandler(instruction, robotInst);

    command.execute();

    const newPosition = robotInst.getPos();

    // Early exit if we're within bounds
    if (withinBounds(newPosition)) {
      return false;
    }

    // We are outside of bounds, so undo the last command
    command.undo();

    // If a scent was left from a previous actor, continue
    if (scents.has(startingPosition)) {
      return false;
    }

    // Otherwise add a scent and exit
    addScent(startingPosition);

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
