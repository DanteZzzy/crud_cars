// Este arquivo é o ponto de entrada do aplicativo Express. Ele configura o servidor, 
// define os middlewares e as rotas, e exporta o aplicativo para ser usado em outros arquivos, 
// como o server.js.

const express = require('express');
const userRoutes = require('./routes/index');
const carRoutes = require('./routes/carRoutes');
const logger = require('./middlewares/logger');

const app = express();

// Middleware que intercepta o Json
app.use(express.json());

// Middleware Global
app.use(logger)

// Rotas Users
app.use(userRoutes);

// Rotas Cars
app.use(carRoutes);

module.exports = app;


