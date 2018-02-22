const isObject = value => Object(value) === value;
const isDomNode = object => isObject(object) && object.nodeType > 0;

const render = (element, rootComponent) => {
  if (!isDomNode(element)) {
    throw new Error("First parameter should be a DOM Node");
  }

  return element.appendChild(rootComponent());
};

export default render;
