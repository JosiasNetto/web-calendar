import { z } from "zod";
import dotenv from "dotenv"; dotenv.config();

//Arquivo para manejar as váriaveis de ambiente do projeto

const envSchema = z.object({
    MONGO_KEY: z.string(),
    PORT: z.coerce.number().default(3000),
    SESSION_SECRET: z.string()
})

export const env = envSchema.parse(process.env);