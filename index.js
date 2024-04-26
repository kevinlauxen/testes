

document.getElementById('Login').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var email = document.getElementById('email').value;
    var Matricula = document.getElementById('Matricula').value;
    
    // Simulação de validação simples
    if (email.trim() === '' || senha.trim() === '') {
        document.getElementById('mensagem').innerText = 'Por favor, preencha todos os campos.';
        return "/frontControle";
    }
    
    // Simulação de cadastro bem-sucedido
    alert('Cadastro realizado com sucesso!\nEmail: ' + email + '\Matricula: ' + Matricula);
    
    // Limpar campos após cadastro bem-sucedido
    document.getElementById('email').value = '';
    document.getElementById('Matricula').value = '';
    document.getElementById('mensagem').innerText = '';
   
    const teste = (event) => {
        alert('entrou');
        return
        };
});