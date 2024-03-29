/* 

// Declarando uma função com parâmetro

function torrar(pao){
    pao = prompt("Informe o tipo de pão: ")
    alert(`Torrada feita com pão de ${pao}`);
}


torrar(); 

*/

// Função com parâmetro default

function pedido(lanche, nome = "Cliente"){
    console.log(`Torrada feita com ${lanche}`);
    console.log(`ela é um pedido de ${nome}`);
}

pedido("Pão Integral");