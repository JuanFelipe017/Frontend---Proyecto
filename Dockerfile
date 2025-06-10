# Imagen base con servidor HTTP liviano
FROM nginx:alpine

# Elimina la configuración por defecto de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia tus archivos estáticos al directorio público de Nginx
COPY ./dist /usr/share/nginx/html

# Expone el puerto que usa Nginx
EXPOSE 80

# Inicia el servidor Nginx
CMD ["nginx", "-g", "daemon off;"]