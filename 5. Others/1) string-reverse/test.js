import './index';

describe('string-reverse', () => {
  test('should ne function', () => {
    expect(typeof 'test'.reverse).toBe('function');
  });
  describe('should work correct', () => {
    test('"bob".reverse() === "bob"', () => {
      expect('bob'.reverse()).toBe('bob');
    });
    test('"test".reverse() === "tset"', () => {
      expect('test'.reverse()).toBe('tset');
    });
    test('"test321".reverse() === "123tset"', () => {
      expect('test321'.reverse()).toBe('123tset');
    });
    test('"t".reverse() === "t"', () => {
      expect('t'.reverse()).toBe('t');
    });
    test('"TiMA".reverse() === "AMiT"', () => {
      expect('TiMA'.reverse()).toBe('AMiT');
    });
    test('"TiMA".reverse() === "AMiT"', () => {
      expect('TiMA'.reverse()).toBe('AMiT');
    });
    test('"".reverse() === ""', () => {
      expect(''.reverse()).toBe('');
    });
  })
});
