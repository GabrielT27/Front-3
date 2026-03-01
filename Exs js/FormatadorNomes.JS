// Função que formata o nome do contato conforme especificado
function limparNomeContato(nome) {
    // 1. Recebe uma string (ex: " joão silva ")
    // 2. Remove os espaços em branco no início e no fim
    // 3. Transforme toda a string em letras maiúsculas
    // 4. Retorna a string formatada
    return nome.trim().toUpperCase();
}

// Função que é chamada quando o botão é clicado
function formatarNome() {
    // Pega o valor do input
    const nomeInput = document.getElementById('nomeInput');
    const nomeOriginal = nomeInput.value;
    
    // Verifica se o campo não está vazio
    if (nomeOriginal.trim() === '') {
        alert('Por favor, digite um nome para formatar.');
        nomeInput.focus();
        return;
    }
    
    // Chama a função limparNomeContato para formatar o nome
    const nomeFormatado = limparNomeContato(nomeOriginal);
    
    // Mostra o resultado na página
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <strong>Nome original:</strong> "${nomeOriginal}"<br>
        <strong>Nome formatado:</strong> "${nomeFormatado}"
    `;
    
    // Limpa o campo de entrada para facilitar novos testes
    nomeInput.value = '';
    nomeInput.focus();
}

// Adiciona funcionalidade de pressionar Enter para formatar
document.getElementById('nomeInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        formatarNome();
    }
});

// Testes da função para verificar se está funcionando
console.log("Testes da função limparNomeContato:");
console.log('limparNomeContato("  joão silva  ") =', limparNomeContato("  joão silva  "));
console.log('limparNomeContato("maria souza") =', limparNomeContato("maria souza"));
console.log('limparNomeContato("  CARLOS  ") =', limparNomeContato("  CARLOS  "));
console.log('limparNomeContato("") =', limparNomeContato(""));