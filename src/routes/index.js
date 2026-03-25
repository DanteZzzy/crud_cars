const express = require('express');
const router = express.Router();

const userController = require("../controllers/userController");
const validateUser = require('../middlewares/validateuser');

// ---------------- USERS ----------------

// Listar todos
router.get('/users', userController.listUsers);

// Buscar por ID
router.get('/users/:id', userController.getUser);

// Criar usuário
router.post('/users', validateUser, userController.createUser);

// Atualizar usuário
router.put('/users/:id', validateUser, userController.updateUser);

// Deletar usuário
router.delete('/users/:id', userController.deleteUser);

module.exports = router;