import React from 'react';
import { Button } from 'react-bootstrap'; // or any other UI library
import frontControle from './front_controle'; // assuming front_controle.js is in the same directory

document.getElementById('Login').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var email = document.getElementById('email').value;
    var Matricula = document.getElementById('Matricula').value;
    
    // Simulação de validação simples
    if (email.trim() === '' || senha.trim() === '') {
        document.getElementById('mensagem').innerText = 'Por favor, preencha todos os campos.';
        return;
    }
    
    // Simulação de cadastro bem-sucedido
    alert('Cadastro realizado com sucesso!\nEmail: ' + email + '\Matricula: ' + Matricula);
    
    // Limpar campos após cadastro bem-sucedido
    document.getElementById('email').value = '';
    document.getElementById('Matricula').value = '';
    document.getElementById('mensagem').innerText = '';
});