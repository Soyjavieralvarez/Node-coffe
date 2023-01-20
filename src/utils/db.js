const mongoose = require('mongoose');

const DB_URL = "mongodb+srv://root:root@cluster0.g6xerbs.mongodb.net/coffee-api";

const connectDB = async () => {
    try{
        mongoose.set("strictQuery", true);
        const db = await mongoose.connect(DB_URL);
        console.log('[YIHAAAAAAA] Conectado con éxito a la base de datos');
    }
    catch(error){
        console.log('[SERVER ERROR]Error de conexión con la base de datos', error);
    }
};

module.exports = {
    connectDB
}