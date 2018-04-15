const place = document.querySelector(`.main`);

const render = (html) => {
  place.innerHTML = ``;
  place.appendChild(html.cloneNode(true));
};


const createDomElement = (html) => {
  const template = document.createElement(`template`);
  html = html.trim();
  template.innerHTML = html;
  return template.content;
};

export {render, createDomElement};
