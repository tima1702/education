import isEqualAdvances from './index';

describe('is-equal', () => {
  test('should exist', () => {
    expect(typeof isEqualAdvances).toBe('function');
  });
  describe('should work correctly', () => {
    test('isEqualAdvances({}, {}) === true', () => {
      expect(isEqualAdvances({}, {})).toBe(true);
    });
    test('isEqualAdvances({a: 1}, {a: 1}) === true', () => {
      expect(isEqualAdvances({ a: 1 }, { a: 1 })).toBe(true);
    });
    test('isEqualAdvances({ a: { b: 1 }}, { a: { b: 1 }}) === true', () => {
      expect(isEqualAdvances({ a: { b: 1 } }, { a: { b: 1 } })).toBe(true);
    });
    test('isEqualAdvances({ a: { b: 1 }}, { a: { b: null }}) === false', () => {
      expect(isEqualAdvances({ a: { b: 1 } }, { a: { b: null } })).toBe(false);
    });
    test('isEqualAdvances({ a: null }, { a: null }) === true', () => {
      expect(isEqualAdvances({ a: null }, { a: null })).toBe(true);
    });
    test('isEqualAdvances({ a: undefined }, { a: null }) === false', () => {
      expect(isEqualAdvances({ a: undefined }, { a: null })).toBe(false);
    });
    test('isEqualAdvances({ a: undefined }, { a: 0 }) === false', () => {
      expect(isEqualAdvances({ a: undefined }, { a: 0 })).toBe(false);
    });
    test('isEqualAdvances({ a: undefined }, { b: undefined }) === false', () => {
      expect(isEqualAdvances({ a: undefined }, { b: undefined })).toBe(false);
    });
    test('isEqualAdvances({ a: undefined }, {}) === false', () => {
      expect(isEqualAdvances({ a: undefined }, {})).toBe(false);
    });
    test('isEqualAdvances({ b: 1 }, { a: 1, b: 1 }) === false', () => {
      expect(isEqualAdvances({ b: 1 }, { a: 1, b: 1 })).toBe(false);
    });
    test('isEqualAdvances({ a: undefined }, { a: undefined }) === true', () => {
      expect(isEqualAdvances({ a: undefined }, { a: undefined })).toBe(true);
    });
    test('isEqualAdvances(a, a) === true', () => {
      const a = {};
      expect(isEqualAdvances(a, a)).toBe(true);
    });
    test('isEqualAdvances(null, {}) === false', () => {
      expect(isEqualAdvances(null, {})).toBe(false);
    });
  });
});
