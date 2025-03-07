import { z } from "zod";

//Arquivo para manejar as váriaveis de ambiente do projeto

const envSchema = z.object({
    MONGO_KEY: z.string(),
    PORT: z.coerce.number().default(3000)
})

export const env = envSchema.parse(process.env);