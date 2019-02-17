const commandHandler = require('./../commandHandler');

/**
 * Creates a new level instance that keeps track of robots/scents.
 * @param {{ width: number, height: number }} options
 */
function createLevel({ width, height }) {
  // Use a Set here to avoid duplicates
  const scents = new Set([]);
  const robots = [];

  /**
   * Checks if a position is out of the level 'bounds', i.e. if it has gone
   * beyond the width/height.
   * @param {Array<number>} coordinates
   * @returns {boolean}
   */
  function withinBounds([x, y]) {
    if (x < 0 || y < 0 || x > width || y > height) return false;
    return true;
  }

  /**
   * Add a new 'scent' to the set.
   * @param {Array<number>} pos
   */
  function addScent(pos) {
    scents.add(pos);
  }

  /**
   * Runs a single instruction, e.g. 'turn left' on a robot instance.
   * @param {Object} robotInst An robot instance from createRobot
   * @param {string} instruction A single letter instruction, e.g. 'L'
   * @returns {boolean}
   */
  function runInstruction(robotInst, instruction) {
    const startingPosition = robotInst.getPos();

    // Retrieve the command that maps to the instruction
    const command = commandHandler(instruction, robotInst);

    // Run the command on the instance
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

    // Otherwise add a scent and register lost
    addScent(startingPosition);
    robotInst.setLost(true);

    // Exit the loop
    return true;
  }

  /**
   * Registers a new robot and run the corresponding route instructions.
   * @param {Object} robotInst An robot instance from createRobot
   * @param {Array<string>} instructions A set of single-letter instructions
   */
  function addRobot(robotInst, instructions) {
    robots.push(robotInst);
    instructions.some(inst => runInstruction(robotInst, inst));
  }

  /**
   * Retrieve robots currently registered on the level.
   * @returns Array<Object> An array of createRobot instances
   */
  function getRobots() {
    return robots;
  }

  return {
    addRobot,
    getRobots,
  };
}

module.exports = createLevel;
