/* 

JavaScript Object Notation (JSON) é um formato leve de troca de dados, fácil para humanos lerem e escreverem, e fácil para máquinas analisarem e gerarem. Ele é amplamente utilizado em aplicações web para transmitir dados entre um servidor e um cliente.

Exemplo de um objeto JSON:
{
    "nome": "João",
    "idade": 30,
    "cidade": "São Paulo"
}

Neste exemplo, temos um objeto JSON que representa uma pessoa com três propriedades: nome, idade e cidade. Cada propriedade é composta por uma chave (por exemplo, "nome") e um valor correspondente (por exemplo, "João").


*/

const pessoa = {
    "nome": "João",
    "idade": 30,
    "cidade": "São Paulo"
};

console.log(pessoa.nome); // Acessando a propriedade "nome"
console.log(pessoa.idade); // Acessando a propriedade "idade"
console.log(pessoa.cidade); // Acessando a propriedade "cidade"

// Convertendo o objeto JavaScript para uma string JSON
const pessoaJSON = JSON.stringify(pessoa);
console.log(pessoaJSON);

// Convertendo a string JSON de volta para um objeto JavaScript
const pessoaObj = JSON.parse(pessoaJSON);
console.log(pessoaObj);

/*
Neste código, criamos um objeto JavaScript chamado "pessoa" que contém as mesmas propriedades do exemplo JSON. Em seguida, usamos console.log para acessar e exibir cada propriedade. Também demonstramos como converter o objeto JavaScript para uma string JSON usando JSON.stringify e como converter a string JSON de volta para um objeto JavaScript usando JSON.parse.
*/