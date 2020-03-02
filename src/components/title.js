import { createElement } from "../lib/dom";
import "./title.scss";

export function title(text) {
  const element = createElement("h1", {
    innerText: text,
    className: "title"
  });

  return element;
}
