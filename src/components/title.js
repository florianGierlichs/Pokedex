import { createElement } from "../lib/dom";
import "./title.scss";
import logo from "../assets/pokeball.svg";

export function title(text) {
  const image = createElement("img", {
    className: "logo",
    src: logo
  });

  const element = createElement("h1", {
    innerText: text,
    className: "title"
  });

  return [element, image];
}
