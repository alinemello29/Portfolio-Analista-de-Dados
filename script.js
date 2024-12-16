document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const messageSent = document.getElementById("messageSent");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Atualiza e mostra a mensagem de sucesso
        messageSent.textContent = "Sua mensagem foi enviada com sucesso!";
        messageSent.classList.remove("hidden");

        // Limpa o formulário após o envio
        form.reset(); 
    });
});