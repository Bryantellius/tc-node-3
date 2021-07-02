export function DOMCreate(tag, parentId, text) {
  let ele = document.createElement(tag);
  ele.textContent = text;
  document.getElementById(parentId).appendChild(ele);
  return ele;
}

export function DOMStyle(tag, styles) {
  tag.style = styles;
  return tag;
}
