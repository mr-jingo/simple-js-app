let pokemonRepository = (function () {
  let pokemonList = [
    {name: "Pikachu", height: 2, type: ["Elektro", "Battle"]},
    {name: "Bisasam", height: 10, type: ["Plant", "Water"]},
    {name: "Pummeluf", height: 8, type: ["Psycho", "Grass"]}
  ];

  function add(pokemon) {
    let newKeys = Object.keys(pokemon).join();
    if(newKeys === "name,height,type") {
      pokemonList.push(pokemon);
    } else {
      alert("Please enter valid Data");
    }
  }

  function getAll() {
    return pokemonList;
  }

  function filterByName(searchedName) {
    return pokemonList.filter(item => item.name === searchedName);
  }

  return {
    add: add,
    getAll: getAll,
    filterByName: filterByName
  };
})();

let list = document.querySelector(".pokemon-list");
pokemonRepository.getAll().forEach(function(pokemon) {
  let listItem = document.createElement('li');
  let button = document.createElement('button');
  button.innerText = pokemon.name;
})

//console.log(pokemonRepository.add({name: "Glurak", height: 15, type: ["Fire", "Dragon"]}));
//console.log(pokemonRepository.getAll());
