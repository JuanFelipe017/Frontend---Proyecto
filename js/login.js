document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const messageDiv = document.getElementById('loginMessage');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;

        try {
            const res = await fetch('http://localhost:4000/api/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ username, password })
            });
            const data = await res.json();
            if (res.ok) {
                localStorage.setItem('user', JSON.stringify(data.user || { username }));
                messageDiv.textContent = "Inicio de sesión exitoso. Redirigiendo...";
                messageDiv.style.color = "#4BB543";
                setTimeout(() => {
                    window.location.href = 'index.html'; 
                }, 1500);
            } else {
                messageDiv.textContent = data.message || "Usuario o contraseña incorrectos.";
                messageDiv.style.color = "#ff6f61";
            }
        } catch (err) {
            messageDiv.textContent = "Error de conexión.";
            messageDiv.style.color = "#ff6f61";
        }
    });
});