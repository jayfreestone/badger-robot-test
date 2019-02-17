const createLevel = require('./index');

describe('create a level', () => {
  test('that can add robots', () => {
    const inst = createLevel({ width: 5, height: 5 });
    inst.addRobot({}, ['L', 'R', 'F']);
    expect(inst.getRobots()).toHaveLength(1);
  });
});
