/* 

IF(SE)

    Estrutura de controle que avalia uma condição e executa um bloco de código se a condição for verdadeira. Caso contrário, pode executar um bloco alternativo com ELSE(SENÃO).
Exemplo:

*/
let idade = 18;

if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}


/*Neste exemplo, a condição verifica se a variável 'idade' é maior ou igual a 18. Se for verdadeira, imprime "Você é maior de idade." Caso contrário, imprime "Você é menor de idade."
*/

/*
IF...ELSE IF...ELSE
*/
let nota = 85;

if (nota >= 90) {
    console.log("Você tirou um A.");
} else if (nota >= 80) {
    console.log("Você tirou um B.");
} else if (nota >= 70) {
    console.log("Você tirou um C.");
} else {
    console.log("Você tirou um D.");
}

/*Neste exemplo, a condição verifica a variável 'nota' e imprime a classificação correspondente com base em seu valor.
*/

/*
IF TERNÁRIO
*/
let resultado = (nota >= 70) ? "Aprovado" : "Reprovado";
console.log(`Você foi ${resultado}.`);
/*Neste exemplo, o operador ternário avalia a condição 'nota >= 70'. Se for verdadeira, atribui "Aprovado" à variável 'resultado'; caso contrário, atribui "Reprovado". Em seguida, imprime o resultado.
*/