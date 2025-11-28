
class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        const ataques = {
            mago: "magia",
            guerreiro: "espada",
            monge: "artes marciais",
            ninja: "shuriken"
        };

        const ataque = ataques[this.tipo] || "um ataque desconhecido";
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}.`);
    }

    toString() {
        return `Herói: ${this.nome}, Idade: ${this.idade}, Tipo: ${this.tipo}`;
    }
}

// Exemplos
const heroiOne = new Hero("Harry", 18, "mago");
heroiOne.atacar();

const heroiTwo = new Hero("Himura", 21, "guerreiro");
heroiTwo.atacar();

console.log(heroiOne.toString());
console.log(heroiTwo.toString());