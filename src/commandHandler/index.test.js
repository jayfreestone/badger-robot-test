const { NORTH } = require('./../consts/orientations');
const commandHandler = require('./index');

describe('handles command', () => {
  test('move forward', () => {
    const robotInst = {
      moveTo: jest.fn(),
      getOrientation() {
        return NORTH;
      },
      getPos() {
        return [3, 4];
      },
    };

    commandHandler('F', robotInst).execute();

    const { calls } = robotInst.moveTo.mock;
    expect(calls.length).toBe(1);
    // The x position should remain the same.
    expect(calls[0][0]).toBe(3);
    // The y position should increment by one.
    expect(calls[0][1]).toBe(5);
  });
});
