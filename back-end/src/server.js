import { env } from "./env.js";
import express from "express";
import conectaNaDataBase from "./config/dbConnect.js";
import routes from "./routes/userRoutes.js";


conectaNaDataBase();

const app = express();

routes(app);

app.listen(env.PORT, () => {
    console.log(`Server is runing on port ${env.PORT}...`)
})

