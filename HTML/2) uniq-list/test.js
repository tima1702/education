import initList from './initList';

let select = null;
let addInput = null;
let addButton = null;
let changeInput = null;
let changeButton = null;

describe('uniq-list', () => {
  beforeAll(() => {
    document.body.innerHTML = `
        <select id="select"></select>
        <input class="input" type="text" id="add_input">
        <button id="add_save">Add</button>
        <input class="input" type="text" id="edit_input">
        <button id="edit_save">Edit</button>
    `;
    select = document.querySelector('#select');
    addInput = document.querySelector('#add_input');
    addButton = document.querySelector('#add_save');
    changeInput = document.querySelector('#change_input');
    changeButton = document.querySelector('#change_save');
    import('./index');
  });
  test('should add init values', () => {
    expect(document.querySelectorAll('#select > option').length).toBe(3);
    for (let obj of initList) {
      const option = document.querySelector(`#select > option[value="${obj.value}"]`);
      expect(option).not.toBeNull();
      expect(option.innerHTML).toBe(obj.text);
    }
  });
  describe('check validation on #add_input', () => {
    beforeEach(() => {
      addInput.classList.remove('error');
    });
    test('should add error on empty value', () => {
      addInput.value = '';
      addButton.click();
      expect(addInput.classList.contains('error')).toBe(true);
    });
    test('should add error on spaces value', () => {
      addInput.value = '          ';
      addButton.click();
      expect(addInput.classList.contains('error')).toBe(true);
    });
    test('should not edit exist class on error', () => {
      addInput.value = '';
      addInput.classList.add('test_class');
      addButton.click();
      expect(addInput.classList.contains('test_class')).toBe(true);
    });
    test('should remove error class on keyDown event', () => {
      addInput.classList.add('error');
      addInput.dispatchEvent(new Event('keydown'));
      expect(addInput.classList.contains('error')).toBe(false);
    });
    test('should not remove non error class on keyDown event', () => {
      addInput.classList.add('error', 'test-class');
      addInput.dispatchEvent(new Event('keydown'));
      expect(addInput.classList.contains('test-class')).toBe(true);
    });
    test('should add error class after add repeating element', () => {
      addInput.value = initList[0].text;
      addButton.click();
      expect(addInput.classList.contains('error')).toBe(true);
    });
  });
  describe('should add correct work', () => {
    test('should add at list', () => {
      const testAdd = 'test' + Math.floor(Math.random() * 100);
      addInput.value = testAdd;
      addButton.click();
      const options = select.options;
      expect(options[options.length - 1].innerHTML).toBe(testAdd);
    });
    test('should clear input after add', () => {
      const testAdd = 'test' + Math.floor(Math.random() * 100);
      addInput.value = testAdd;
      addButton.click();
      expect(addInput.value).toBe('');
    });
    test('should remove spaces', () => {
      const testAdd = '        test' + Math.floor(Math.random() * 100) + '          ';
      addInput.value = testAdd;
      addButton.click();
      const options = select.options;
      expect(options[options.length - 1].innerHTML).toBe(testAdd.trim());
    });
    test('should select after add', () => {
      const testAdd = 'test' + Math.floor(Math.random() * 100);
      addInput.value = testAdd;
      addButton.click();
      const options = select.options;
      expect(options[options.selectedIndex].innerHTML).toBe(testAdd);
    });
    test('should not add a repeated text', () => {
      const testAdd = initList[0].text;
      const options = select.options;
      const oldLength = options.length;
      addButton.click();
      addInput.value = testAdd;
      expect(oldLength).toBe(options.length);
    });
  });
  describe('should correct work #change_input', () => {
    beforeEach(() => {
      changeInput.classList.remove('error');
    });
    test('should set value after change', () => {
      const testValue = initList[1];
      select.value = testValue.value;
      select.dispatchEvent(new Event('change'));
      expect(changeInput.value).toBe(testValue.text);
    });
    test('should add error on empty value', () => {
      changeInput.value = '';
      changeButton.click();
      expect(changeInput.classList.contains('error')).toBe(true);
    });
    test('should add error on spaces value', () => {
      changeInput.value = '          ';
      changeButton.click();
      expect(changeInput.classList.contains('error')).toBe(true);
    });
    test('should not edit exist class on error', () => {
      changeInput.value = '';
      changeInput.classList.add('test_class');
      changeButton.click();
      expect(changeInput.classList.contains('test_class')).toBe(true);
    });
    test('should remove error class on keyDown event', () => {
      changeInput.classList.add('error');
      changeInput.dispatchEvent(new Event('keydown'));
      expect(changeInput.classList.contains('error')).toBe(false);
    });
    test('should not remove non error class on keyDown event', () => {
      changeInput.classList.add('error', 'test-class');
      changeInput.dispatchEvent(new Event('keydown'));
      expect(changeInput.classList.contains('test-class')).toBe(true);
    });
    test('should add error class after add repeating element', () => {
      changeInput.value = initList[0].text;
      changeButton.click();
      expect(changeInput.classList.contains('error')).toBe(true);
    });
  });
  describe('should correct work change', () => {
    test('should change item', () => {
      select.value = initList[1].value;
      const changeValue = 'test_change' + Math.floor(Math.random() * 100);
      changeInput.value = changeValue;
      changeButton.click();
      expect(select.options[select.selectedIndex].innerHTML).toBe(changeValue);
    });
    test('should not change incorrect value', () => {
      const oldValue = select.options[select.selectedIndex].innerHTML;
      changeInput = '            ';
      changeButton.click();
      expect(select.options[select.selectedIndex].innerHTML).toBe(oldValue);
    });
    test('should don\'t change selected item', () => {
      const oldSelected = select.selectedIndex;
      const changeValue = 'test_change' + Math.floor(Math.random() * 100);
      changeInput.value = changeValue;
      changeButton.click();
      expect(select.selectedIndex).toBe(oldSelected);
    });
  });
});
