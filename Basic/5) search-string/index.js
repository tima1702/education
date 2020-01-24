/*
  Задача
  Написать функцию которая преобразует объект в строку (query string, search string)
  Поля значения которых: null, undefined, ''
  Пример
  searchString({}) === ''
  searchString({ test: 'test' }) === '?test=test'
  searchString({ a: 123, b: 'qwe', c: false, d: 0 }) === '?a=123&b=qwe&c=false&d=0'
  searchString({ a: 123, b: 'qwe', c: null, d: undefined }) === '?a=123&b=qwe'
  searchString({ a: 123, b: 'qwe', d: '' }) === '?a=123&b=qwe'
  Примечание
  Не будет вложеных объектов и массивов и будет аргумент обязательно будет объектом
  Прочитать про параметры GET запроса
  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/for...in
 */

function searchString(obj) {
  // код сюда
}

export default searchString;
