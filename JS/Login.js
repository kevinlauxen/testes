let participantes = [
    {
      Matricula: 37002848,
      email: "gabriela@outlook.com"
    },
    {
        Matricula: 1,
        email: "a@a.com"
    }
];

document.getElementById('Login').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var email = document.getElementById('email').value;
    var matricula = document.getElementById('Matricula').value; // Corrigi a variável Matricula para matricula
    
    // Simulação de validação simples
    if (email.trim() === '' || matricula.trim() === '') { // Corrigi senha.trim() para matricula.trim()
        document.getElementById('mensagem').innerText = 'Por favor, preencha todos os campos.';
        return; // Removi o retorno "/Controle/" pois não parecia fazer sentido aqui
    }
    
    // Verificar se o participante existe
    const participante = participantes.find(participante => participante.email === email && participante.Matricula === parseInt(matricula));
    
    if (participante) {
        // Simulação de login bem-sucedido
        alert('Login feito com sucesso!\nEmail: ' + email + '\nMatricula: ' + matricula);
        location.href = "homepage.html";
        
        // Limpar campos após o login bem-sucedido
        document.getElementById('email').value = '';
        document.getElementById('Matricula').value = '';
        document.getElementById('mensagem').innerText = '';
    } else {
        // Simulação de participante não encontrado
        alert('Participante não encontrado. Verifique suas credenciais.');
    }
});
