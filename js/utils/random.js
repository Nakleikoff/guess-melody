/**
 * Модуль «Случайный элемент»
 * @module utils/random
 */

/**
 * Выбрать случайный элемент массива
 * @param {Array} items - массив элементов
 * @return {*}
 */
export default (items) => {
  return items[Math.floor(Math.random() * items.length)];
};
