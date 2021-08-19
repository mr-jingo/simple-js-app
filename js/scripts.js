let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  function add(pokemon) {
    if(typeof pokemon === "object") {
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

  function addListItem(pokemon) {
    let list = document.querySelector(".pokemon-list");
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add("list-button");
    listItem.appendChild(button);
    list.appendChild(listItem);
    buttonEventListener(button, pokemon);
  }

  function showDetails(pokemon) {
    console.log(pokemon);
  }

  function buttonEventListener(button, pokemon) {
    button.addEventListener("click", function(event) {
      showDetails(pokemon);
    });
  }

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.log(e);
    })
  }


  return {
    add: add,
    getAll: getAll,
    filterByName: filterByName,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList
  };
})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
