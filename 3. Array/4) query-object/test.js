import queryToObject from './index';

describe('query-object', () => {
  test('should be function', () => {
    expect(typeof queryToObject).toBe('function');
  });
  describe('should correct work', () => {
    test('queryToObject("") => {}', () => {
      expect(queryToObject('')).toEqual({});
    });
    test('queryToObject("?") => {}', () => {
      expect(queryToObject('?')).toEqual({});
    });
    test('queryToObject(""?test=123"") => { test: 123 }', () => {
      expect(queryToObject('?test=123')).toEqual({ test: 123 });
    });
    test('queryToObject("?a=test&test=a") => { a: "test", test: "a" }', () => {
      expect(queryToObject('?a=test&test=a')).toEqual({ a: 'test', test: 'a' });
    });
    test('queryToObject("?a=true&b=false&c=123&d=0") => { a: true, b: false, c: 123, d: 0 }', () => {
      expect(queryToObject('?a=true&b=false&c=123&d=0')).toEqual({ a: true, b: false, c: 123, d: 0 });
    });
  });
});
