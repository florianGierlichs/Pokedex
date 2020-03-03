import "./search.scss";
import { createElement } from "../lib/dom";

export function search() {
  const element = createElement("input", {
    className: "search",
    placeholder: "search for Pokémon",
    type: "search"
  });

  return element;
}
