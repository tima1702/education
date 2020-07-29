import fullSum from './index';

describe('full-sum', () => {
  test('should be function', () => {
    expect(typeof fullSum).toBe('function');
  });
  describe('should generate error', () => {
    test('fullSum(1, 2, 3, 4, []) => error', () => {
      expect(() => fullSum(1, 2, 3, 4, [])).toThrowError();
    });
    test('fullSum("1") => error', () => {
      expect(() => fullSum('1')).toThrowError();
    });
    test('fullSum(false) => error', () => {
      expect(() => fullSum(false)).toThrowError();
    });
    test('fullSum(1,[], 2) => error', () => {
      expect(() => fullSum(1, [], 2)).toThrowError();
    });
    test('fullSum(undefined) => error', () => {
      expect(() => fullSum(undefined)).toThrowError();
    });
  });
  describe('should correct work', () => {
    test('fullSum(1,2,3) === 6', () => {
      expect(fullSum(1, 2, 3)).toBe(6);
    });
    test('fullSum() === 0', () => {
      expect(fullSum()).toBe(0);
    });
    test('fullSum(-5, 5) === 0', () => {
      expect(fullSum(-5, 5)).toBe(0);
    });
    test('fullSum(1, 1, 1, 1, 1) === 5', () => {
      expect(fullSum(1, 1, 1, 1, 1)).toBe(5);
    });
    test('fullSum(1, 1, 1, NaN, 1) === NaN', () => {
      expect(fullSum(1, 1, 1, NaN, 1)).toBe(NaN);
    });
  });
});
