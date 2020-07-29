import rowZero from './index';

describe('row-zero', () => {
  test('should be function ', () => {
    expect(typeof rowZero).toBe('function');
  });
  describe('should correct work', () => {
    test('rowZero("0001100") === 3', () => {
      expect(rowZero('0001100')).toBe(3);
    });
    test('rowZero("000110000") === 4', () => {
      expect(rowZero('000110000')).toBe(4);
    });
    test('rowZero("") === ', () => {
      expect(rowZero('')).toBe(0);
    });
    test('rowZero("11111") === ', () => {
      expect(rowZero('11111')).toBe(0);
    });
    test('rowZero("01") === 1', () => {
      expect(rowZero('01')).toBe(1);
    });
    test('rowZero("00") === 2', () => {
      expect(rowZero('00')).toBe(2);
    });
  });
});
