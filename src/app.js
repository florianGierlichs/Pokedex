import "./app.scss";
import { createElement } from "./lib/dom";
import { title } from "./components/title";
import { appendContent } from "./lib/dom";
import { search } from "./components/search";
import { createPokemons } from "./components/pokemons";

const allPokemons = [
  "Pikachu",
  "Pichu",
  "Marwinchu",
  "Juliachu",
  "Johannachu",
  "Sehrlangername",
  "nochlängerersehrlangername"
];

const filterPokemons = searchValue => {
  const lowerCaseSearchValue = searchValue.toLowerCase();

  const filteredPokemons = allPokemons.filter(pokemon => {
    return pokemon.toLowerCase().includes(lowerCaseSearchValue);
  });
  return filteredPokemons;
};

export function app() {
  const header = createElement("header", {
    className: "header"
  });
  const main = createElement("main", {
    className: "main"
  });
  const brand = title("Pokédex");
  const searchBar = search(sessionStorage.getItem("searchValue"));

  let pokemons = null;
  const setSearchResults = () => {
    const filteredPokemons = filterPokemons(searchBar.value);
    pokemons = createPokemons(filteredPokemons);
    appendContent(main, pokemons);
  };

  setSearchResults();

  appendContent(header, brand);
  appendContent(main, [searchBar, pokemons]);

  searchBar.addEventListener("input", event => {
    main.removeChild(pokemons);
    setSearchResults();

    const searchValue = event.target.value;

    sessionStorage.setItem("searchValue", searchValue);
  });

  return [header, main];
}
