document.addEventListener('DOMContentLoaded', () => {
  // ---- HEADER Y SESIÓN ----
  const user = JSON.parse(localStorage.getItem('user'));
  const headerActions = document.getElementById('headerActions');
  const userMenu = document.querySelector('.user-menu');
  const avatar = document.getElementById('userAvatar');
  const logoutBtn = document.getElementById('logoutBtn');
  const noSessionMessage = document.getElementById('noSessionMessage');
  const userDataSection = document.getElementById('userDataSection');

  if (user) {
      // Oculta login/registro, muestra menú usuario
      if (headerActions) headerActions.style.display = 'none';
      if (userMenu) userMenu.style.display = 'block';
      if (noSessionMessage) noSessionMessage.style.display = 'none';
      if (userDataSection) userDataSection.style.display = 'block';
      // Rellena datos usuario
      document.getElementById('userUsername').textContent = user.username || "";
  } else {
      // Muestra login/registro, oculta menú usuario
      if (userMenu) userMenu.style.display = 'none';
      if (headerActions) headerActions.style.display = 'block';
      if (noSessionMessage) noSessionMessage.style.display = 'block';
      if (userDataSection) userDataSection.style.display = 'none';
  }

  // Toggle del menú al hacer click en avatar
  if (avatar && userMenu) {
    avatar.addEventListener('click', (e) => {
      e.stopPropagation();
      userMenu.classList.toggle('active');
    });
  }

  // Cierra el menú usuario si se hace click fuera
  document.addEventListener('click', (e) => {
    if (userMenu && !userMenu.contains(e.target)) {
      userMenu.classList.remove('active');
    }
  });

  // Logout
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('user');
      window.location.href = 'index.html';
    });
  }

  // ---- BUSCADOR DE PELÍCULAS ----

  const form      = document.getElementById('movieForm');
  const resultDiv = document.getElementById('result');
  const apiKey    = 'dae6a84a';

  // Validación de sesión antes de buscar
  form.addEventListener('submit', async e => {
    let isLoggedIn = !!localStorage.getItem('user');
    if (!isLoggedIn) {
    e.preventDefault();
    resultDiv.innerHTML = `<p style="color: #ff6f61;">Debes iniciar sesión para buscar películas.</p>`;
    return;
  }
    e.preventDefault();

    const title = document.getElementById('Titulo').value.trim();
    const year  = document.getElementById('year').value.trim();
    const plot  = document.getElementById('plot').value;

    if (!title) {
      resultDiv.innerHTML = `<p style="color: #ff6f61;">Por favor ingresa un título.</p>`;
      return;
    }

    const url = `https://www.omdbapi.com/?apikey=${apiKey}` +
                `&t=${encodeURIComponent(title)}` +
                `&y=${encodeURIComponent(year)}` +
                `&plot=${plot}` +
                `&r=json`;
    try {
      const res  = await fetch(url);
      const data = await res.json();

      if (data.Response === 'True') {
        resultDiv.innerHTML = `
          <div class="movie-card">
            <img src="${data.Poster !== 'N/A' ? data.Poster : 'https://via.placeholder.com/200x300?text=Sin+Imagen'}" 
                 alt="Póster de ${data.Title}">
            <div class="movie-info">
              <h2>${data.Title} (${data.Year})</h2>
              <p><strong>Género:</strong> ${data.Genre}</p>
              <p><strong>Director:</strong> ${data.Director}</p>
              <p><strong>Actores:</strong> ${data.Actors}</p>
              <p><strong>Idioma:</strong> ${data.Language}</p>
              <p><strong>Fecha de estreno:</strong> ${data.Released}</p>
              <p><strong>Duracion:</strong> ${data.Runtime}</p>
              <p><strong>Descripción:</strong> ${data.Plot}</p>
              <p><strong>Premios:</strong> ${data.Awards}</p>
              <p><strong>Calificación:</strong> ${data.imdbRating}</p>
            </div>
          </div>
        `;
      } else {
        resultDiv.innerHTML = `<p style="color: #ff6f61;">Película no encontrada. Intenta con otro título.</p>`;
      }
    } catch (err) {
      console.error(err);
      resultDiv.innerHTML = `<p style="color: #ff6f61;">Error al buscar la película.</p>`;
    }
  });
}); 