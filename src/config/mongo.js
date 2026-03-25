const mongoose = require("mongoose");

async function connectionMongoDB() {
    try {
        const uri = "mongodb://127.0.0.1:27017/carros";

        await mongoose.connect(uri);

        console.log("✅ MongoDB conectado");
    } catch (error) {
        console.error("Erro ao conectar no MongoDB:", error);
    }
}

module.exports = connectionMongoDB;