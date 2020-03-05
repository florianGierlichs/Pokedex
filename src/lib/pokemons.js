import pokemon from 'pokemon'
const allRealPokemons = pokemon.all().slice(0, 150);
const allPokemons = allRealPokemons;

export const filterPokemons = searchValue => {
  const lowerCaseSearchValue = searchValue.toLowerCase();

  const filteredPokemons = allPokemons.filter(pokemon => {
    return pokemon.toLowerCase().includes(lowerCaseSearchValue);
  });
  return filteredPokemons;
};
