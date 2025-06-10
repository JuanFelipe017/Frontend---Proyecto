document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registerForm');
    const messageDiv = document.getElementById('registerMessage');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Obtener valores
        const name          = document.getElementById('nombre').value.trim();
        const username        = document.getElementById('username').value.trim();
        const email           = document.getElementById('email').value.trim();
        const cell        = document.getElementById('telefono').value.trim();
        const password        = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Validación básica
        if (password.length < 6) {
            messageDiv.textContent = "La contraseña debe tener al menos 6 caracteres.";
            messageDiv.style.color = "#ff6f61";
            return;
        }
        if (password !== confirmPassword) {
            messageDiv.textContent = "Las contraseñas no coinciden.";
            messageDiv.style.color = "#ff6f61";
            return;
        }

        try {
            const res = await fetch('http://localhost:4000/api/register', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ name, username, email, cell, password })
            });
            const data = await res.json();
            if (res.ok) {
                messageDiv.textContent = "¡Registro exitoso! Ahora puedes iniciar sesión.";
                messageDiv.style.color = "#4BB543";
                form.reset();
            } else {
                messageDiv.textContent = data.message || "Error en el registro.";
                messageDiv.style.color = "#ff6f61";
            }
        } catch (err) {
            messageDiv.textContent = "Error de conexión.";
            messageDiv.style.color = "#ff6f61";
        }
    });
});