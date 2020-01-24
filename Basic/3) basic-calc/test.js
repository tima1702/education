import basicCalc from './index';

describe('basic-calc', () => {
  test('should be function', () => {
    expect(typeof basicCalc).toBe('function');
  });
  test('should use switch', () => {
    expect(basicCalc.toString().includes('switch')).toBe(true);
  });
  describe('should work correct', () => {
    test('5 + 5 = 10', () => {
      expect(basicCalc('+', 5, 5)).toBe(10);
    });
    test('5 - 5 = 0', () => {
      expect(basicCalc('-', 5, 5)).toBe(0);
    });
    test('5 * 5 = 25', () => {
      expect(basicCalc('*', 5, 5)).toBe(25);
    });
    test('5 / 5 = 1', () => {
      expect(basicCalc('/', 5, 5)).toBe(1);
    });
  });
});
