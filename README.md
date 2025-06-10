# Frontend - Proyecto Computacion en la Nube 

Este repositorio contiene el **frontend** de la aplicación de búsqueda de películas, con registro e inicio de sesión de usuarios.

## 🚀 Tecnologías utilizadas
- HTML5
- CSS3
- JavaScript (vanilla)

## 📦 Estructura

- `css/`: Hojas de estilos para cada página.
- `img/`: Imágenes utilizadas en la interfaz.
- `js/`: Scripts para la lógica de login, registro y página principal.
- `index.html`: Página principal (búsqueda de películas).
- `login.html`: Formulario de inicio de sesión.
- `register.html`: Formulario de registro de usuario.

## ⚙️ Requisitos

- Un navegador web moderno (Chrome, Firefox, Edge, etc).
- El backend debe estar corriendo localmente en `http://localhost:4000` para que el login y registro funcionen correctamente.

## 🛠️ Instalación y uso

1. Clona este repositorio:
   ```bash
   git clone https://github.com/JuanFelipe017/Frontend---Proyecto
   ```
2. Abre `index.html` en tu navegador.

   > **Nota:** Si usas rutas relativas y quieres evitar problemas de CORS, puedes usar [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) de VSCode o algún servidor local.

3. Asegúrate de tener el [backend](https://github.com/tuusuario/Backend---Proyecto) corriendo.

## 🧑‍💻 Funcionalidades

- Registro de nuevos usuarios.
- Inicio de sesión seguro (con contraseña hasheada).
- Búsqueda de películas (solo para usuarios logueados).
- Visualización del usuario logueado en el header.
- Cierre de sesión.

## 📚 Enlaces útiles

- [Repositorio Backend](https://github.com/JuanFelipe017/Backend---Proyecto)