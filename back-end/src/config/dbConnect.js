import mongoose, { mongo } from "mongoose";
import { env } from "../env.js";


async function conectaNaDataBase() {
    mongoose.connect(env.MONGO_KEY);

    mongoose.connection.on("error", (erro) => {
        console.error("Falha ao iniciar ao conectar no Banco:", erro);
    })

    mongoose.connection.once("open", () => {
        console.log("Banco de dados conectado com sucesso!")
    })
}

export default conectaNaDataBase;