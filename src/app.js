import "./app.scss";
import { createElement } from "./lib/dom";
import { title } from "./components/title";
import { appendContent } from "./lib/dom";
import { search } from "./components/search";
import { pokemons } from "./components/pokemons";

const allPokemons = [
  "Pikachu",
  "Pichu",
  "Marwinchu",
  "Juliachu",
  "Johannachu",
  "Sehrlangername",
  "nochlängerersehrlangername"
];

export function app() {
  const header = createElement("header", {
    className: "header"
  });
  const main = createElement("main", {
    className: "main"
  });
  const brand = title("Pokédex");
  const searchBar = search();

  appendContent(header, brand);
  main.appendChild(searchBar);

  const searchResults = createElement("div", {});
  main.appendChild(searchResults);

  searchBar.addEventListener("input", event => {
    searchResults.innerHTML = "";

    const searchValue = event.target.value.toLowerCase();

    const filteredPokemons = allPokemons.filter(pokemon => {
      return pokemon.toLowerCase().startsWith(searchValue);
    });

    const pokemonsElement = pokemons(filteredPokemons);
    searchResults.appendChild(pokemonsElement);
  });

  return [header, main];
}
