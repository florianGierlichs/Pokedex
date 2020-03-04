import "./search.scss";
import { createElement } from "../lib/dom";

export function search(props) {
  const element = createElement("input", {
    className: "search",
    placeholder: "search for Pokémon",
    type: "search",
    value: props.value
  });

  return element;
}
