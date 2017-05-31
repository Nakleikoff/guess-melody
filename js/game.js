/**
 * Модуль «Игра»
 * @module game
 */

import welcomeScreen from './screen/welcome';
import copyright from './utils/copyright';


/**
 * Представляет игру
 * @class
 */
class Game {
  /**
   * Конструктор игры
   * @constructor
   */
  constructor() {
    this.appElement = document.querySelector(`.app`);
  }

  /**
   * Начать игру
   */
  start() {
    welcomeScreen.show();
  }

  /**
   * Показать экран
   * @param {Element} screen - DOM-элемент экрана
   */
  showScreen(screen) {
    this.appElement.innerHTML = ``;
    this.appElement.appendChild(screen);
    this.appElement.appendChild(copyright.cloneNode(true));
  }
}

export default new Game();
