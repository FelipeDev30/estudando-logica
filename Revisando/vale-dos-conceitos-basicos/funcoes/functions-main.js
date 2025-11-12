function somar(n1, n2) {
    return n1 + n2;
}

function subtrair(n1, n2) {
    return n1 - n2;
}

function multiplicar(n1, n2) {
    return n1 * n2;
}

function dividir(n1, n2) {
    return n1 / n2;
}

function calcularMedia(n1, n2) {
    return (n1 + n2) / 2;
}

function calcularPorcentagem(total, porcentagem) {
    return (porcentagem / 100) * total;
}

function calcularDiferenca(n1, n2) {
    return Math.abs(n1 - n2);
}

function imc(peso, altura) {
    return peso / (altura * altura);
}

function opcoes(opcao, n1, n2) {
    if (opcao === 'somar') {
        return somar(n1, n2);
    } else if (opcao === 'subtrair') {
        return subtrair(n1, n2);
    } else if (opcao === 'multiplicar') {
        return multiplicar(n1, n2);
    } else if (opcao === 'dividir') {
        return dividir(n1, n2);
    } else if (opcao === 'calcularMedia') {
        return calcularMedia(n1, n2);
    } else if (opcao === 'calcularPorcentagem') {
        return calcularPorcentagem(n1, n2);
    } else if (opcao === 'calcularDiferenca') {
        return calcularDiferenca(n1, n2);
    } else if (opcao === 'imc') {
        return imc(n1, n2);
    } else {
        return 'Opção inválida';
    }
}

function main() {
    console.log(opcoes('somar', 5, 3)); // 8
    console.log(opcoes('subtrair', 10, 4)); // 6
    console.log(opcoes('multiplicar', 6, 7)); // 42
    console.log(opcoes('dividir', 20, 5)); // 4
    console.log(opcoes('calcularMedia', 8, 12)); // 10
    console.log(opcoes('calcularPorcentagem', 200, 15)); // 30
    console.log(opcoes('calcularDiferenca', 10, 4)); // 6
    console.log(opcoes('imc', 70, 1.75)); // ~22.86
}

main();