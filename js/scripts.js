let pokemonList = [
  {name: "Pikachu", height: 2, type: ["Elektro", "Battle"]},
  {name: "Bisasam", height: 10, type: ["Plant", "Water"]},
  {name: "Pummeluf", height: 8, type: ["Psycho", "Grass"]}
];

for(i = 0; i < pokemonList.length; i++) {
  if(pokemonList[i].height > 8) {
    document.write(pokemonList[i].name + " " + "(height: " + pokemonList[i].height + ", 'WOW, that's big!''), ");
  } else {
    document.write(pokemonList[i].name + " " + "(height: " + pokemonList[i].height + "), ");
  }
}
