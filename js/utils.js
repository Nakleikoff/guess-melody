(() => {

  /**
   * Объект со вспомогательными утилитами
   * @type {Utils}
   */
  window.utils = {
    /**
     * Код клавишы стрелочки влево
     * @constant {number}
     */
    ARROW_LEFT_CODE: 37,

    /**
     * Код клавишы стрелочки вправо
     * @constant {number}
     */
    ARROW_RIGHT_CODE: 39,

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
      return evt.keyCode === this.ARROW_LEFT_CODE;
    },

    /**
     * Нажата правая стрелка
     * @param {KeyboardEvent} evt - событие
     * @return {boolean}
     */
    isRightArrowPressed(evt) {
      return evt.keyCode === this.ARROW_RIGHT_CODE;
    },
  };
})();
