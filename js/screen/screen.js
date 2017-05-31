/**
 * Модуль «Экран приложения»
 * @module screen/index
 */

import makeElement from '../utils/make-element';
import game from '../game';

/**
 * Представляет экран игры
 * @class
 */
class Screen {
  /**
   * Конструктор экрана
   * @constructor
   * @param {string} template - разметка экрана
   * @param {string} initControls - функция инициализации элементов управления
   */
  constructor(template, initControls) {
    this.template = makeElement(template);
    this.initControls = initControls;
  }
  /**
   * Показать экран
   */
  show() {
    const screen = this.template.cloneNode(true);
    game.showScreen(typeof this.initControls === `function` ? this.initControls(screen) : screen);
  }
}

export default Screen;
