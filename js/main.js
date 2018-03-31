import welcome from './template/welcome';
import render from './render';
import startPlay from './start-play';
import selectAnswer from './select-answer';

const renderMain = () => {
  render(welcome);
  startPlay(selectAnswer);
};

renderMain();

export default renderMain;
