/**
 * Модуль «Экран неудачного результата»
 * @module screen/result-failrue
 */

import Screen from './screen';
import screenLevelArtist from './level-artist';

/**
 * Нажать на кнопку началы игры
 */
const onReplayButtonClick = () => {
  screenLevelArtist.show();
};

/**
 * Инициализировать элементы управления экраном
 * @param {Element} screen - DOM-элемент экрана
 * @return {Element}
 */
const initControls = (screen) => {
  const replayButton = screen.querySelector(`.main-replay`);

  replayButton.addEventListener(`click`, onReplayButtonClick);

  return screen;
};

export default new Screen(`<section class="main main--result">
  <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

  <h2 class="title">Вы проиграли</h2>
  <div class="main-stat">Ничего, вам повезет в следующий раз</div>
  <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
</section>`, initControls);
