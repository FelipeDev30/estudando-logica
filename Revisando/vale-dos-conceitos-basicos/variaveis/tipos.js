/* 

Tipos de dados em JavaScript aplicados a um pokemon

    1. String: Nome e Tipo do Pokémon
    2. Number: Nível do Pokémon
    3. Boolean: Se o Pokémon está ativo ou não
    4. Array: Habilidades do Pokémon
    5. Object: Detalhes adicionais do
    
*/

// Definindo variáveis com diferentes tipos de dados para um Pokémon:

let nomePokemon = "Pikachu";
let tipoPokemon = "Elétrico";
let nivelPokemon = 25;
let estaAtivo = true;
let habilidadesPokemon = ["Choque do Trovão", "Investida", "Cauda de Ferro"];
let detalhesPokemon = {
    hp: 45,
    ataque: 55,
    defesa: 40,
    peso: "6 kg",
    altura: "0.4 m",
    genero: "Masculino"
};

console.log("Nome:", nomePokemon);
console.log("Tipo:", tipoPokemon);
console.log("Nível:", nivelPokemon);
console.log("Está Ativo:", estaAtivo);
console.log("Habilidades:", habilidadesPokemon);
console.log("Detalhes:", detalhesPokemon);