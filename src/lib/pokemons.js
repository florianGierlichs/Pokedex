const allPokemons = [
  "Pikachu",
  "Pichu",
  "Marwinchu",
  "Juliachu",
  "Johannachu",
  "Sehrlangername",
  "nochlängerersehrlangername"
];

export const filterPokemons = searchValue => {
  const lowerCaseSearchValue = searchValue.toLowerCase();

  const filteredPokemons = allPokemons.filter(pokemon => {
    return pokemon.toLowerCase().includes(lowerCaseSearchValue);
  });
  return filteredPokemons;
};
