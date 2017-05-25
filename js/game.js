(() => {

  const templates = document.querySelector(`#templates`).content;

  /**
   * Представляет игру
   * @constructor
   */
  const Game = function () {

    this.appElement = document.querySelector(`.app`);
    this.currentScreenElement = this.appElement.querySelector(`.main`);
    this.index = 0;

    this.screens = [
      `.main--welcome`,
      `.main--level-genre`,
      `.main--level-artist`,
      `.main--result-failure`,
      `.main--result-success`
    ].map((screen) => templates.querySelector(screen));

    /**
     * Нажать кнопку на клавиатуре
     * @param {KeyboardEvent} evt - событие
     */
    const onDocumentKeyDown = (evt) => {
      if (!window.utils.isAltPressed(evt)) {
        return;
      }
      if (window.utils.isLeftArrowPressed(evt)) {
        this.prevScreen();
      } else if (window.utils.isRightArrowPressed(evt)) {
        this.nextScreen();
      }
    };

    document.addEventListener(`keydown`, onDocumentKeyDown);
  };

  /**
   * Массив с экранами
   * @type {?Array.<Element>}
   */
  Game.prototype.screens = null;

  /**
   * DOM-элемент приложения
   * @type {?Element}
   */
  Game.prototype.appElement = null;

  /**
   * DOM-элемент текущего экрана
   * @type {?Element}
   */
  Game.prototype.currentScreenElement = null;

  /**
   * Начать игру
   */
  Game.prototype.start = function () {
    this.showScreen(this.index);
  };

  /**
   * Переключить на следующий экран
   */
  Game.prototype.nextScreen = function () {
    this.index = this.index === (this.screens.length - 1) ? 0 : ++this.index;
    this.showScreen(this.index);
  };

  /**
   * Переключить на предыдущий экран
   */
  Game.prototype.prevScreen = function () {
    this.index = this.index === 0 ? this.screens.length - 1 : --this.index;
    this.showScreen(this.index);
  };

  /**
   * Показать экран
   * @param {number} screenIndex - индекс экрана
   */
  Game.prototype.showScreen = function (screenIndex) {
    const currentScreen = this.screens[screenIndex];
    this.appElement.replaceChild(currentScreen, this.currentScreenElement);
    this.currentScreenElement = currentScreen;
  };

  window.game = new Game();
})();
