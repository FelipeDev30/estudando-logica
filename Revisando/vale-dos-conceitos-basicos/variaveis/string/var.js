let name = prompt("Qual é o seu nome?");
let age = Number(prompt("Qual é a sua idade: "));

function heroUser(name, age) {
    if(age >= 18) {
        alert(`Bem vindo, ${name}! Você está pronto para ser um grande herói!`)
    } else {
        alert(`Olá, ${name}! Você ainda é jovem, mas com coragem e determinação, você pode se tornar um grande herói no futuro!`);
    }
}

heroUser(name, age);