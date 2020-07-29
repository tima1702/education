import isOdd from './index';

describe('is-odd', () => {
  test('should be function', () => {
    expect(typeof isOdd).toBe('function');
  });

  describe('should correct work', () => {
    test('isOdd(4) === true', () => {
      expect(isOdd(4)).toBe(true);
    });
    test('isOdd(5) === false', () => {
      expect(isOdd(5)).toBe(false);
    });
    test('isOdd(-1) === false', () => {
      expect(isOdd(-1)).toBe(false);
    });
    test('isOdd(-10) === true', () => {
      expect(isOdd(-10)).toBe(true);
    });
  });
});
