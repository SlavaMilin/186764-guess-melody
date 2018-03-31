import render from './render';
import genre from './template/genre';
import showResult from './show-result';


const selectAnswer = () => {
  const answer = document.querySelectorAll(`.main-answer`);
  answer.forEach((item) => {
    item.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      render(genre);
      showResult();
    });
  });
};

export default selectAnswer;
