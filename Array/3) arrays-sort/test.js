import arraysSort from './index';

describe('arrays-sort', () => {
  test('should exist', () => {
    expect(typeof arraysSort).toBe('function');
  });
  test('should return new value', () => {
    const arg = [[1]];
    expect(arraysSort(arg)).not.toBe(arg);
  });
  describe('should work correctly', () => {
    test('arraysSort([]) => []', () => {
      expect(arraysSort([])).toEqual([]);
    });
    test('arraysSort([[1], [3], [0]]) => [[0], [1], [3]]', () => {
      expect(arraysSort([[1], [3], [0]])).toEqual([[0], [1], [3]]);
    });
    test('arraysSort([[1,4,5], [3,2,1], [-1,-3,-4]]) => [[-1,-3,4], [3,2,1], [1,4,5]]', () => {
      expect(arraysSort([[1, 4, 5], [3, 2, 1], [-1, -3, -4]])).toEqual([[-1, -3, -4], [3, 2, 1], [1, 4, 5]]);
    });
  });
});
