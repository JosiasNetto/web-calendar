document.getElementById('loginForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('Email').value;
    const senha = document.getElementById('Senha').value;

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, senha })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Resposta do servidor:', data);
        if (data.success) {
            localStorage.setItem('token', data.token);
            window.location.href = '/front-end/dist/eventos.html';
        } else {
            alert(`Login falhou:   ${data.message}`);
        }
    })
    .catch(error => {
        console.error('Erro:', error);
    });
});
