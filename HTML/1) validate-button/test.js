import isValidEmail from '../../Others/3)check-email';

const validEmail = 'example@gmail.com';
const inValidEmail = 'exampleexample.com';

describe('validate-button', () => {
  beforeAll(() => {
    document.body.innerHTML = `
        <input class="input" type="text" id="input">
        <button id="button">Check input</button>
    `;

    import('./index');
  });
  describe('should add add class', () => {
    beforeEach(() => {
      document.querySelector('#input').classList.remove('error');
    });
    test('should add class on invalid email', () => {
      document.querySelector('#input').value = inValidEmail;
      document.querySelector('#button').click();
      expect(document.querySelector('#input').classList.contains('error')).toBe(true);
    });
    test('should not add class on invalid email', () => {
      document.querySelector('#input').value = validEmail;
      document.querySelector('#button').click();
      expect(document.querySelector('#input').classList.contains('error')).toBe(false);
    });
    test('should not clear old class', () => {
      const testClassName = 'awesome-class';
      document.querySelector('#input').classList.add(testClassName);
      document.querySelector('#input').value = inValidEmail;
      document.querySelector('#button').click();
      expect(document.querySelector('#input').classList.contains(testClassName)).toBe(true);
    });
  });
  test('should work keyPress', () => {
    document.querySelector('#input').classList.add('error');
    document.querySelector('#input').dispatchEvent(new Event('keypress'));
    expect(document.querySelector('#input').classList.contains('error')).toBe(false);
  });
  test('should work keyPress', () => {
    document.querySelector('#input').classList.add('error', 'test-class');
    document.querySelector('#input').dispatchEvent( new Event('keypress'));
    expect(document.querySelector('#input').classList.contains('test-class')).toBe(true);
  });
});
