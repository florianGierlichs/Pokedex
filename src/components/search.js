import "./search.scss";
import { createElement } from "../lib/dom";

export function search(storageValue) {
  const element = createElement("input", {
    className: "search",
    placeholder: "search for Pokémon",
    type: "search",
    value: storageValue
  });

  return element;
}
