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
      let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

      if (!favorites.includes(item)) {
        favorites.push(item);
      } else {
        const itemIndex = favorites.indexOf(item);
        favorites.splice(itemIndex, 1);
      }

      if (favorites.length > 6) {
        favorites = favorites.slice(1);
      }

      const favoritesJSON = JSON.stringify(favorites);
      localStorage.setItem("favorites", favoritesJSON);
    });
    container.appendChild(element);
  });
  return container;
}
