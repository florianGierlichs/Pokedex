async function getPokemons() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
  const results = await response.json();
  const pokemons = results.results;
  const pokemonNames = pokemons.map(pokemon => {
    return pokemon.name;
  });
  return pokemonNames;
}

export const filterPokemons = async searchValue => {
  const lowerCaseSearchValue = searchValue.toLowerCase();
  const allPokemons = await getPokemons();
  const filteredPokemons = allPokemons.filter(pokemon => {
    return pokemon.toLowerCase().includes(lowerCaseSearchValue);
  });
  return filteredPokemons;
};
