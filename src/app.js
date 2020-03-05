import "./app.scss";
import { createElement } from "./lib/dom";
import { title } from "./components/title";
import { appendContent } from "./lib/dom";
import { search } from "./components/search";
import { createSearchResult } from "./components/pokemons";
import { filterPokemons } from "./lib/pokemons";
import { createFavorites } from "./components/favorites";

function refreshLocalStorage(item) {
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
}

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

  const favoritesContainer = createElement("div");
  let favorites = createFavorites({
    items: JSON.parse(localStorage.getItem("favorites")) || []
  });
  appendContent(favoritesContainer, favorites);

  function handleSearchResultClick(item) {
    refreshLocalStorage(item);
    favoritesContainer.removeChild(favorites);
    favorites = createFavorites({
      items: JSON.parse(localStorage.getItem("favorites")) || []
    });
    appendContent(favoritesContainer, favorites);
  }

  let searchResults = null;

  const setSearchResults = () => {
    const filteredPokemons = filterPokemons(searchBar.value);
    searchResults = createSearchResult({
      items: filteredPokemons,
      onSearchResultClick: handleSearchResultClick
    });
  }
  const setSearchResults = async () => {
    const filteredPokemons = await filterPokemons(searchBar.value);
    searchResults = createSearchResult(filteredPokemons);

    appendContent(main, searchResults);
  };

  setSearchResults();

  appendContent(header, brand);
  appendContent(main, [searchBar, searchBar]);

  searchBar.addEventListener("input", event => {
    main.removeChild(searchResults);
    setSearchResults();

    const searchValue = event.target.value;

    sessionStorage.setItem("searchValue", searchValue);
  });

  return [header, main, favoritesContainer];
}
