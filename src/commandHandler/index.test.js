const commandHandler = require('./index');

describe('handles command', () => {
  test('move forward', () => {
    const robotInst = { moveTo: jest.fn() };
    commandHandler('F', robotInst).execute();
    expect(robotInst.moveTo.mock.calls.length).toBe(1);
  });
});
