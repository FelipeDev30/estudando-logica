/* 

function soma(n1, n2){
    n1 = Number(prompt("Informe o primeiro número para soma: "));
    n2 = Number(prompt("Informe o segundo número para soma: "));
    return n1 + n2
}

alert(soma());


 */
let userName = getFirstName(prompt("Informe o seu nome: "));

function getFirstName(name){
    let firstName = name.split(" ")[0];
    return firstName
}

alert(userName);


