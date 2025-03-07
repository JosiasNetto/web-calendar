import dotenv from "dotenv"; dotenv.config();
import { env } from "./env";
import express from "express";
import conectaNaDataBase from "./config/dbConnect";

async function iniciaADataBase(){
        const conexao = await conectaNaDataBase()

        conexao.on("error", (erro) => {
            console.error("Falha ao iniciar ao conectar no Banco:", erro);
        })

        conexao.once("open", () => {
            console.log("Banco de dados conectado com sucesso!")
        })
}

iniciaADataBase();

const app = express();

app.listen(env.PORT, () => {
    console.log("Server is runing...")
})

