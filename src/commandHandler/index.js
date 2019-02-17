const calculateForwardPosition = require('./../utils/calculateForwardPosition');

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
    case 'F':
      return createMoveForwardCommand(actor);
    default:
      throw new Error('Command not recognised');
  }
}

module.exports = commandHandler;
