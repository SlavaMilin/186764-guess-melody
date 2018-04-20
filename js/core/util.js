const place = document.querySelector(`.main`);

/** input data in DOM
 *
 * @param html {object}
 */

const render = (html) => {
  place.innerHTML = ``;
  place.appendChild(html.cloneNode(true));
};

/** turns from string to HTML elements
 *
 * @param html {string}
 * @returns {object}
 */

const createDomElement = (html) => {
  const template = document.createElement(`template`);
  html = html.trim();
  template.innerHTML = html;
  return template.content;
};

const calculateMin = (time) => {
  const result = Math.floor(time) / 60;
  return result < 10 ? `0` + result : result;
};

const calculateSec = (time) => {
  const result = Math.floor(time) % 60;
  return result < 10 ? `0` + result : result;
};

export {render, createDomElement, calculateMin, calculateSec};
