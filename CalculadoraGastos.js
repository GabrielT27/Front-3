const salario = parseFloat(prompt("Digite o valor do seu salário:"));
const aluguel = parseFloat(prompt("Digite o valor do seu aluguel:"));
const alimentacao = parseFloat(prompt("Digite o valor do seu alimentacao:"));
const lazer = parseFloat(prompt("Digite o quanto você investe na sua paz:"));

totalDespesa = aluguel + alimentacao + lazer; 
saldo = salario - totalDespesa;

if (saldo >= 0) {
    alert(`Saldo positivo bigode, seu saldo é de ${saldo}`)
}

else if (saldo = 0) {
    alert(`boa chachorro, sobreviveu mais um mês!, seu saldo é de  ${saldo}`)
}

else {
    alert(`Saldo Negativo, seu saldo é de ${saldo}`)
};


