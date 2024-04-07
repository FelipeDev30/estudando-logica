/* 



*/

function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else {
        const intervalos = [
            { limite: 20, nome: "Bronze" },
            { limite: 50, nome: "Prata" },
            { limite: 80, nome: "Ouro" },
            { limite: 90, nome: "Diamante" },
            { limite: 100, nome: "Lendário" },
            { limite: Infinity, nome: "Imortal" }
        ];

        for (const intervalo of intervalos) {
            if (vitorias <= intervalo.limite) {
                nivel = intervalo.nome;
                break;
            }
        }
    }

    return { saldoVitorias, nivel };
}

// Exemplo de uso da função
const vitorias = 75;
const derrotas = 25;
const resultado = calcularNivel(vitorias, derrotas);

console.log(`O Herói tem saldo de ${resultado.saldoVitorias} e está no nível de ${resultado.nivel}`);

