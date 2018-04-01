const place = document.querySelector(`.main`);

const render = (html) => {
  place.innerHTML = ``;
  place.appendChild(html.cloneNode(true));
};

export default render;
