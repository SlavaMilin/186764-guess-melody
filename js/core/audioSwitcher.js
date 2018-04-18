const audioSwitcher = () => {
  const audio = document.querySelectorAll(`audio`);
  const audioControlBtn = document.querySelectorAll(`.player-control`);

  for (let i = 0; i < audioControlBtn.length; i++) {
    audioControlBtn[i].classList.remove(`player-control--pause`);
    audioControlBtn[i].addEventListener(`click`, (evt) => {
      evt.preventDefault();
      for (let j = 0; j < audioControlBtn.length; j++) {
        audioControlBtn[j].classList.remove(`player-control--pause`);
        audio[j].pause();
      }
      if (!evt.target.classList.contains(`player-control--pause`)) {
        evt.target.classList.add(`player-control--pause`);
        audio[evt.target.getAttribute(`data-index`)].play();
      }
    });
  }
};

export {audioSwitcher};
