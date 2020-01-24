import asyncSum from './index';

describe('async-sum', () => {
  test('should exist', () => {
    expect(typeof asyncSum).toBe('function');
  });
  test('should return Promise', () => {
    expect(asyncSum(1, 1) instanceof Promise).toBe(true);
  });
  describe('should correct work', () => {
    it('asyncSum(1, 1) === 2', () => {
      expect.assertions(1);
      return asyncSum(1, 1).then(data => expect(data).toBe(2));
    });
    it('asyncSum(1, -1) === 0', () => {
      expect.assertions(1);
      return asyncSum(1, -1).then(data => expect(data).toBe(0));
    });
    it('asyncSum(NaN, 43) === 0', () => {
      expect.assertions(1);
      return asyncSum(NaN, 43).then(data => expect(data).toBe(NaN));
    });
  });
  describe('should generate error', () => {
    it('asyncSum(1, {}) => error', () => {
      expect.assertions(1);
      return asyncSum(1, {}).catch(e => expect(e).toBeDefined());
    });
    it('asyncSum(1, null) => error', () => {
      expect.assertions(1);
      return asyncSum(1, null).catch(e => expect(e).toBeDefined());
    });
    it('asyncSum(1, "2") => error', () => {
      expect.assertions(1);
      return asyncSum(1, '2').catch(e => expect(e).toBeDefined());
    });
    it('asyncSum(1, undefined) => error', () => {
      expect.assertions(1);
      return asyncSum(1, undefined).catch(e => expect(e).toBeDefined());
    });
    it('asyncSum(1, false) => error', () => {
      expect.assertions(1);
      return asyncSum(1, false).catch(e => expect(e).toBeDefined());
    });
    it('asyncSum(1) => error', () => {
      expect.assertions(1);
      return asyncSum(1).catch(e => expect(e).toBeDefined());
    });
    it('asyncSum() => error', () => {
      expect.assertions(1);
      return asyncSum().catch(e => expect(e).toBeDefined());
    });
  });
});
