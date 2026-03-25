const carRepository = require('../repositories/carRepository');

// Listar
async function listCars(req, res) {
    const cars = await carRepository.getAllCars();
    res.json(cars);
}

// Buscar por id
async function getCar(req, res) {
    const { id } = req.params;

    const car = await carRepository.getCarById(id);

    if (!car) {
        return res.status(404).json({ message: 'Carro não encontrado' });
    }

    res.json(car);
}

// Criar
async function createCar(req, res) {
    const { modelo, marca, ano } = req.body;

    const car = await carRepository.createCar({ modelo, marca, ano });
    res.status(201).json(car);
}

// Atualizar
async function updateCar(req, res) {
    const { id } = req.params;
    const { modelo, marca, ano } = req.body;

    const car = await carRepository.updateCar(id, { modelo, marca, ano });
    res.json(car);
}

// Excluir
async function deleteCar(req, res) {
    const { id } = req.params;

    const deleted = await carRepository.deleteCar(id);
    if (!deleted) {
        return res.status(404).json({ message: 'Carro não encontrado' });
    }
    res.json({ message: 'Carro excluído com sucesso' });
}

module.exports = {
    listCars,
    getCar,
    createCar,
    updateCar,
    deleteCar
};