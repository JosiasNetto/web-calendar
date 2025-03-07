import mongoose from "mongoose";
import { env } from "../env";


async function conectaNaDataBase() {
    mongoose.connect(env.MONGO_KEY);
    return mongoose.connection;
}

export default conectaNaDataBase;