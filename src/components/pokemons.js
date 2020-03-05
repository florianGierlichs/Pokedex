import "./pokemons.scss";
import { createElement, appendContent } from "../lib/dom";

export function createSearchResult(props) {
  const container = createElement("div", {
    className: "pokemons"
  });

  props.forEach(item => {
    const element = createElement("div", {
      innerText: item,
      className: "pokemon"
    });
    element.addEventListener("click", () => {
      props.onSearchResultClick(item);
    });
    appendContent(container, element);
  });
  return container;
}
