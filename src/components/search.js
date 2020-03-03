import "./search.scss";
import { createElement } from "../lib/dom";

export function search() {
  const element = createElement("input", {
    className: "search",
    placeholder: "search here please",
    type: "search"
  });

  return element;
}
