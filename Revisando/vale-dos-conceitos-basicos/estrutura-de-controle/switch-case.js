/* 

O comando switch é uma estrutura de controle que permite executar diferentes partes do código com base no valor de uma expressão. Ele é útil quando você tem várias condições possíveis para verificar e deseja evitar o uso excessivo de declarações if-else. Aqui está a sintaxe básica do switch:

switch (expressao) {
    case valor1:
        // Bloco de código a ser executado se a expressão for igual a valor1
        break;
    case valor2:
        // Bloco de código a ser executado se a expressão for igual a valor2
        break;
    default:
        // Bloco de código a ser executado se a expressão não corresponder a nenhum dos valores
        break;
}

No exemplo acima, a expressão é avaliada e comparada com os valores especificados em cada case. Se houver uma correspondência, o bloco de código associado a esse case será executado. O comando break é usado para sair do switch após a execução do bloco correspondente, evitando que o código continue a ser executado nos cases subsequentes. O case default é opcional e será executado se nenhum dos outros cases corresponder à expressão.
*/
// Exemplo de uso do switch
let diaDaSemana = 3;
let nomeDoDia;
switch (diaDaSemana) {
    case 1:
        nomeDoDia = "Domingo";
        break;
    case 2:
        nomeDoDia = "Segunda-feira";
        break;
    case 3:
        nomeDoDia = "Terça-feira";
        break;
    case 4:
        nomeDoDia = "Quarta-feira";
        break;
    case 5:
        nomeDoDia = "Quinta-feira";
        break;
    case 6:
        nomeDoDia = "Sexta-feira";
        break;
    case 7:
        nomeDoDia = "Sábado";
        break;
    default:
        nomeDoDia = "Dia inválido";
        break;
}

console.log(`O dia da semana é: ${nomeDoDia}`);