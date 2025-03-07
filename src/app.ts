import dotenv from "dotenv"; dotenv.config();
import { env } from "./env";
import express from "express";
import conectaNaDataBase from "./config/dbConnect";

conectaNaDataBase();

const app = express();

app.listen(env.PORT, () => {
    console.log("Server is runing...")
})

