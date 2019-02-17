const { LEFT, RIGHT } = require('./../consts/directions');
const calculateOrientation = require('./../utils/calculateOrientation');
const calculateForwardPosition = require('./../utils/calculateForwardPosition');

function createRotateCommand({ dir }, actor) {
  return {
    execute() {
      actor.setOrientation(
        calculateOrientation(actor.getOrientation(), dir),
      );
    },
  };
}

function createMoveCommand(newPos, actor) {
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

function createMoveForwardCommand(actor) {
  return createMoveCommand(
    calculateForwardPosition(
      actor.getPos(),
      actor.getOrientation(),
    ),
    actor,
  );
}

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
