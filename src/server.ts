import dotenv from "dotenv"; dotenv.config();
import { env } from "./env";
import express from "express";
import conectaNaDataBase from "./config/dbConnect";
import routes from "./routes/userRoutes";

conectaNaDataBase();

const app = express();

routes(app);

app.listen(env.PORT, () => {
    console.log(`Server is runing on port ${env.PORT}...`)
})

