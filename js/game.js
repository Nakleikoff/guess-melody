
(() => {

  /**
   * Представляет игру
   * @constructor
   */
  let Game = function () {
    this.app = document.querySelector(`.app`);
    this.current = this.app.querySelector(`.main`);

    const templates = document.querySelector(`#templates`).content;

    [`.main--welcome`, `.main--level-genre`, `.main--level-artist`, `.main--result-failure`, `.main--result-success`].forEach((screen) => {
      this.screens.push(templates.querySelector(screen));
    });

    /**
     * Нажать кнопку на клавиатуре
     * @param {KeyboardEvent} evt - событие
     */
    const onDocumentKeyDown = (evt) => {
      if (!evt.altKey) {
        return;
      }
      if (evt.keyCode === window.utils.ARROW_LEFT_CODE) {
        this.prevScreen();
      } else if (evt.keyCode === window.utils.ARROW_RIGHT_CODE) {
        this.nextScreen();
      }
    };

    document.addEventListener(`keydown`, onDocumentKeyDown);
  };

  Game.prototype = {
    /**
     * DOM-элемент приложения
     * @type {Element|null}
     */
    app: null,

    /**
     * Массив с экранами
     * @type {Array.<Element>}
     */
    screens: [],

    /**
     * Индекс текущего экрана
     * @type {number}
     */
    index: 0,

    /**
     * DOM-элемент текущего экрана
     * @type {Element|null}
     */
    current: null,

    /**
     * Начать игру
     */
    start() {
      this.showScreen(this.index);
    },

    /**
     * Переключить на следующий экран
     */
    nextScreen() {
      this.index++;
      if (this.index === this.screens.length) {
        this.index = 0;
      }
      this.showScreen(this.index);
    },

    /**
     * Переключить на предыдущий экран
     */
    prevScreen() {
      this.index--;
      if (this.index < 0) {
        this.index = this.screens.length - 1;
      }
      this.showScreen(this.index);
    },

    /**
     * Показать экран
     * @param {number} screen - индекс экрана
     */
    showScreen(screen) {
      const current = this.screens[screen];
      this.app.replaceChild(current, this.current);
      this.current = current;
    }
  };

  window.Game = Game;
})();
