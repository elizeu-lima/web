document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form'); // Seleciona o formulário
    const successMessage = document.getElementById('success-message'); // Seleciona a mensagem de sucesso

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Validação dos campos
        const name = form.querySelector('#name').value.trim();
        const email = form.querySelector('#email').value.trim();
        const message = form.querySelector('#message').value.trim();

        let isValid = true;

        // Validação do nome
        if (name === '') {
            isValid = false;
            showError(form.querySelector('#name'), 'Por favor, insira seu nome.');
        } else {
            clearError(form.querySelector('#name'));
        }

        // Validação do e-mail
        if (email === '' || !validateEmail(email)) {
            isValid = false;
            showError(form.querySelector('#email'), 'Por favor, insira um e-mail válido.');
        } else {
            clearError(form.querySelector('#email'));
        }

        // Validação da mensagem
        if (message === '') {
            isValid = false;
            showError(form.querySelector('#message'), 'Por favor, insira uma mensagem.');
        } else {
            clearError(form.querySelector('#message'));
        }

        // Se todos os campos forem válidos, simula o envio
        if (isValid) {
            // Simula o envio do formulário (substitua por uma requisição AJAX se necessário)
            setTimeout(() => {
                successMessage.style.display = 'block'; // Exibe a mensagem de sucesso
                form.reset(); // Limpa o formulário

                // Oculta a mensagem de sucesso após 5 segundos
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 5000); // 5000ms = 5 segundos
            }, 1000); // Simula um delay de 1 segundo para o envio
        }
    });

    // Função para validar e-mail
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Função para exibir mensagens de erro
    function showError(input, message) {
        const errorMessage = input.nextElementSibling;
        if (errorMessage && errorMessage.classList.contains('error-message')) {
            errorMessage.textContent = message;
            input.classList.add('input-error');
        }
    }

    // Função para limpar mensagens de erro
    function clearError(input) {
        const errorMessage = input.nextElementSibling;
        if (errorMessage && errorMessage.classList.contains('error-message')) {
            errorMessage.textContent = '';
            input.classList.remove('input-error');
        }
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Impede o comportamento padrão
        const targetId = this.getAttribute('href'); // Pega o ID da seção
        const targetSection = document.querySelector(targetId); // Seleciona a seção

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth', // Rolagem suave
                block: 'start' // Alinha o topo da seção com o topo da janela
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.getElementById('back-to-top');

    // Mostra ou oculta o botão conforme o scroll da página
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) { // Exibe o botão após rolar 300px
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Rolagem suave ao clicar no botão
    backToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0, // Leva ao topo da página
            behavior: 'smooth' // Rolagem suave
        });
    });
});