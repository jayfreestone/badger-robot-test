const { LEFT, RIGHT } = require('./../consts/directions');
const calculateOrientation = require('./../utils/calculateOrientation');
const calculateForwardPosition = require('./../utils/calculateForwardPosition');

/**
 * @typedef {Object} actorType
 * @property {Function} setOrientation
 * @property {Function} getOrientation
 * @property {Function} getPos
 * @property {Function} moveTo
 */

/**
 * @typedef {Object} commandType
 * @property {Function} execute
 * @property {Function} undo
 */

/**
 * Creates a new rotation command to turn an actor in place.
 * @param {{ dir: string }} options Contains the target direction, e.g. 'left'
 * @param {actorType} actor
 * @returns {commandType}
 */
function createRotateCommand({ dir }, actor) {
  const oldOrientation = actor.getOrientation();
  return {
    execute() {
      actor.setOrientation(
        calculateOrientation(actor.getOrientation(), dir),
      );
    },
    undo() {
      actor.setOrientation(oldOrientation);
    },
  };
}

/**
 * Create a new move command that updates the x/y of an actor.
 * @param {{ pos: Array<number> }} newPos The new target position.
 * @param {actorType} actor
 * @returns {commandType}
 */
function createMoveCommand({ pos: newPos }, actor) {
  const oldPos = actor.getPos();
  return {
    execute() {
      actor.moveTo(...newPos);
    },
    undo() {
      actor.moveTo(...oldPos);
    },
  };
}

/**
 * Creates a 'move forward' command that advances an actor forward based on
 * their current orientation.
 * @param {actorType} actor
 * @returns {commandType}
 */
function createMoveForwardCommand(actor) {
  // Just returns a generic move command with values pre-calculated
  return createMoveCommand(
    {
      pos: calculateForwardPosition(
        actor.getPos(),
        actor.getOrientation(),
      ),
    },
    actor,
  );
}

/**
 * Takes a command string, e.g. 'F' and translates it into a command object
 * in the style of the command pattern.
 * @param {string} commandStr
 * @param {actorType} actor
 */
function commandHandler(commandStr, actor) {
  switch (commandStr) {
    case LEFT:
      return createRotateCommand({ dir: LEFT }, actor);
    case RIGHT:
      return createRotateCommand({ dir: RIGHT }, actor);
    case 'F':
      return createMoveForwardCommand(actor);
    default:
      throw new Error('Command not recognised');
  }
}

module.exports = commandHandler;
