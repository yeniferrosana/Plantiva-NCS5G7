import mongoose from "mongoose";

try {
    await mongoose.connect(process.env.URI_DB);
    console.log("Connect DB ok")
} catch (error) {
    console.log("Error de conexion a mongodb: " + error );
}