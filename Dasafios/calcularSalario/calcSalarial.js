const valorSalario = Number(prompt("Informe quanto o funcionário recebe: "));
const valorBeneficio = Number(prompt("Informe o valor do beneficio: "));
const imposto = calcularImposto(valorSalario);
const liquidoEBeneficio = valorSalario - imposto + valorBeneficio;

function calcularImposto(salario){
    let aliquota;
    if(salario >= 0 && salario <= 1100){
        aliquota = 0.05;
    } else if(salario > 1100 && salario <= 2500){
        aliquota = 0.10;
    } else if(salario > 2500){
        aliquota = 0.15;
    }
    return aliquota * salario
}


alert(liquidoEBeneficio.toFixed(2));