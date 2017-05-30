/**
 * Модуль создания элементов
 * @module utils/make-element
 */

/**
 * Создаёт DOM-элемент из HTML-кода
 * @param {string} html - строка с HTML-разметкой
 * @return {Element}
 */
export default (html) => {
  const template = document.createElement(`template`);
  template.innerHTML = html;
  return template.content;
};
