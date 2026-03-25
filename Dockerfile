FROM node:18

# pasta dentro do container
WORKDIR /app

# copia package
COPY package*.json ./

# instala dependencias
RUN npm install

# copia o resto do projeto
COPY . .

# porta da api
EXPOSE 3000

# inicia o servidor
CMD ["node", "server.js"]