const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');

// Listar
router.get('/cars', carController.listCars);
// Buscar por id
router.get('/cars/:id', carController.getCar);
// Criar
router.post('/cars', carController.createCar);
// Atualizar
router.put('/cars/:id', carController.updateCar);
// Excluir
router.delete('/cars/:id', carController.deleteCar);


module.exports = router;