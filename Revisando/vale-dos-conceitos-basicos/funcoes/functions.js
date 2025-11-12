/* 

# O que são funções em JavaScript?

Funções em JavaScript são blocos de código reutilizáveis que executam uma tarefa específica. Elas permitem que você agrupe um conjunto de instruções sob um nome, facilitando a organização e a reutilização do código.

# Como declarar uma função

Você pode declarar uma função usando a palavra-chave `function`, seguida pelo nome da função, parênteses e chaves. Por exemplo:

```javascript
function nomeDaFuncao(param1, param2) {
    // corpo da função
}
```
# Exemplo de função simples que soma dois números:```javascript
function somar(a, b) {
    return a + b;
}
*/

/* function somar(n1, n2) {
    return n1 + n2;
}

console.log(somar(5, 3)); // Saída: 8

function torrar() {
    console.log("Torrando o pão!");
    return "Pão torrado!";
}

console.log(torrar()); // Saída: Torrando o pão! \n Pão torrado!

function cumprimentar(nome) {
    return `Olá, ${nome}!`;
}

console.log(cumprimentar("Maria")); // Saída: Olá, Maria!

function calcularAreaRetangulo(largura, altura) {
    return largura * altura;
}

console.log(calcularAreaRetangulo(5, 10)); // Saída: 50

function verificarParidade(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}
console.log(verificarParidade(4)); // Saída: Par
console.log(verificarParidade(7)); // Saída: Ímpar

*/

function imc(peso, altura) {
    const imcValue = peso / (altura * altura);
    if(imcValue >= 18.5 && imcValue <= 24.9){
        return `Seu imc é ${imcValue.toFixed(2)} - Peso normal`;
    } else if(imcValue >= 25 && imcValue <= 29.9){
        return `Seu imc é ${imcValue.toFixed(2)} - Sobrepeso`;
    } else if(imcValue >= 30 && imcValue <= 34.9){
        return `Seu imc é ${imcValue.toFixed(2)} - Obesidade grau 1`;
    } else if(imcValue >= 35 && imcValue <= 39.9){
        return `Seu imc é ${imcValue.toFixed(2)} - Obesidade grau 2`;
    } else if(imcValue >= 40){
        return `Seu imc é ${imcValue.toFixed(2)} - Obesidade grau 3`;
    }
}

console.log(imc(92, 1.60)); // Saída: Seu imc é 35.91 - Obesidade grau 2
