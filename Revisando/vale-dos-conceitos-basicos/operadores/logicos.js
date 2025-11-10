/* 

Operadores Lógicos em JavaScript

Os operadores lógicos são usados para combinar expressões booleanas e retornar um valor booleano (true ou false). Os principais operadores lógicos em JavaScript são:

- && (E lógico): Retorna true se ambas as expressões forem verdadeiras.
- || (OU lógico): Retorna true se pelo menos uma das expressões for verdadeira.
- ! (NÃO lógico): Inverte o valor da expressão (true se torna false e vice-versa).
Exemplos:

1. Operador E lógico (&&)
   - Verifica se um número está entre 1 e 10:
   ```
   let numero = 5;
   if (numero >= 1 && numero <= 10) {
       console.log("O número está entre 1 e 10.");
   }
   ```
2. Operador OU lógico (||)
   - Verifica se um usuário tem permissão de administrador ou é um moderador:
   ```
   let usuario = {
       nome: "João",
       ehAdmin: false,
       ehModerador: true
   };

   if (usuario.ehAdmin || usuario.ehModerador) {
       console.log("Acesso concedido.");
   } else {
       console.log("Acesso negado.");
   }
   ```
3. Operador NÃO lógico (!)
   - Verifica se um usuário não está logado:
   ```
   let estaLogado = false;
   if (!estaLogado) {
       console.log("Usuário não está logado.");
   }
   ```
Esses operadores são fundamentais para controlar o fluxo de programas e tomar decisões baseadas em múltiplas condições.
*/



console.log("🎮 História: A Jornada de Alex");
console.log("--------------------------------------------------");

console.log("Alex é um jovem aventureiro que acaba de completar 18 anos. Após anos de treinamento e estudos, ele finalmente obteve sua carteira de motorista, o que lhe permite explorar o mundo além dos limites da sua vila.");

let idade = 18;
let possuiCarteiraDeMotorista = true;

if (idade >= 18 && possuiCarteiraDeMotorista) {
   console.log("✅ Você pode dirigir.");
} else {
   console.log("❌ Você não pode dirigir.");
}

console.log("--------------------------------------------------");
console.log("Com isso, Alex pega seu carro e parte em direção à cidade grande. No caminho, ele verifica o dia da semana para saber se encontrará mais movimento ou não.");

let diaDaSemana = "sábado";
console.log(`📅 Hoje é ${diaDaSemana}.`);

if (diaDaSemana === "sábado" || diaDaSemana === "domingo") {
   console.log("🎉 É fim de semana! Festivais e eventos estão por toda parte.");
} else {
   console.log("💼 É um dia útil. A cidade está em ritmo de trabalho.");
}

console.log("--------------------------------------------------");
console.log("Antes de sair do carro, Alex olha para o céu para verificar o clima...");

let estaChovendo = false;

if (!estaChovendo) {
   console.log("🌤️ O tempo está limpo. Você pode sair sem guarda-chuva.");
} else {
   console.log("🌧️ Está chovendo. Leve um guarda-chuva.");
}

console.log("--------------------------------------------------");
console.log("O tempo está ótimo! Alex decide explorar a cidade e participar de um mini-jogo local para ganhar prêmios.");

console.log("🎮 Mini-jogo: Coleta de Moedas e Item Especial");
console.log("Objetivo: Coletar 100 moedas e encontrar a Estrela para desbloquear a fase bônus.");

let moedasColetadas = 100;
let itemEspecial = "Estrela";

if (moedasColetadas >= 100 && itemEspecial === "Estrela") {
   console.log("🏆 Você desbloqueou o item especial e passou de fase!");
} else {
   console.log("🔄 Continue coletando moedas e procurando o item especial.");
}

console.log("--------------------------------------------------");
console.log("Com o item especial em mãos, Alex se prepara para a próxima etapa de sua aventura.");
console.log("✨ Parabéns, Alex! A aventura continua na misteriosa Cidade Dourada!");