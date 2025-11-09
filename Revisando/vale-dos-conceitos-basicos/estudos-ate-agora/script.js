/* 

pokemon

*/

const pokemon = [
    { name: "Bulbasaur", type: "Grass", level: 5 },
    { name: "Charmander", type: "Fire", level: 8 },
    { name: "Squirtle", type: "Water", level: 6 },
    { name: "Pikachu", type: "Electric", level: 5 },
    { name: "Eevee", type: "Normal", level: 5 }
];

// Exemplo de uso do forEach para exibir os nomes dos pokémons

if (pokemon[0].name === "Bulbasaur") {
    console.log(`O primeiro pokomon é ${pokemon[0].name} do tipo ${pokemon[0].type} e está no nível ${pokemon[0].level}.`);
} else if (pokemon[1].name === "Charmander") {
    console.log(`O segundo pokomon é ${pokemon[1].name} do tipo ${pokemon[1].type} e está no nível ${pokemon[1].level}.`);
} else if (pokemon[2].name === "Squirtle") {
    console.log(`O terceiro pokomon é ${pokemon[2].name} do tipo ${pokemon[2].type} e está no nível ${pokemon[2].level}.`);
} else if (pokemon[3].name === "Pikachu") {
    console.log(`O quarto pokomon é ${pokemon[3].name} do tipo ${pokemon[3].type} e está no nível ${pokemon[3].level}.`);
} else if (pokemon[4].name === "Eevee") {
    console.log(`O quinto pokomon é ${pokemon[4].name} do tipo ${pokemon[4].type} e está no nível ${pokemon[4].level}.`);
} else {
    console.log("Pokémon não encontrado.");
}

pokemon.forEach(poke => {
    console.log(`O pokémon ${poke.name} é do tipo ${poke.type} e está no nível ${poke.level}.`);
});

