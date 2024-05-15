let nome = "Super Lipe"
let xp = 0 
let nivel = ""

for(let inimigos = 0; inimigos <= 5; inimigos++){
    xp += 1000
}

if(xp < 1000){
    nivel = "Ferro"
} else if(xp >1000 && xp <= 2000){
    nivel = "Bronze"
} else if(xp > 2000 && xp <= 5000){
    nivel = "Prata"
} else if(xp > 5000 && xp <= 6000){
    nivel = "Ouro"
} else if(xp > 6000 && xp <= 7000){
    nivel = "Platina Diamante"
} else if(xp > 7000 && xp <= 9000){
    nivel = "Ascendente"
} else if(xp > 9000 && xp <= 10000) {
    nivel = "Imortal"
} else if(xp > 10000){
    nivel = "Radiante"
}

console.log(`O herói: ${nome} está no nivel ${nivel} com ${xp} pontos de experiência.`);