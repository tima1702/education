/*
  Задача
  Написать функцию которая будет преоброзывавать queryString в объект
  Для преобразования типов нужно использовать функцию stringToType из 'Basic/6) string-to-type'
  Примечание: данные будут простые (без объектов и массивов)
  Примеры
  queryToObject('') => {}
  queryToObject('?') => {}
  queryToObject('?test=123') => { test: 123 }
  queryToObject('?a=test&test=a') => { a: 'test', test: 'a' }
  queryToObject('?a=true&b=false&c=123&d=0') => { a: true, b: false, c: 123, d: 0 }
 */

import stringToType from '../../Basic/6) string-to-type';

function queryToObject(query) {
  // код сюда
}

export default queryToObject;
