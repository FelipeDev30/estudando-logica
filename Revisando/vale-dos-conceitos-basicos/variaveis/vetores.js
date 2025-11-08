/* 

O que são Vetores em JavaScript?

Vetores, também conhecidos como arrays, são estruturas de dados que permitem armazenar múltiplos valores em uma única variável. Eles são úteis para organizar e manipular conjuntos de dados relacionados.
Exemplo de criação e uso de um vetor em JavaScript:

*/

// Exemplo de uso de um vetor
let frutas = ['maçã', 'banana', 'laranja'];

console.log("Frutas disponíveis:");
for (let i = 0; i < frutas.length; i++) {
    console.log("-", frutas[i]);
}

/*
Neste exemplo, criamos um vetor chamado "frutas" que contém três elementos: 'maçã', 'banana' e 'laranja'. Utilizamos um loop para percorrer o vetor e imprimir cada fruta no console.
Vetores são extremamente úteis para armazenar listas de itens, como nomes, números, objetos, entre outros. Eles oferecem métodos integrados para manipulação, como adicionar, remover e ordenar elementos.
*/

let pokemons = ['Pikachu', 'Bulbasaur', 'Charmander', 'Squirtle'];

console.log("\nPokémons disponíveis:");
for (let i = 0; i < pokemons.length; i++) {
    console.log("-", pokemons[i]);
}

console.log(pokemons[0]); // Acessando o primeiro elemento do vetor
console.log(pokemons[1]); // Acessando o segundo elemento do vetor
console.log(pokemons[2]); // Acessando o terceiro elemento do vetor
console.log(pokemons[3]); // Acessando o quarto elemento do vetor

console.log('------------------------------------------------');

// Outro exemplo de vetor
let carros = ['Ford', 'Chevrolet', 'Toyota', 'Honda'];
for (let i = 0; i < carros.length; i++) {
    console.log("-", carros[i]);
}

carros.pop(); // Removendo o último elemento do vetor
console.log("\nApós remover o último carro:");
for (let i = 0; i < carros.length; i++) {
    console.log("-", carros[i]);
}

console.log(carros[0]); // Acessando o primeiro elemento do vetor
console.log(carros[1]); // Acessando o segundo elemento do vetor
console.log(carros[2]); // Acessando o terceiro elemento do vetor

carros.push('Volkswagen'); // Adicionando um novo elemento ao final do vetor
console.log("\nApós adicionar um novo carro:");
for (let i = 0; i < carros.length; i++) {
    console.log("-", carros[i]);
}
