/* Assar pão 

# Algoritmo:

- Abrir o forno.
- Preparar a massa de pão.
- Verificar a temperatura do forno.
- se a temperatura estiver adequada:
    - Colocar a massa de pão no forno.
    - Definir o tempo de forno.
- senão:
    - Ajustar a temperatura do forno.
- Colocar a massa de pão no forno.
- Definir o tempo de forno.

- Esperar o tempo de forno. definido.
- Retirar o pão do forno.
- Verificar o ponto do pão:
    - se o tempo de forno for menor que 10 minutos:
        - Pão cru.
    - se o tempo de forno for entre 10 e 20 minutos:
        - Pão no ponto.
    - se o tempo de forno for maior que 20 minutos:
        - Pão queimado.
- Servir o pão.


*/

/* Função para assar pão e verificar o ponto com base no tempo de forno */

function assarPao(tempoForno) {
    // Abrir o forno
    console.log("Abrindo o forno...");
    // Preparar a massa de pão
    console.log("Preparando a massa de pão...");
    // Verificar a temperatura do forno
    console.log("Verificando a temperatura do forno...");
    if (temperaturaAdequada) {
        // Colocar a massa de pão no forno
        console.log("Colocando a massa de pão no forno...");
        // Definir o tempo de forno
        console.log(`Definindo o tempo de forno para ${tempoForno} minutos...`);
    } else {
        // Ajustar a temperatura do forno
        console.log("Ajustando a temperatura do forno...");
    }
    // Esperar o tempo de forno definido
    console.log(`Esperando ${tempoForno} minutos...`);
    // Retirar o pão do forno
    console.log("Retirando o pão do forno...");
    // Verificar o ponto do pão
    if (tempoForno < 10) {
        console.log("Pão cru.");
    } else if (tempoForno >= 10 && tempoForno < 20) {
        console.log("Pão no ponto.");
    } else {
        console.log("Pão queimado.");
    }
    // Servir o pão
    console.log("Servindo o pão.");
}

// Exemplo de uso da função
let temperaturaAdequada = true;
assarPao(15);