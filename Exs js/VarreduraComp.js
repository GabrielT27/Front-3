// Array com os horários
const agendaHorarios = [8, 12, 25, 15, -2, 20];

// Evento do botão
document.getElementById("botao").addEventListener("click", function() {
  const relatorio = document.getElementById("relatorio");
  const totalValidos = document.getElementById("totalValidos");
  
  relatorio.innerHTML = "";      // limpa relatório
  totalValidos.textContent = ""; // limpa contagem anterior

  let contagemValidos = 0; // Desafio Extra: contador de horários válidos

  // Percorre cada horário
  for (let i = 0; i < agendaHorarios.length; i++) {
    const horario = agendaHorarios[i];
    const li = document.createElement("li");

    if (horario >= 0 && horario <= 23) {
      li.textContent = `Compromisso agendado para as ${horario}h`;
      contagemValidos++; // Incrementa a contagem de válidos
    } else {
      li.textContent = `Atenção: O horário ${horario}h é inválido!`;
    }

    relatorio.appendChild(li);
  }

  // Mostra o total de horários válidos
  totalValidos.textContent = `Total de compromissos válidos: ${contagemValidos}`;
});
