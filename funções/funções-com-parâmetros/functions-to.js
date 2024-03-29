/* 

// Declarando uma função com parâmetro

function torrar(pao){
    pao = prompt("Informe o tipo de pão: ")
    alert(`Torrada feita com pão de ${pao}`);
}


torrar(); 

*/

// Função com parâmetro default

function pedido(lanche, nome){
    lanche = prompt("Informe o lanche que deseja: ");
    nome = prompt("Informe o nome do cliente: ");
    if(nome === ""){
        nome = "Cliente"
    }
    alert(`Torrada feita com ${lanche}`);
    alert(`ela é um pedido de ${nome}`);
}

pedido("Pão Integral");