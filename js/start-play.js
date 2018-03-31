import render from './render.js';
import artist from './template/artist';


const startPlay = (nextScreen) => {
  const btnPlay = document.querySelector(`.main-play`);
  const onBtnPlayClick = (evt) => {
    evt.preventDefault();
    render(artist);
    btnPlay.removeEventListener(`click`, onBtnPlayClick);
    nextScreen();
  };
  btnPlay.addEventListener(`click`, onBtnPlayClick);
};

export default startPlay;
