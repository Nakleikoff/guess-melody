/**
 * Модуль «Экран приветствия»
 * @module screen/welcome
 */

import Screen from './screen';
import screenLevelArtist from './level-artist';

/**
 * Нажать на кнопку началы игры
 */
const onPlayButtonClick = () => {
  screenLevelArtist.show();
};

/**
 * Инициализировать элементы управления экраном
 * @param {Element} screenElement - DOM-элемент экрана
 * @return {Element}
 */
const initControls = (screenElement) => {
  const playButton = screenElement.querySelector(`.main-play`);

  playButton.addEventListener(`click`, onPlayButtonClick);

  return screenElement;
};

export default new Screen(`<section class="main main--welcome">
  <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
  <button class="main-play">Начать игру</button>
  <h2 class="title main-title">Правила игры</h2>
  <p class="text main-text">Правила просты&nbsp;— за&nbsp;2 минуты датьмаксимальное количество правильных ответов.<br> Удачи!</p>
</section>`, initControls);
