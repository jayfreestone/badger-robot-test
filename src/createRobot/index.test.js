const {
  NORTH,
  SOUTH,
} = require('../consts/orientations');
const createRobot = require('./index');

describe('create a robot', () => {
  test('with a position', () => {
    const inst = createRobot({ pos: [3, 4], orientation: NORTH });
    expect(inst.getPos()).toEqual([3, 4]);
  });
  test('with an orientation', () => {
    const inst = createRobot({ pos: [3, 4], orientation: NORTH });
    expect(inst.getOrientation()).toEqual(NORTH);
  });
});
