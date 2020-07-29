import Stack from './index';

let stack = null;
describe('stack', () => {
  describe('should exist', () => {
    test('Stack should be defined', () => {
      expect(Stack).toBeDefined();
    });
    test('constructor should exist', () => {
      expect(Stack.prototype.constructor).toBeDefined();
    });
    test('push method should exist', () => {
      expect(Stack.prototype.push).toBeDefined();
    });
    test('pop method should exist', () => {
      expect(Stack.prototype.pop).toBeDefined();
    });
    test('print method should exist', () => {
      expect(Stack.prototype.print).toBeDefined();
    });
    test('isEmpty method should exist', () => {
      expect(Stack.prototype.isEmpty).toBeDefined();
    });
  });
  describe('should init correctly', () => {
    beforeAll(() => {
      stack = new Stack();
    });
    test('should be empty', () => {
      expect(stack.isEmpty()).toBe(true);
    });
    test('should have zero size', () => {
      expect(stack.size).toBe(0);
    });
  });
  describe('should push work', () => {
    beforeAll(() => {
      stack = new Stack();
    });
    test('should increment size after push', () => {
      let size = stack.size;
      stack.push(1);
      size += 1;
      expect(stack.size).toBe(size);
      stack.push(1);
      stack.push(1);
      size += 2;
      expect(stack.size).toBe(size);
    });
    test('should add to end of list', () => {
      const lastEl = 454;
      stack.push(lastEl);
      const re = new RegExp(`${lastEl}\]$`);
      expect(re.test(stack.print())).toBe(true);
    });
  });
  describe('should pop work correctly', () => {
    beforeEach(() => {
      stack = new Stack();
      stack.push(1);
      stack.push(2);
    });
    test('should decrement size after pop', () => {
      let size = stack.size;
      stack.pop();
      size -= 1;
      expect(stack.size).toBe(size);
    });
    test('should isEmpty work', () => {
      stack.pop();
      stack.pop();
      expect(stack.isEmpty()).toBe(true);
    });
    test('should throw error after pop in empty stack', () => {
      stack.pop();
      stack.pop();
      expect(() => stack.pop()).toThrowError();
    });
    test('should remove last el', () => {
      stack.pop();
      const re = new RegExp('1\]$');
      expect(re.test(stack.print())).toBe(true);
    });
  });
  describe('should call chain work', () => {
    beforeEach(() => {
      stack = new Stack();
    });
    test('should exist stack.push(1).push', () => {
      expect(stack.push(1).push).toBeDefined();
    });
    test('should exist stack.push(1).pop', () => {
      expect(stack.push(1).pop).toBeDefined();
    });
    test('should exist stack.push(1).pop().push', () => {
      expect(stack.push(1).pop().push).toBeDefined();
    });
    test('should exist stack.push(1).pop().pop', () => {
      expect(stack.push(1).pop().pop).toBeDefined();
    });
  });
  describe('should print work', () => {
    beforeEach(() => {
      stack = new Stack();
    });
    test('(empty stack) stack.print() === "[]"', () => {
      expect(stack.print()).toBe('[]');
    });
    test('(empty stack) stack.push(1).push(2).push(3).print() === "[1, 2, 3]"', () => {
      expect(stack.push(1).push(2).push(3).print()).toBe('[1, 2, 3]');
    });
    test('(empty stack) stack.push(1).push(2).pop().print() === "[1, 2]"', () => {
      expect(stack.push(1).pop().push(2).push(3).print()).toBe('[2, 3]');
    });
  });
});

