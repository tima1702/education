import factorial from './index';

describe('factorial', () => {
  test('should be function', () => {
    expect(typeof factorial).toBe('function');
  });
  describe('should work fine', () => {
    test('1! = 1', () => {
      expect(factorial(1)).toBe(1);
    });
    test('2! = 2', () => {
      expect(factorial(2)).toBe(2);
    });
    test('3! = 6', () => {
      expect(factorial(3)).toBe(6);
    });
    test('4! = 24', () => {
      expect(factorial(4)).toBe(24);
    });
  });
});
