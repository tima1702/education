import isValidEmail from './index';

describe('check-email', () => {
  test('should exist', () => {
    expect(typeof isValidEmail).toBe('function');
  });
  describe('should work correct', () => {
    test('isValidEmail("tima1702@gmail.com") === true', () => {
      expect(isValidEmail('tima1702@gmail.com')).toBe(true);
    });
    test('isValidEmail("tima_1702@gmail.com") === true', () => {
      expect(isValidEmail('tima_1702@gmail.com')).toBe(true);
    });
    test('isValidEmail("exceed.tima_1702@gmail.com") === true', () => {
      expect(isValidEmail('exceed.tima_1702@gmail.com')).toBe(true);
    });
    test('isValidEmail("exceed.tima_1702@gmail") === false', () => {
      expect(isValidEmail('exceed.tima_1702@gmail')).toBe(false);
    });
    test('isValidEmail("tima1702gmail.com") === false', () => {
      expect(isValidEmail('tima1702gmail.com')).toBe(false);
    });
  });
});
