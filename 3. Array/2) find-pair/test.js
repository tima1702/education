import findPair from './index';

describe('find-pair', () => {
  test('should be function', () => {
    expect(typeof findPair).toBe('function');
  });
  describe('should work correct', () => {
    test('findPair([1, 1])', () => {
      expect(findPair([32, 32])).toBe(32);
    });
    test('findPair([1,2,3,4,5,6,7,8,1]) === 1', () => {
      expect(findPair([1, 2, 3, 4, 5, 6, 7, 8, 1])).toBe(1);
    });
    test('findPair([1,2,3,4,5,6,7,8]) === null', () => {
      expect(findPair([1, 2, 3, 4, 5, 6, 7, 8])).toBe(null);
    });
    test('findPair([1,2,3,3,5,6,7]) === 3', () => {
      expect(findPair([1, 2, 3, 3, 5, 6, 7])).toBe(3);
    });
  });
});
