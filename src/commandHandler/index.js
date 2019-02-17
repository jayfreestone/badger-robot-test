function createMoveForwardCommand(actor) {
  return {
    execute() {
      actor.moveTo();
    },
  };
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
