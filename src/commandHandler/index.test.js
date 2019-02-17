const {
  NORTH,
  SOUTH,
  EAST,
  WEST,
} = require('./../consts/orientations');
const {
  LEFT,
  RIGHT,
} = require('./../consts/directions');
const commandHandler = require('./index');

describe('handles command', () => {
  describe('move forward', () => {
    test('facing north', () => {
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

    test('facing south', () => {
      const robotInst = {
        moveTo: jest.fn(),
        getOrientation() {
          return SOUTH;
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
      // The y position should de-increment by one.
      expect(calls[0][1]).toBe(3);
    });

    test('facing east', () => {
      const robotInst = {
        moveTo: jest.fn(),
        getOrientation() {
          return EAST;
        },
        getPos() {
          return [3, 4];
        },
      };

      commandHandler('F', robotInst).execute();

      const { calls } = robotInst.moveTo.mock;
      expect(calls.length).toBe(1);
      // The x position should increment by one.
      expect(calls[0][0]).toBe(4);
      // The y position should remain the same.
      expect(calls[0][1]).toBe(4);
    });

    test('facing west', () => {
      const robotInst = {
        moveTo: jest.fn(),
        getOrientation() {
          return WEST;
        },
        getPos() {
          return [3, 4];
        },
      };

      commandHandler('F', robotInst).execute();

      const { calls } = robotInst.moveTo.mock;
      expect(calls.length).toBe(1);
      // The x position should de-increment by one.
      expect(calls[0][0]).toBe(2);
      // The y position should remain the same.
      expect(calls[0][1]).toBe(4);
    });
  });

  describe('rotate', () => {
    test('left from east', () => {
      const robotInst = {
        setOrientation: jest.fn(),
        getOrientation() {
          return EAST;
        },
      };

      commandHandler(LEFT, robotInst).execute();

      const { calls } = robotInst.setOrientation.mock;
      expect(calls.length).toBe(1);
      expect(calls[0][0]).toBe(NORTH);
    });
    test('right from east', () => {
      const robotInst = {
        setOrientation: jest.fn(),
        getOrientation() {
          return EAST;
        },
      };

      commandHandler(RIGHT, robotInst).execute();

      const { calls } = robotInst.setOrientation.mock;
      expect(calls.length).toBe(1);
      expect(calls[0][0]).toBe(SOUTH);
    });
  });
});
