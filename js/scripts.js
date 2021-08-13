let pokemonRepository = (function () {
  let pokemonList = [
    {name: "Pikachu", height: 2, type: ["Elektro", "Battle"]},
    {name: "Bisasam", height: 10, type: ["Plant", "Water"]},
    {name: "Pummeluf", height: 8, type: ["Psycho", "Grass"]}
  ];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  };
})();

pokemonRepository.getAll().forEach(function(pokemon) {
  document.write(pokemon.name + " " + "(height: " + pokemon.height + ", type: " + pokemon.type + ")" + "<br>");
})
