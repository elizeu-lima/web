document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita o recarregamento da página

        // Captura os valores dos campos
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Limpa mensagens de erro anteriores
        clearErrors();

        let hasError = false;

        // Validação do nome
        if (name === "") {
            showError("name", "O nome é obrigatório.");
            hasError = true;
        }

        // Validação do email
        if (email === "") {
            showError("email", "O e-mail é obrigatório.");
            hasError = true;
        } else if (!validateEmail(email)) {
            showError("email", "Digite um e-mail válido.");
            hasError = true;
        }

        // Validação da mensagem
        if (message === "") {
            showError("message", "A mensagem não pode estar vazia.");
            hasError = true;
        }

        // Se houver erro, interrompe o envio
        if (hasError) return;

        // Simula o envio para um backend
        setTimeout(() => {
            showSuccess("Contato enviado com sucesso!");
            contactForm.reset(); // Limpa os campos após o envio
        }, 500);
    });

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const errorSpan = document.createElement("span");
        errorSpan.classList.add("error-message");
        errorSpan.innerText = message;
        field.parentElement.appendChild(errorSpan);
        field.classList.add("input-error");
    }

    function clearErrors() {
        document.querySelectorAll(".error-message").forEach(error => error.remove());
        document.querySelectorAll(".input-error").forEach(input => input.classList.remove("input-error"));
    }

    function showSuccess(message) {
        const successMessage = document.getElementById("success-message");
        successMessage.innerText = message;
        successMessage.style.display = "block";

        setTimeout(() => {
            successMessage.style.display = "none";
        }, 5000);
    }
});
