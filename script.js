document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    document.getElementById('messageSent').innerText = 'Foi enviado com sucesso!';
    document.getElementById('messageSent').style.display = 'block';

    this.reset();
});