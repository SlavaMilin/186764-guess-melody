const screens = document.querySelector(`#templates`).content.querySelectorAll(`.main`);
const screenPlace = document.querySelector(`.main`);
const btnLeftCode = 37;
const btnRightCode = 39;

let currentPosition = 0;

const renderScreen = (num) => {
  screenPlace.innerHTML = ``;
  screenPlace.appendChild(screens[num]);
};

const onArrowPush = (evt) => {
  if (evt.keyCode === btnRightCode && evt.altKey) {
    currentPosition = currentPosition < screens.length - 1 ? currentPosition + 1 : 0;
    renderScreen(currentPosition);
  }
  if (evt.keyCode === btnLeftCode && evt.altKey) {
    currentPosition = currentPosition === 0 ? screens.length - 1 : currentPosition - 1;
    renderScreen(currentPosition);
  }
};

renderScreen(currentPosition);

document.addEventListener(`keydown`, onArrowPush);

