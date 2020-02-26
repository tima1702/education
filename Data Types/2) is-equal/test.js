import isEqual from './index';

describe('is-equal', () => {
  test('should exist', () => {
    expect(typeof isEqual).toBe('function');
  });
  describe('should work correctly', () => {
    test('isEqual({}, {}) === true', () => {
      expect(isEqual({}, {})).toBe(true);
    });
    test('isEqual({a: 1}, {a: 1}) === true', () => {
      expect(isEqual({ a: 1 }, { a: 1 })).toBe(true);
    });
    test('isEqual({ a: { b: 1 }}, { a: { b: 1 }}) === true', () => {
      expect(isEqual({ a: { b: 1 } }, { a: { b: 1 } })).toBe(true);
    });
    test('isEqual({ a: { b: 1 }}, { a: { b: null }}) === false', () => {
      expect(isEqual({ a: { b: 1 } }, { a: { b: null } })).toBe(false);
    });
    test('isEqual({ a: null }, { a: null }) === true', () => {
      expect(isEqual({ a: null }, { a: null })).toBe(true);
    });
    test('isEqual({ a: undefined }, { a: null }) === false', () => {
      expect(isEqual({ a: undefined }, { a: null })).toBe(false);
    });
    test('isEqual({ a: undefined }, { a: 0 }) === false', () => {
      expect(isEqual({ a: undefined }, { a: 0 })).toBe(false);
    });
    test('isEqual({ a: undefined }, { b: undefined }) === false', () => {
      expect(isEqual({ a: undefined }, { b: undefined })).toBe(false);
    });
    test('isEqual({ a: undefined }, {}) === false', () => {
      expect(isEqual({ a: undefined }, {})).toBe(false);
    });
    test('isEqual({ b: 1 }, { a: 1, b: 1 }) === false', () => {
      expect(isEqual({ b: 1 }, { a: 1, b: 1 })).toBe(false);
    });
    test('isEqual({ a: undefined }, { a: undefined }) === true', () => {
      expect(isEqual({ a: undefined }, { a: undefined })).toBe(true);
    });
    test('isEqual(a, a) === true', () => {
      const a = {};
      expect(isEqual(a, a)).toBe(true);
    });
    test('isEqual(null, {}) === false', () => {
      expect(isEqual(null, {})).toBe(false);
    });
  });
});
