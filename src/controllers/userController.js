const User = require("../models/userModel");

// Listar todos usuários
async function listUsers(req, res) {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ erro: "Erro ao buscar usuários" });
    }
}

// Buscar usuário por ID
async function getUser(req, res) {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({ erro: "Usuário não identificado" });
        }

        res.json(user);
    } catch (error) {
        res.status(500).json({ erro: "Erro ao buscar usuário" });
    }
}

// Criar usuário
async function createUser(req, res) {
    try {
        const user = new User({
            nome: req.body.nome
        });

        await user.save();

        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ erro: "Erro ao criar usuário" });
    }
}

// Atualizar usuário
async function updateUser(req, res) {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            { nome: req.body.nome },
            { new: true }
        );

        if (!user) {
            return res.status(404).json({ erro: "Usuário não identificado" });
        }

        res.json({
            mensagem: "Usuário atualizado",
            user
        });

    } catch (error) {
        res.status(500).json({ erro: "Erro ao atualizar usuário" });
    }
}

// Deletar usuário
async function deleteUser(req, res) {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) {
            return res.status(404).json({ erro: "Usuário não identificado" });
        }

        res.json({
            mensagem: "Usuário deletado com sucesso"
        });

    } catch (error) {
        res.status(500).json({ erro: "Erro ao deletar usuário" });
    }
}

module.exports = {
    listUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
};