/* 

# O que deve ser utilizado  #

- Variáveis (let, const)
- Tipos de dados (string, number, boolean)
- Operadores aritméticos (+, -, *, /, %)
- Estruturas condicionais (if, else if, else)
- Funções (declaração e chamada de funções)
- Laços de repetição (for, while)

# Obnjetivo do desafio #

// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor que 1.000, exiba: "O herói [NOME] = "Ferro".

Se XP for entre 1.001 e 2.000, exiba: "O herói [NOME] = "Bronze".

Se XP for entre 2.001 e 5.000, exiba: "O herói [NOME] = "Prata Ouro".

Se XP for entre 5.001 e 8.000, exiba: "O herói [NOME] = "Platina Diamante".

Se XP for entre 8.001 e 9.000, exiba: "O herói [NOME] = "Ascendente".

Se XP for entre 9.001 e 10.000, exiba: "O herói [NOME] = "Imortal".

Se XP for maior que 10.000, exiba: "O herói [NOME] = "Radiante".

*/

// Declaração das variáveis
const nomeHeroi = "Felipe Himura";
const xpHeroi = 1500;

// Função para determinar a classificação do herói com base na XP
function classificarHeroi(nome, xp) {
    let classificacao;

    // Estruturas condicionais corrigidas
    if (xp < 1000) {
        classificacao = "Ferro";
    } else if (xp >= 1000 && xp <= 2000) {
        classificacao = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        classificacao = "Prata Ouro";
    } else if (xp >= 5001 && xp <= 8000) {
        classificacao = "Platina Diamante";
    } else if (xp >= 8001 && xp <= 9000) {
        classificacao = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        classificacao = "Imortal";
    } else {
        classificacao = "Radiante";
    }

    console.log(`O herói ${nome} está na classificação: ${classificacao}`);
}

// Chamada da função
classificarHeroi(nomeHeroi, xpHeroi);

// Função para simular batalhas e aplicar operadores aritméticos
function simularBatalhas(xpInicial, batalhas) {
    let xp = xpInicial;

    // Laço for para simular batalhas
    for (let i = 1; i <= batalhas; i++) {
        let ganho = i * 100; // ganho aumenta a cada batalha
        xp += ganho; // soma XP
        console.log(`Após a batalha ${i}, XP total: ${xp}`);
    }

    return xp;
}

// Simulação de batalhas
const batalhas = 5;
const xpFinal = simularBatalhas(xpHeroi, batalhas);

// Estrutura while para verificar se atingiu nível máximo
let nivelMaximo = false;
while (!nivelMaximo) {
    if (xpFinal >= 10000) {
        console.log("Parabéns! Você atingiu o nível máximo!");
        nivelMaximo = true;
    } else {
        console.log("Continue batalhando para atingir o nível máximo!");
        nivelMaximo = true; // evita loop infinito
    }
}

