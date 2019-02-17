function createLevel({ width, height }) {
  const robots = [];

  function addRobot(robotInst, instructions) {
    robots.push(robotInst);
  }

  function getRobots() {
    return robots;
  }

  return {
    addRobot,
    getRobots,
  };
}

module.exports = createLevel;
