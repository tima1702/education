import stringToType from './index';

describe('string-to-type', () => {
  test('should be function', () => {
    expect(typeof stringToType).toBe('function');
  });
  describe('should correct work', () => {
    test('stringToType("null") => null', () => {
      expect(stringToType('null')).toBeNull();
    });
    test('stringToType("undefined") => undefined', () => {
      expect(stringToType('undefined')).toBeUndefined();
    });
    test('stringToType("true") => true', () => {
      expect(stringToType('true')).toBe(true);
    });
    test('stringToType("false") => false', () => {
      expect(stringToType('false')).toBe(false);
    });
    test('stringToType("100") => 100', () => {
      expect(stringToType('100')).toBe(100);
    });
    test('stringToType("100ab0") => "100ab0"', () => {
      expect(stringToType('100ab0')).toBe('100ab0');
    });
    test('stringToType("") => ""', () => {
      expect(stringToType('')).toBe('');
    });
    test('stringToType("0") => 0', () => {
      expect(stringToType('0')).toBe(0);
    });
  });
});
