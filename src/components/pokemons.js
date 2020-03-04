import "./pokemons.scss";
import { createElement } from "../lib/dom";

export function createSearchResult(items) {
  const container = createElement("div", {
    className: "pokemons"
  });

  items.forEach(item => {
    const element = createElement("div", {
      innerText: item,
      className: "pokemon"
    });
    element.addEventListener("click", () => {
      const favorites = [item];
      localStorage.setItem("favorites", JSON.stringify(favorites));
    });
    container.appendChild(element);
  });
  return container;
}
