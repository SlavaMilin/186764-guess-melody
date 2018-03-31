const render = (html) => {
  const place = document.querySelector(`.main`);
  place.innerHTML = ``;
  place.appendChild(html);
};
export default render;
