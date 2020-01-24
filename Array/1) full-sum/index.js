/*
  Задача
  Написать функцию суммирования, которая будет суммировать все аргументы и возвращять результат
  Если хотя бы один из арументов не является числом, сгенерировать ошибку c сообщением: "Wrong Argument Type"
  Если аргументов не будет, пусть вернется 0
 */

export default function fullSum(...args) {
  // код сюда
  if (args.some(n => typeof n !== 'number')) throw new Error('Wrong Argument Type');

  return args.reduce((p, c) => (p + c), 0);
}

