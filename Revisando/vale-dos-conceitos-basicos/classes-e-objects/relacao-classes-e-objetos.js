/* 

Qual é a relação entre classes e objetos em programação orientada a objetos?

Em programação orientada a objetos, uma classe é um molde ou uma estrutura que define as propriedades e comportamentos (métodos) comuns a um conjunto de objetos. Ela serve como um modelo para criar objetos específicos.
Um objeto, por outro lado, é uma instância concreta de uma classe. Ele contém valores específicos para as propriedades definidas na classe e pode executar os métodos definidos nela.

Por exemplo, considere uma classe chamada "Carro". Essa classe pode ter propriedades como "cor", "modelo" e "ano", e métodos como "acelerar" e "frear". Quando você cria um objeto a partir dessa classe, como um carro específico com a cor vermelha, modelo "Sedan" e ano 2020, esse objeto é uma instância da classe "Carro". A relação entre classes e objetos é, portanto, que as classes são os planos ou moldes, enquanto os objetos são as instâncias concretas desses planos.

*/

// Exemplo em JavaScript
class Carro {
    constructor(cor, modelo, ano) {
        this.cor = cor;
        this.modelo = modelo;
        this.ano = ano;
    }
    acelerar() {
        console.log(`${this.modelo} está acelerando!`);
    }
    frear() {
        console.log(`${this.modelo} está freiando!`);
    }
}

// Criando um objeto (instância) da classe Carro
const meuCarro = new Carro('vermelho', 'Sedan', 2020);
meuCarro.acelerar(); // Output: Sedan está acelerando!
meuCarro.frear();    // Output: Sedan está freiando!
console.log(meuCarro.cor);   // Output: vermelho
console.log(meuCarro.modelo); // Output: Sedan
console.log(meuCarro.ano);    // Output: 2020

/* ------------------------------------------------------------------------------------ */

class herio {
    constructor(nome, classe) {
        this.nome = nome;
        this.classe = classe;
        this.nivel = 1;
        this.vida = 100;
        this.mana = 50;     
    }
    subirNivel() {
        this.nivel += 1;
        this.vida += 20;
        this.mana += 10;
        console.log(`${this.nome} subiu para o nível ${this.nivel}!`);
    }
    atacar() {
        console.log(`${this.nome}, o ${this.classe}, está atacando!`);
    }
    defender() {
        console.log(`${this.nome}, o ${this.classe}, está defendendo!`);
    }
}

console.log('----------------------------');

// Criando um objeto (instância) da classe herio
const meuHeroi = new herio('Aragorn', 'Guerreiro');
meuHeroi.atacar(); // Output: Aragorn, o Guerreiro, está atacando!
meuHeroi.defender(); // Output: Aragorn, o Guerreiro, está defendendo!
console.log(meuHeroi.nome);   // Output: Aragorn
console.log(meuHeroi.classe); // Output: Guerreiro
meuHeroi.subirNivel(); // Output: Aragorn subiu para o nível 2!
console.log(meuHeroi.nivel); // Output: 2
console.log(meuHeroi.vida);