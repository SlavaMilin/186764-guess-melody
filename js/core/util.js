const place = document.querySelector(`.main`);

const render = (html) => {
  place.innerHTML = ``;
  place.appendChild(html);
};

const createDomElement = (html = ``) => {
  const template = document.createElement(`template`);
  template.innerHTML = html.trim();
  return template.content;
};

const insertVidget = (html) => {
  place.insertAdjacentHTML(`afterbegin`, html);
};

const calculateMin = (time) => {
  const result = Math.floor(time) / 60;
  return result < 10 ? `0` + result : result;
};

const calculateSec = (time) => {
  const result = Math.floor(time) % 60;
  return result < 10 ? `0` + result : result;
};

export {render, createDomElement, insertVidget, calculateMin, calculateSec};
