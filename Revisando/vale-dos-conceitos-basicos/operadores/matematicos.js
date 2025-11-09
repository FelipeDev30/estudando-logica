/* Calculador de Média de Notas dos Alunos */

/* let nota1 = Number(prompt("Digite a primeira nota do aluno: "));
let nota2 = Number(prompt("Digite a segunda nota do aluno: "));
let nota3 = Number(prompt("Digite a terceira nota do aluno: "));

let media = (nota1 + nota2 + nota3)/3

if(media < 5) {
    alert(`Aluno reprovado com média: ${media}`);
} else if(media >= 5 && media < 7) {
    alert(`Aluno em recuperação com média: ${media}`);
} else if(media >= 7) {
    alert(`Parabéns aluno aprovado com média: ${media}`)
} else {
    alert(`Error, insira dados válidos.`)
} */


/* Calculadora Noob */

let n1 = Number(prompt("Digite um número para seu calculo: ")); 
let n2 = Number(prompt("Digite um segundo número para seu calculo: "));

function soma(n1, n2) {
    let result = n1 + n2;
    return alert(`A soma entre ${n1} e ${n2} é igual: ${result}`); 
}

function subtrair(n1, n2) {
    result = n1 - n2;
    return alert(`A subtração entre ${n1} e ${n2} é igual: ${result}`);
}

function multiplicar(n1, n2){
    let result = n1 * n2;
    return alert(`A multiplicação entre ${n1} e ${n2} é igual: ${result}`);
}

function divisorMod(n1, n2) {
    let result = n1 % n2;
    return alert(`O resto da divisão entre ${n1} e ${n2} é igual: ${result}`);
}

function divisor(n1, n2) {
    let result = n1 / n2;
    return alert(`A divisão entre ${n1} e ${n2} é igual: ${result}`);
}

function potencia(n1, n2) {
    let result = n1 ** n2;
    return alert(`A exponenciação entre ${n1} e ${n2} é igual: ${result}`);
}

function main(opçoes) {
    opçoes = Number(prompt('Escolha o tipo de calculo: 1 - soma, 2 subtração, 3 multiplicação, 4 - Resto da Divisão, 5 - Divisão e 6 - Exponenciação'));
    if(opçoes === 1){
        return soma(n1, n2);
    } else if(opçoes === 2){
        return subtrair(n1, n2);
    } else if(opçoes === 3) {
        return multiplicar(n1, n2);
    } else if (opçoes === 4) {
        return divisorMod(n1, n2);
    } else if(opçoes === 5) {
        return divisor(n1, n2);
    } else if(opçoes === 6) {
        return potencia(n1, n2);
    } else {
        return alert("Digite uma opção válida!");
    }
}

main();


