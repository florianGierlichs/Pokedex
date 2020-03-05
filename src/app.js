import "./app.scss";
import { createElement } from "./lib/dom";
import { title } from "./components/title";
import { appendContent } from "./lib/dom";
import { search } from "./components/search";
import { createSearchResult } from "./components/pokemons";
import { filterPokemons } from "./lib/pokemons";
import { createFavorites } from "./components/favorites";

export function app() {
  const header = createElement("header", {
    className: "header"
  });
  const main = createElement("main", {
    className: "main"
  });
  const brand = title("Pokédex");
  const searchBar = search({
    value: sessionStorage.getItem("searchValue")
  });

  const favorites = createFavorites({
    items: ["pikachu", "raichu"]
  });

  let searchResults = null;
  const setSearchResults = () => {
    const filteredPokemons = filterPokemons(searchBar.value);
    searchResults = createSearchResult(filteredPokemons);
    appendContent(main, searchResults);
  };

  setSearchResults();

  appendContent(header, brand);
  appendContent(main, [searchBar, searchResults]);

  searchBar.addEventListener("input", event => {
    main.removeChild(searchResults);
    setSearchResults();

    const searchValue = event.target.value;

    sessionStorage.setItem("searchValue", searchValue);
  });

  return [header, main, favorites];
}
