import baseExpect from './index';

describe('base-expect', () => {
  describe('should exist', () => {
    test('baseExpect should exist', () => {
      expect(baseExpect).toBeDefined();
    });
    test('baseExpect should be function', () => {
      expect(typeof baseExpect).toBe('function');
    });
    test('baseExpect().not should exist', () => {
      expect(baseExpect().toBe.not).toBeDefined();
    });
    test('baseExpect().toBe.not should be function', () => {
      expect(typeof baseExpect().toBe.not).toBe('function');
    });
  });
  describe('should work correct', () => {
    test('baseExpect(4).toBe(4) === true', () => {
      expect(baseExpect(4).toBe(4)).toBe(true);
    });
    test('baseExpect(4).toBe(5) === false', () => {
      expect(baseExpect(4).toBe(5)).toBe(false);
    });
    test('baseExpect(4).toBe.not(5) === true', () => {
      expect(baseExpect(4).toBe.not(5)).toBe(true);
    });
    test('baseExpect(4).toBe.not(4) === false', () => {
      expect(baseExpect(4).toBe.not(4)).toBe(false);
    });
  });
});
