let pokemonList = [
  {name: "Pikachu", height: 2, type: ["Elektro", "Battle"]},
  {name: "Bisasam", height: 10, type: ["Plant", "Water"]},
  {name: "Pummeluf", height: 8, type: ["Psycho", "Grass"]}
];

for(i = 0; i < pokemonList.length; i++) {
  document.write(`${pokemonList.name} (height: ${pokemonList.height})`);
}
