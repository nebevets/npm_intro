export function addToDom(message){
  const root = document.getElementById('root');
  const h1 = document.createElement('div');
  h1.innerText = message;
  root.appendChild(h1);
};

export const makeElement = (type, text) => {
  const root = document.getElementById('root');
  const element = document.createElement(type);
  element.innerText = text;
  root.appendChild(element);
};

export default {
  addToDom: addToDom,
  makeElement: makeElement,
}