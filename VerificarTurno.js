let hora = Number(prompt("Qual o horário da tarefa?"));

let prioridade = Number(prompt("Qual a prioridade desta tarefa?"));

let turno;


if (hora >= 0 && hora <= 11) {
    turno = "Matinal"
    alert("Período Matinal")

}

else if (hora >= 12 && hora < 17) {
    turno = "Diurno"
    alert("Período Diurno")
}

else if (hora >= 18 && hora < 23) {
    turno = "Noturno"
    alert("Período Noturno")
}

else {
    alert("Horário inválido")
};

if (prioridade >= 8 && (turno == "Matinal" || turno == "Diurno")) {
    alert("TAREFA CRITÍCA")
}

else if (prioridade >= 7 && prioridade < 9 && (turno == "Matinal" || turno == "Diurno")) {
    alert("TAREFA IMPORTANTE")
}

else if (prioridade <7 && prioridade >= 0 && (turno == "Matinal" || turno == "Diurno")) {
    alert("TAREFA DE PROPRIEDADE BAIXA")
} 

else if (turno == "Noturno") {
    alert("TAREFA NÃO IMPORTANTE, VÁ CURTIR!")
}

else {
    alert("Número de prorpriedade inválida")
};

