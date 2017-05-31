/**
 * Модуль «Экран выбор жанра»
 * @module screen/level-genre
 */

import random from '../utils/random';
import Screen from './screen';

import screenResultSuccess from './result-success';
import screenResultFailure from './result-failure';

/**
 * Отправить форму выбора жанра
 * @param {Event} evt - событие
 */
const onGenreFormSubmit = (evt) => {
  evt.preventDefault();
  random([screenResultSuccess, screenResultFailure]).show();
};

/**
 * Проверить выбор ответа
 * @param {Element} form - форма выбора жанра
 * @param {Element} button - кнопка отправки ответа
 */
const checkSelected = (form, button) => {
  const checked = form.querySelectorAll(`[name=answer]:checked`);
  if (checked.length) {
    button.removeAttribute(`disabled`);
  } else {
    button.setAttribute(`disabled`, ``);
  }
};

/**
 * Инициализировать элементы управления экраном
 * @param {Element} screen - DOM-элемент экрана
 * @return {Element}
 */
const initControls = (screen) => {

  const genreForm = screen.querySelector(`.genre`);
  const sendButton = genreForm.querySelector(`.genre-answer-send`);

  genreForm.addEventListener(`change`, () => {
    checkSelected(genreForm, sendButton);
  });

  genreForm.addEventListener(`submit`, onGenreFormSubmit);

  checkSelected(genreForm, sendButton);

  return screen;
};

export default new Screen(`<section class="main main--level main--level-genre">
  <h2 class="title">Выберите инди-рок треки</h2>
  <form class="genre">
    <div class="genre-answer">
      <div class="player-wrapper"></div>
      <input type="checkbox" name="answer" value="answer-1" id="a-1">
      <label class="genre-answer-check" for="a-1"></label>
    </div>

    <div class="genre-answer">
      <div class="player-wrapper"></div>
      <input type="checkbox" name="answer" value="answer-1" id="a-2">
      <label class="genre-answer-check" for="a-2"></label>
    </div>

    <div class="genre-answer">
      <div class="player-wrapper"></div>
      <input type="checkbox" name="answer" value="answer-1" id="a-3">
      <label class="genre-answer-check" for="a-3"></label>
    </div>

    <div class="genre-answer">
      <div class="player-wrapper"></div>
      <input type="checkbox" name="answer" value="answer-1" id="a-4">
      <label class="genre-answer-check" for="a-4"></label>
    </div>

    <button class="genre-answer-send" type="submit">Ответить</button>
  </form>
</section>`, initControls);
