(() => {

  /**
   * Код клавишы стрелочки влево
   * @constant {number}
   */
  const ARROW_LEFT_CODE = 37;

  /**
   * Код клавишы стрелочки вправо
   * @constant {number}
   */
  const ARROW_RIGHT_CODE = 39;

  /**
   * Объект со вспомогательными утилитами
   * @type {Utils}
   */
  window.utils = {
    /**
     * Нажат Alt
     * @param {KeyboardEvent} evt - событие
     * @return {boolean}
     */
    isAltPressed(evt) {
      return evt.altKey;
    },

    /**
     * Нажата левая стрелка
     * @param {KeyboardEvent} evt - событие
     * @return {boolean}
     */
    isLeftArrowPressed(evt) {
      return evt.keyCode === ARROW_LEFT_CODE;
    },

    /**
     * Нажата правая стрелка
     * @param {KeyboardEvent} evt - событие
     * @return {boolean}
     */
    isRightArrowPressed(evt) {
      return evt.keyCode === ARROW_RIGHT_CODE;
    },
  };
})();
