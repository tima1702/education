import sum from './index';

describe('basic-sum', () => {
  test('should be function ', () => {
    expect(typeof sum).toBe('function');
  });

  describe('should correct work', () => {
    test('4 + 4 = 8', () => {
      expect(sum(4, 4)).toBe(8);
    });
    test('4 + 3 = 7', () => {
      expect(sum(4, 3)).toBe(7);
    });
    test('20 + 4 = 24', () => {
      expect(sum(4, 20)).toBe(24);
    });
    test('-1 + -1 = -2', () => {
      expect(sum(-1, -1)).toBe(-2);
    });
  });
});
