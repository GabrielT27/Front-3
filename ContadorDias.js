// Função que calcula a diferença em dias
function calcularDiasParaEvento(dataEventoStr) {
  const hoje = new Date(); // Data de hoje
  const dataEvento = new Date(dataEventoStr); // Data do evento

  // Diferença em milissegundos
  const diffMs = dataEvento - hoje;

  // Converter para dias
  const diffDias = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

  return diffDias;
}

// Evento do botão
document.getElementById("botao").addEventListener("click", function() {
  const dataEventoStr = document.getElementById("dataEvento").value;

  if (!dataEventoStr) {
    document.getElementById("resultado").textContent = "Por favor, escolha uma data.";
    return;
  }

  const dias = calcularDiasParaEvento(dataEventoStr);

  if (dias > 0) {
    document.getElementById("resultado").textContent =
      `Faltam ${dias} dias para o seu compromisso!`;
  } else if (dias === 0) {
    document.getElementById("resultado").textContent = "O seu compromisso é hoje!";
  } else {
    document.getElementById("resultado").textContent = "O evento já passou.";
  }
});
