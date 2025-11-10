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

let idade = 18;
let possuiCarteiraDeMotorista = true;

if (idade >= 18 && possuiCarteiraDeMotorista) {
   console.log("Você pode dirigir.");
} else {
   console.log("Você não pode dirigir.");
}

let diaDaSemana = "sábado";
if (diaDaSemana === "sábado" || diaDaSemana === "domingo") {
   console.log("É fim de semana!");
} else {
   console.log("É um dia útil.");
}

let estaChovendo = false;
if (!estaChovendo) {
   console.log("Você pode sair sem guarda-chuva.");
} else {
   console.log("Leve um guarda-chuva.");
}

