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
} 
    
*/


/* Calculadora Noob */

function soma(n1, n2) {
    let result = n1 + n2;
    return alert(`A soma entre ${n1} e ${n2} é igual: ${result.toFixed(2)}`); 
}

function subtrair(n1, n2) {
    result = n1 - n2;
    return alert(`A subtração entre ${n1} e ${n2} é igual: ${result}`); 
}

function multiplicar(n1, n2){
    let result = n1 * n2;
    return alert(`A multiplicação entre ${n1} e ${n2} é igual: ${result.toFixed(2)}`);
}

function divisorMod(n1, n2) {
    let result = n1 % n2;
    return alert(`O resto da divisão entre ${n1} e ${n2} é igual: ${result.toFixed(2)}`);
}

function divisor(n1, n2) {
    let result = n1 / n2;
    return alert(`A divisão entre ${n1} e ${n2} é igual: ${result.toFixed(2)}`);
}

function potencia(n1, n2) {
    let result = n1 ** n2;
    return alert(`A exponenciação entre ${n1} e ${n2} é igual: ${result.toFixed(2)}`);
}


function main() {
    let n1 = Number(prompt("Digite um número para seu cálculo:")); 
    let n2 = Number(prompt("Digite um segundo número para seu cálculo:"));
    let opcoes = Number(prompt('Escolha o tipo de cálculo:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Resto da Divisão\n5 - Divisão\n6 - Exponenciação'));

    switch(opcoes) {
        case 1:
            soma(n1, n2);
            break;
        case 2:
            subtrair(n1, n2);
            break;
        case 3:
            multiplicar(n1, n2);
            break;
        case 4:
            divisorMod(n1, n2);
            break;
        case 5:
            divisor(n1, n2);
            break;
        case 6:
            potencia(n1, n2);
            break;
        default:
            alert("Digite uma opção válida!");
            break;
    }
}

main();


