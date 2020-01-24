import sumCheck from './index';

describe('sum-check', () => {
  test('should be function', () => {
    expect(typeof sumCheck).toBe('function')
  });
  describe('should throw error', () => {
    test('sumCheck(null, 1) => error', () => {
      expect(() => sumCheck(null, 1)).toThrowError('Wrong arguments type!')
    });
    test('sumCheck("1", 1) => error', () => {
      expect(() => sumCheck('1', 1)).toThrowError('Wrong arguments type!')
    });
    test('sumCheck(false, 1) => error', () => {
      expect(() => sumCheck(false, 1)).toThrowError('Wrong arguments type!')
    });
    test('sumCheck(2, []) => error', () => {
      expect(() => sumCheck(2, [])).toThrowError('Wrong arguments type!')
    });
    test('sumCheck(2, {}) => error', () => {
      expect(() => sumCheck(2, {})).toThrowError('Wrong arguments type!')
    });
  });
  describe('should work correct', () => {
    test('sumCheck(5, 1) === 6', () => {
      expect(sumCheck(5, 1)).toBe(6);
    });
    test('sumCheck(10, 20) === 30', () => {
      expect(sumCheck(10, 20)).toBe(30);
    });
    test('sumCheck(0, 0) === 0', () => {
      expect(sumCheck(0, 0)).toBe(0);
    });
    test('sumCheck(NaN, 32) === NaN', () => {
      expect(sumCheck(NaN, 32)).toBeNaN();
    });
  })
});
