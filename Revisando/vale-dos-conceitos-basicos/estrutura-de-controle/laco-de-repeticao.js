/* 

O são laços de repetição em JavaScript?

Laços de repetição são estruturas de controle que permitem executar um bloco de código várias vezes, enquanto uma condição específica for verdadeira. Eles são úteis para automatizar tarefas repetitivas e iterar sobre coleções de dados.

Exemplos comuns de laços de repetição em JavaScript incluem:


*/

//1. for: Usado quando o número de iterações é conhecido.
// Exemplo:
   for (let i = 0; i < 5; i++) {
       console.log(i);
   }

//2. while: Usado quando o número de iterações não é conhecido e depende de uma condição.
// Exemplo:
   let indice = 0;
   while (indice < 5) {
       console.log(indice);
       indice++;
   }

//3.do...while: Similar ao while, mas garante que o bloco de código seja executado pelo menos uma vez.
// Exemplo:
   let c = 0;
   do {
       console.log(c);
       i++;
   } while (c < 5);

/*

Esses laços de repetição ajudam a controlar o fluxo do programa e facilitam a manipulação de dados em JavaScript.
*/

