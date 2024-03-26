/* 

// Declarando uma função com parâmetro

function torrar(pao){
    pao = prompt("Informe o tipo de pão: ")
    alert(`Torrada feita com pão de ${pao}`);
}


torrar(); 

*/

// Função com parâmetro default

function pedido(lanche, nome="Cliente"){
    lanche = prompt("Informe qual será seu lanche: ");
    nome = prompt("Informe o nome do cliente: ");
    alert(`O cliente(a), ${nome} pediu ${lanche}`);
}

pedido();

