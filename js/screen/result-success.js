/**
 * Модуль «Экран успешного результата»
 * @module screen/result-success
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

  <h2 class="title">Вы настоящий меломан!</h2>
  <div class="main-stat">За&nbsp;2&nbsp;минуты<br>вы&nbsp;отгадали 4&nbsp;мелодии</div>
  <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;80%&nbsp;игроков</span>
  <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
</section>`, initControls);
