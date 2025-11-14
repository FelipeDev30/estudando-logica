let userName = getFirstName("Abraão Lamas");

console.log(`Seja bem vindo ${userName}`)

function getFirstName(name, splitChar) {
    let firstName = name.split(splitChar)[0];
    return firstName;
}

userName = getFirstName("Felipe Lamas", " ")

console.log(`Seja bem vindo ${userName}`);